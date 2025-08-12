import { addDir } from "../main/dir-checker"
import waittime from "../helper/waittime"
import { extractFont, getFonts } from "../main/font-extractor"
import { downloadFile } from "../main/file-downloader"
import chalk from "chalk"

export async function readFonts(sheets: string[], useDir: string): Promise<string[]> {
  console.log("--------")
  console.log("🕗 Reading Available Webfonts")
  const dir = `${useDir}/css`
  for (const sheet of sheets) {
    await extractFont(sheet, dir)
  }
  const fonts = getFonts()
  console.log("✅ Found " + chalk.green(fonts.length.toString()) + " Webfonts")
  await waittime(2000)
  return fonts
}
export async function downloadFonts(fonts: string[], filedir: string, baseUrl: string): Promise<void> {
  const dir = `${filedir}/webfonts`
  await addDir(dir)
  const fonturl = baseUrl
  console.log("--------")
  console.log("🕗 Downloading All Webfonts")
  await waittime(2000)
  for (let i = 0; i < fonts.length; i++) {
    const font = fonts[i].replace("..", "")
    const url = `${fonturl}${font}`
    const progress = `[${i + 1}/${fonts.length}]`
    await downloadFile(url, dir, progress)
  }
  console.log(chalk.greenBright("✅ Webfonts Downloaded"))
}
