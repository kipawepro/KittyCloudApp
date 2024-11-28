const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1200,
    minHeight: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      partition: 'persist:kittycloud',
    },
    frame: true,
    resizable: true,
    icon: __dirname + '/assets/logo.ico',
});
    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    setTimeout(() => {
        mainWindow.loadURL('http://kittyteam.freeboxos.fr:49155/');
      }, 1000);

  Menu.setApplicationMenu(null);
});
