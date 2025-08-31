import fs from "fs"
import waittime from "../helper/waittime"

function manageAllCss(useDir: string, cssUrls: string[]): void {
  const allstyles = cssUrls.map((css) => `@import "./${css}";`).join("\n")
  fs.writeFileSync(`./${useDir}/css/allstyles.css`, `${allstyles}\n`, "utf-8")
  if (!fs.existsSync(`./${useDir}/scss`)) fs.mkdirSync(`./${useDir}/scss`)
  fs.writeFileSync(`./${useDir}/scss/allstyles.scss`, `@import "../css/allstyles.css";\n`, "utf-8")
  cssUrls.forEach((css) => {
    const scssDir = `./${useDir}/scss/${css.replace(".css", ".scss")}`
    const scssContent = `@import "../css/${css}";\n`
    fs.writeFileSync(scssDir, scssContent, "utf-8")
  })
}

export async function createRelease(useDir: string, cssUrls: string[]): Promise<void> {
  await waittime(1000)
  console.log("--------")
  console.log("🕗 Creating Releases Folder")
  manageAllCss(useDir, cssUrls)
  await waittime(1000)
  fs.cpSync(useDir, "dist", { recursive: true })
  fs.rmSync(useDir, { recursive: true, force: true })
}
