# Chinese New Year 2020 - Year of the Rat Card & Game

This is a Chinese New Year greeting card for 2020 and a mini video game to celebrate the Year of the Rat. Gong Xi Fa Cai, everyone!

Playable at https://shaunanoordin.com/cny2020/ - or if you're looking at the _source code_ - by opening `index.html` on a web browser.

Previous Chinese New Year greeting cards/games:
- https://shaunanoordin.com/cny2019/
- https://shaunanoordin.com/cny2018/
- https://shaunanoordin.com/cny2017/
- https://shaunanoordin.com/cny2016/
- https://shaunanoordin.com/cny2015/
- https://shaunanoordin.com/cny2014/
- https://shaunanoordin.com/cny2013/

Developed by [Shaun A. Noordin](http://shaunanoordin.com)

## Development/Technical Stuff

- Target audience: Casual gamers who celebrate Chinese New Year.
- Target devices: PCs and mobile devices.
- This is a web app built on HTML5, JavaScript, and CSS.
- Developing the web app requires Node.js installed on your machine and a handy command line interface. (Bash, cmd.exe, etc)
- However, the _compiled_ web app itself can be run simply by opening the `index.html` in a web browser. (Chrome, Firefox, etc)

Project anatomy:

- Source JS (ES6 JavaScript) and STYL (Stylus CSS) files are in the `/src` folder.
- Compiled JS and CSS files are in the `/app` folder.
- Media assets are meant to be placed in the `/assets` folder.
- Entry point is `index.html`.

Starting the project (locally):

1. Install the project dependencies by running `npm install`
2. Run `npm start` to start the server.
3. Open `http://localhost:3000` on your browser to view the app.

Alternatively, there's a developer mode:

1. `npm install`
2. `npm run dev`
3. `http://localhost:3000`
4. Changes to the JS and STYL files will now be compiled automatically; i.e. Babel and Stylus now _watch_ the files. Refreshing the browser window should should show the latest edits.
