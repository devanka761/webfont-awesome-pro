# Font Awesome Pro - Downloader

Download the Latest [**Font Awesome Pro**](https://fontawesome.com/) for Free. Get all stylesheets and webfonts into your project easily!

- Downloader Version: v1.0.0
- Font Awesome Pro Version: v7.0.0

## NOTICE
**Font Awesome Pro** Downloader was made for educational purposes only!

This downloader provides **Paid version** for the latest official package. It is intended for experimental and **personal use** only. It is **not licensed for commercial** use.

To unlock commercial use and get an official product license, please consider to go to the Font Awesome official webiste: https://fontawesome.com/plans

## SETUP

```shell
npm install webfont-awesome-pro
```

## USAGE

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

## QUESTIONS

**Download Path Question**

Type the path to save the assets. It will makes new directory if does not exist. Leave it empty to use default folder `fapro`.

Example: `public/fapro`

```
Enter download path: (fapro) public/fapro
✅ Stylesheets and webfonts will be downloaded to `public/fapro`
```
