import { Downloader } from "nodejs-file-downloader"
import { addDir } from "./dir-checker"
import chalk from "chalk"

let filesDownloaded: string[] = []

export async function downloadFile(fileurl: string, filedir: string, progress: string | null = null): Promise<void> {
  await addDir(`${filedir}`)
  const downloader = new Downloader({
    url: fileurl,
    directory: `./${filedir}`,
    cloneFiles: false
  })
  try {
    await downloader.download()
    const fileorigin = fileurl.split("/")
    const filename = fileorigin[fileorigin.length - 1]
    console.log(`🚀 ${progress ? chalk.yellow(progress) + " " : ""}${filename}`)
    filesDownloaded.push(filename)
  } catch (_error) {
    throw new Error(chalk.red("The version you wanted to download is not available. Please use other release version."))
  }
}
export function getDownloaded(): string[] {
  const files: string[] = [...filesDownloaded]
  filesDownloaded = []
  return files
}
