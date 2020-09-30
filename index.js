// const log = require('electron-log');
// let windowArr = []
// const liveUrl = "https://www.youtube.com/results?search_query=%E2%80%9D%E6%98%9F%E9%87%8E%E3%83%8B%E3%82%A2%E2%80%9D+&sp=EgJAAQ%253D%253D";
// const button = document.querySelector('.btn-yt');

// button.addEventListener('click', function (clickEvent) {
//     log.info("ボタン押された");
//     // windowArr.join(createWindow());
// })

console.log("index.js loaded")
// var id = "btn-test"
var btn = document.querySelector('#btn-test');
// btn.addEventListener("click", function () {
//     console.log("clicked");
// })
btn.onClick = function () {
    console.log("clicked");
}





//   var windowArr = [];
//   var liveUrl = "https://www.youtube.com/results?search_query=%E2%80%9D%E6%98%9F%E9%87%8E%E3%83%8B%E3%82%A2%E2%80%9D+&sp=EgJAAQ%253D%253D";
//   var remote = require('remote');
//   var BrowserWindow = remote.require('browser-window');

//   var btn_yt = document.getElementById("btn-yt");
//   // var btn_wrap = document.getElementById("btn-wrap");

//   btn_yt.addEventListener('click', function (clickEvent) {
//       // windowArr.join( createWindow() );
//       // createWindow();
//       remote.app.quit();
//   })
//   createWindow();

function createWindow() {
    // winを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
    let win;
    win = new BrowserWindow({
        useContentSize: true,
        width: 480,
        height: 270,
        minWidth: 100,
        minHeight: 100,
        resizable: true,
        fullscreenable: false,
        // frame: false,
        alwaysOnTop: true,
        // "title-bar-style": "hiddenInset",
        // titleBarStyle: 'hiddenInset',
        // "title-bar-style": "hidden-inset",
        webPreferences: {
            nodeIntegration: true
        }
        // 'node-integration': false
    });
    // win.setMenu(null);
    win.menuBarVisible = false;

    // // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
    // win.loadURL('file://' + __dirname + '/index.html');

    // ChromiumのDevツールを開く
    // win.webContents.openDevTools();

    // Load a remote URL
    win.loadURL(liveUrl);

    win.on('closed', function () {
        win = null;
        // app.quit();
    });
}
//       windowArr.join(win);
//       // return win;