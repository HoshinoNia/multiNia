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
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36"
app.userAgentFallback = UA;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        "frame": false, //タイトルバー削除
        fullscreenable: false,
        'overlay-scrollbars': false,
        "title-bar-style": "hidden",
        alwaysOnTop: true,
        // transparent: true,
        width: w,
        height: h,
        webPreferences: {
            worldSafeExecuteJavaScript: true, // In Electron 12, the default will be changed to true.
            nodeIntegration: false, // XSS対策としてnodeモジュールをレンダラープロセスで使えなくする
            contextIsolation: true, // レンダラープロセスに公開するAPIのファイル
            'webviewTag': true,
            preload: __dirname + '/preload.js'
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/yt_root.html');
    // mainWindow.loadURL(liveUrl)
    mainWindow.on('closed', function () {
        mainWindow = null;
        app.quit();
    });

    // menubar hidden
    mainWindow.setMenu(null);

    // 下記のコメントを解除すると、デベロッパツールが起動する
    // mainWindow.webContents.openDevTools();

    // タイマー開始（レンダラープロセスからのIPC通信：invokeメソッド）
    ipcMain.handle("ipc-newWindow", () => {
        windowArr.join(createWindow());
        return true;
    });

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
        width: w,
        height: h,
        minWidth: w,
        minHeight: h,
        resizable: true,
        fullscreenable: false,
        frame: false,
        alwaysOnTop: true,
        "title-bar-style": "hidden",
        webPreferences: {
            worldSafeExecuteJavaScript: true, // In Electron 12, the default will be changed to true.
            nodeIntegration: false, // XSS対策としてnodeモジュールをレンダラープロセスで使えなくする
            contextIsolation: true, // レンダラープロセスに公開するAPIのファイル
            // preload: __dirname + '/preloadYt.js'
            'webviewTag': true,
        }
        // 'node-integration': false
    });
    // win.setMenu(null);
    // win.menuBarVisible = false;

    // // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
    // win.loadURL('file://' + __dirname + '/index.html');

    // ChromiumのDevツールを開く
    // win.webContents.openDevTools();

    // Load a remote URL
    // win.loadURL(liveUrl);
    win.loadURL('file://' + __dirname + '/yt.html');

    win.on('closed', function () {
        win = null;
        // app.quit();
    });
}