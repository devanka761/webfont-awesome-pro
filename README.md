# Font Awesome Pro Plus Downloader

Use the Latest [**Font Awesome Pro Plus**](https://fontawesome.com/) for Free. Get all stylesheets and webfonts into your project easily!

- Downloader Version: v1.1.1
- Font Awesome Pro Version: v7.0.0

## NOTICE
**Font Awesome Pro Plus** Downloader was made for educational purposes only!

This downloader provides **Paid (Pro Plus) Version** for the latest official package. It is intended for experimental and **personal use** only. It is **licensed for commercial** use.

**DO NOT** use this downloader if you are not the *Creators* or you have not buy the official product from the official website.

To unlock commercial use for your own projects, and get an official product license, please consider to go to the Font Awesome official webiste: https://fontawesome.com/plans

## SETUP

```bash
npm install webfont-awesome-pro
```

## USAGE

Choose one from the following how you want to use the downloader.

#### Command Line
```bash
npx webfapro
```

#### Script `package.json`
```javascript
...
"scripts": {
  ...
  "get-fapro": "webfapro"
}
```
```bash
npm run get-fapro
```

#### JavaScript/TypeScript ES Modules - import
```javascript
import { getFapro } from "webfont-awesome-pro";

// start the downloader
getFapro();
```

#### JavaScript/TypeScript CommonJS - require
```javascript
const { getFapro } = require("webfont-awesome-pro");

// start the downloader
getFapro();
```

## DOWNLOAD PATH

Once the downloader is running, it will ask you to enter the download path. Type the path where you want to save the assets. It will makes new directory if does not exist. Leave it empty to use default folder `fapro`.

Example: `public/assets/fapro`
