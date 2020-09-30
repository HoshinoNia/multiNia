// const $ = require('jquery');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

// let win = null;
const liveUrl = "https://www.youtube.com/results?search_query=%E2%80%9D%E6%98%9F%E9%87%8E%E3%83%8B%E3%82%A2%E2%80%9D+&sp=EgJAAQ%253D%253D";
let w = 480;
let h = 270;

let mainWindow;
let windowArr = []
const url = "index.html"

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        "frame": false, //タイトルバー削除
        'overlay-scrollbars': false,
        "title-bar-style": "hidden",
        'always-on-top': true,
        // transparent: true,
        width: 180,
        height: 80,
        webPreferences: {
            nodeIntegration: false
        }
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // mainWindow.loadURL(url)
    mainWindow.on('closed', function () {
        mainWindow = null;
        app.quit()
    });

    // 下記のコメントを解除すると、デベロッパツールが起動する
    mainWindow.webContents.openDevTools();

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