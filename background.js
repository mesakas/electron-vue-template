const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
const path = require('path');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
//处理安装与卸载时在Windows上创建与删除快捷方式。
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}



let mainWindow
const createWindow = () => {
  // Create the browser window.
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });



  // 加载前端页面
  if (process.env.NODE_ENV === "development") {
  mainWindow.loadURL("http://localhost:8090");
  } else {
  mainWindow.loadFile(path.join(__dirname, './dist/index.html'));
  }



  // 打开浏览器的 DevTools.
  mainWindow.webContents.openDevTools();




  //主进程与渲染进程之间数据传输的测试
  // ipcMain.on('msg', (event, massage) => {
  //   mainWindow.webContents.send('mainMsg', 'ok')
  // })

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

// 当 Electron 完成初始化并准备创建浏览器窗口时，将调用此方法。
// 有些api只能在此事件发生后使用。
app.on('ready', createWindow);







// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// 在这个文件中，您可以包含应用程序的其他特定主进程代码。
// 您还可以将它们放在单独的文件中并在这里导入它们。