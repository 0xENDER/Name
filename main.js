const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const iconPath = path.join(__dirname, "UI/icon", "icon-128.png");

app.commandLine.appendSwitch("--force_high_performance_gpu");
app.commandLine.appendSwitch("--force-high-performance-gpu");
app.commandLine.appendSwitch('--ssl-version-fallback-min', 'tls1.2');
app.commandLine.appendSwitch("autoplay-policy", "no-user-gesture-required");
app.commandLine.appendSwitch("disable-http-cache");
let win;
app.on('ready', () => {
    win = new BrowserWindow({
        width: 1080,
        height: 640,
        show: true,
        icon: iconPath,
        webPreferences: {
            devTools: true,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            preload: path.join(__dirname, 'preload.js'),
            sandbox: true,
            enableRemoteModule: true,
            javascript: true,
            webSecurity: true,
            allowRunningInsecureContent: false,
            images: true,
            textAreasAreResizable: false,
            webgl: true,
            plugins: true,
            experimentalFeatures: false,
            offscreen: false,
            contextIsolation: false,
            nativeWindowOpen: false,
            autoplayPolicy: "no-user-gesture-required",
            spellcheck: false
        },
        resizable: true,
        maximizable: true,
        minimizable: true,
        closable: true,
        fullscreenable: true,
        minHeight: 640,
        minWidth: 1080
    });
    win.setMenu(null);
    win.loadURL(url.format({
        //pathname: path.join(__dirname, 'window.html'),
        pathname: path.join(__dirname, 'window.html'),
        protocol: "file",
        slashes: true
    }));
    ['resize', 'move', 'close'].forEach(function(e) {
        win.on(e, function() {
            //storeWindowState();
        });
    });
    win.on('closed', () => {
        win = null;
    });
    win.webContents.openDevTools();
    /*win.once('ready-to-show', () => {
      win.show();
      win.focus();
    });*/
});
app.on('renderer-process-crashed', function() {
    alert("EnderBrowser stopped working!");
});
app.on('ready', function() {
    //
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
app.on('will-finish-launching', () => {
    //
});