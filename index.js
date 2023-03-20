const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 1750,
        height: 700,
        minHeight:700,
        minWidth:1750,
        icon: "./images/favicon.png",
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("index.html");
    //win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

// npm install electron --save-dev   -=-   node_modules
// npm start +
// npm i electron-builder -D   -=-   build
// npm run build   -=-   exe
