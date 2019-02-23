const onvif = require("node-onvif");
const fs = require('fs');

    console.log('Start the discovery process.');
    // Find the ONVIF network cameras.
    // It will take about 3 seconds.
      onvif.startProbe().then((device_info_list) => {
      console.log(device_info_list.length + ' devices were found.');
      // Show the device name and the URL of the end point.
      device_info_list.forEach((info) => {
        console.log('- ' + info.urn);
        console.log('  - ' + info.name);
        console.log('  - ' + info.xaddrs[0]);
      });
    }).catch((error) => {
      console.error(error);})

      // Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: 'http://192.168.1.98:80/onvif/device_service',
  user : 'admin',
  pass : '123456'
});


  
  // Initialize the OnvifDevice object
  device.init().then(() => {
    // Get the UDP stream URL
    let url = device.getUdpStreamUrl();
    console.log(url);
  }).catch((error) => {
    console.error(error);
  });