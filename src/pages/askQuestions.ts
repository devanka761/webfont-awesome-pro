import chalk from "chalk"
import { question } from "../main/question"
import waittime from "../helper/waittime"

export default async function askQuestion(): Promise<{ useDir: string }> {
  console.log("--------")
  await waittime(1000)
  console.log(" ")
  await waittime(100)
  console.log(`Set the ${chalk.cyan("Download Path")}!`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log("Download path can be " + chalk.cyan("`path/to/your/public/folder`") + " or " + chalk.cyan("`anything`") + ".")
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log("if the path does not exist, it will be created automatically.")
  await waittime(500)
  console.log("--------")
  const dir = await question(`Enter download path: ${chalk.bold.cyan("(fapro)")} `)
  const useDir = dir ? dir : "fapro"
  console.log(chalk.bold.cyan(`${useDir}`) + `${dir ? "" : " (default)"}`)
  console.log("--------")
  await waittime(750)
  console.log(" ")
  console.log(chalk.bgYellow.black(" -- Preparing Downloader -- "))
  await waittime(2250)
  console.log(" ")
  return { useDir }
}
