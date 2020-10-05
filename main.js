// const $ = require('jquery');
// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
"use strict";
const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron')

// let win = null;
const liveUrl = "https://www.youtube.com/results?search_query=%E2%80%9D%E6%98%9F%E9%87%8E%E3%83%8B%E3%82%A2%E2%80%9D+&sp=EgJAAQ%253D%253D";
let w = 480;
let h = 270;

let mainWindow, backWindow;
let windowArr = []
// const url = "index.html"

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        // "frame": false, //タイトルバー削除
        // transparent: false,
        'overlay-scrollbars': false,
        "title-bar-style": "hidden",
        'always-on-top': true,
        // transparent: true,
        // width: 180,
        // height: 80,
        width: w,
        height: h,
        webPreferences: {
            // worldSafeExecuteJavaScript: true, // In Electron 12, the default will be changed to true.
            nodeIntegration: true,
            // nodeIntegration: false, // XSS対策としてnodeモジュールをレンダラープロセスで使えなくする
            // contextIsolation: true, // レンダラープロセスに公開するAPIのファイル
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.loadURL(url)
    mainWindow.on('closed', function () {
        mainWindow = null;
        app.quit();
    });

    // menubar hidden
    mainWindow.setMenu(null);

    // 下記のコメントを解除すると、デベロッパツールが起動する
    mainWindow.webContents.openDevTools();

    // const backWindow = new BrowserWindow({
    //     // "frame": false, //タイトルバー削除
    //     // transparent: false,
    //     'overlay-scrollbars': false,
    //     "title-bar-style": "hidden",
    //     'always-on-top': true,
    //     // transparent: true,
    //     // width: 180,
    //     // height: 80,
    //     width: w * 3,
    //     height: h * 3,
    //     webPreferences: {
    //         nodeIntegration: true
    //     }
    // });
    // backWindow.loadURL('file://' + __dirname + '/back.html');
    // backWindow.setMenu(null);

    // const btn_yt = mainWindow.querySelector('.btn-youtube');

    // btn_yt.addEventListener('click', function (clickEvent) {
    //     windowArr.join( createWindow() );
    // })

    // ウィンドウ作成
    // windowArr.join( createWindow() )


    // win.on('closed', function () {
    //     win = null;
    //     app.quit();
    // });
    ipcMain.on('asynchronous-message', (event, arg) => { // channel名は「asynchronous-message」
        console.log(arg) // "ping"を表示
        windowArr.join(createWindow());
        // event.reply('asynchronous-reply', 'pong')
    })

});

app.on('window-all-closed', () => {
    console.log('app.window-all-closed');
    app.quit();
});

//ブラウザウィンドウ作成
function createWindow() {
    // winを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
    let win;
    win = new BrowserWindow({
        // parent: backWindow,
        // modal: true,
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
            nodeIntegration: false
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
    windowArr.join(win);
    // return win;
}