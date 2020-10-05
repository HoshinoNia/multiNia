const {
    contextBridge,
    ipcRenderer
} = require("electron");
contextBridge.exposeInMainWorld(
    "api", {
        newWindow: () =>
            ipcRenderer.invoke("ipc-newWindow")
            .then(result => result)
            .catch(err => console.log(err)),
        // TimerStart: () =>
        //     ipcRenderer.invoke("ipc-timer-start")
        //     .then(result => result)
        //     .catch(err => console.log(err)),
        // TimerStop: () => ipcRenderer.send("ipc-timer-stop"),
        // TimerReset: () => ipcRenderer.send("ipc-timer-reset"),
        // DisplayTimer: (channel, listener) => {
        //     ipcRenderer.on("ipc-display-timer", (event, arg) => listener(arg));
        // }
    }
);