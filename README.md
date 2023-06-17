<p align='center'>
    <img src='public/lock.svg'/>
</p>

Generate a secure password, customizing the length, characters and the numbers of passwords you want to generate.

## Setting up development environment

Requirements:
- [Node.js](https://nodejs.org/en/)

1. Clone the repository
```bash
git clone https://github.com/Zoltw/password-generator.git
```
2. Install dependencies
```bash
npm ci
```
3. In root directory, run the development server
```bash
npm run dev
```

## Setting up production as chrome extension

Requirements:
- [Node.js](https://nodejs.org/en/)

1. Clone the repository
```bash
git clone https://github.com/Zoltw/password-generator.git
```
2. Install dependencies
```bash
npm ci
```
3. In root directory, run the build script
```bash
npm run build
```
4. Load the extension in chrome
- Go to `chrome://extensions/`
- Enable `Developer mode`
- Click `Load unpacked`
- Select the `dist` folder
- Run the extension by clicking the `puzzle` icon

<br>
<br>
View of project in development environment and production as chrome extension might looks different.