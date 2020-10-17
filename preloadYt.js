function injectStylesheet() {
    // hideTopBar();
    // upChat();
    // displayMax();
}

function hideTopBar() {
    const ct = document.getElementById("container");
    const pm = document.getElementById("page-manager");
    ct.style.display = "none";
    pm.style.marginTop = "0";
}

function upChat() {
    const ct = document.getElementById("chat");
    const input = document.getElementById("input-panel");
    ct.style.marginTop = "0";
    input.style.position = "fixed";
    input.style.top = "0";
    input.style.zIndex = "100";
}

// function displayMax() {
//     const iframe = getElementsByTagName("iframe");
//     iframe.style.height = "100vh";
//     iframe.style.position = "fixed";
// }

document.addEventListener('DOMContentLoaded', function () {});

// document.addEventListener('DOMContentLoaded', function () {
//     //中略
//     // injectScripts();
//     injectStylesheet(); //CSSの読み込み
// });

// var wbs = document.getElementsByClassName('wv');

// wbs.forEach(webview => {
//     webview.addEventListener('dom-ready', function () {
//         //中略
//         // injectScripts();
//         injectStylesheet(); //CSSの読み込み
//     });
// });