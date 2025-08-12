import chalk from "chalk"
import waittime from "../helper/waittime"
import { question } from "../main/question"

export default async function unofficialNotice(): Promise<{ isOk: boolean }> {
  console.log(chalk.bgCyan.black(" -- Font Awesome Pro Downloader | Devanka761 -- "))
  await waittime(500)
  console.log("")
  console.log("--------")
  console.log(`Font Awesome Pro Downloader was made for ${chalk.yellow("educational purposes")} only!`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log(`This downloader provides ${chalk.bold.green("Paid version")} for the latest Official Package. It is intended for ${chalk.yellow("experimental")} and ${chalk.yellow("personal use")} only. It is ${chalk.red("not licensed")} for commercial use.`)
  await waittime(100)
  console.log("--------")
  await waittime(100)
  console.log(`To unlock commercial use and get an official product license, please consider to go to the ${chalk.green("Font Awesome")} webiste: ${chalk.green("https://fontawesome.com/plans")}`)
  await waittime(100)
  console.log("--------")
  await waittime(500)
  let agree = await question(`Continue to download? (${chalk.cyan("Y")}/n) `)
  agree = agree ? agree.toLowerCase() : "y"
  const notAgrees = ["no", "n", "nope"]
  const isOk = notAgrees.find((textNo) => textNo === agree) ? false : true
  console.log(chalk.cyan(isOk ? "y" : "n"))
  if (!isOk) {
    console.log("--------")
    await waittime(1000)
    console.log(chalk.red("⛔ Font Awesome Pro Downloader Canceled"))
    await waittime(1000)
    console.log(chalk.bgRed.black(" --- DONE --- "))
  }

  return { isOk }
}
