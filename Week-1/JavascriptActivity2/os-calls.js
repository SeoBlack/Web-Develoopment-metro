const os = require("os");

function getOSInfo() {
  const systemInfo = {
    memory: os.totalmem() / 1024 / 1024 / 1024 + " GB" ?? "none",
    cpu: os.cpus() ?? "none",
    hostname: os.hostname() ?? "none",
    platform: os.platform() ?? "none",
    release: os.release() ?? "none",
    type: os.type() ?? "none",
    version: os.version() ?? "none",
    uptime: os.uptime() / 60 / 60 / 24 + " days",
    loadavg: os.loadavg() ?? "none",
    networkInterfaces: os.networkInterfaces() ?? "none",
  };

  return JSON.stringify(systemInfo);
}

module.exports = {
  getOSInfo,
};
