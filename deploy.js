#!/usr/bin/env node
const fs = require('fs');
const FtpClient = require('ftp');
const glob = require('glob');

const basePath = './public';
const destinationPath = '/public_html';
const config = {
  // We store the credentials for
  // our FTP server as environemnt
  // variables for security reasons.
  host: process.env.FTP_HOST,
  password: process.env.FTP_PASSWORD,
  user: process.env.FTP_USER,
};

const ftpClient = new FtpClient();

function createDirectory(destination) {
  return ftpClient.mkdir(destination, true, (error) => {
    if (error) throw error;

    ftpClient.end();
  });
}

function uploadFile(file, destination) {
  ftpClient.put(file, destination, (error) => {
    if (error) throw error;

    console.log(`${file} => ${destination}`);
    ftpClient.end();
  });
}

// Check if the path is a directory and
// either create the directory on the server
// if it is a directory, or upload the file
// if it is a file.
function handlePath(path) {
  const relativeFile = path.replace(`${basePath}/`, '');
  const destination = `${destinationPath}/${relativeFile}`;

  if (fs.lstatSync(path).isDirectory()) {
    return createDirectory(destination);
  }

  return uploadFile(path, destination);
}

function isExpired(date) {
  return true;
}

function cleanup(pathObject, directory) {
  if (pathObject.name === '.' || pathObject.name === '..') return;

  const path = `${directory}/${pathObject.name}`;

  // If the current path is a directory
  // we recursively check the files in it.
  if (pathObject.type === 'd') {
    return cleanupRemoteDirectory(path);
  }

  if (isExpired(pathObject.date)) {
    ftpClient.delete(path, (error) => {
      if (error) throw error;

      console.log(`Removed: ${path}`);
      ftpClient.end();
    });
  }
}

function cleanupRemoteDirectory(directory) {
  return ftpClient.list(directory, (error, pathObjects) => {
    if (error) throw error;

    pathObjects.forEach(pathObject => cleanup(pathObject, directory));
    ftpClient.end();
  });
}


ftpClient.on('ready', () => {
  cleanupRemoteDirectory(destinationPath);
  glob.sync(`${basePath}/**/*`).forEach(handlePath);
});

ftpClient.connect(config);