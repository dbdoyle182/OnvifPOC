const express = require("express");

const app = express();
const PORT = 3001

app.post("/stream", (req, res) => {
    let device = new onvif.OnvifDevice({
        xaddr: 'http://192.168.1.98:80/onvif/device_service',
        user : 'admin',
        pass : '123456'
      });
      
      
        
        // Initialize the OnvifDevice object
        device.init().then(() => {
          // Get the UDP stream URL
          let url = device.getUdpStreamUrl();
          res.json(url)
        }).catch((error) => {
          console.error(error);
        });
})
// start the server
app.listen(PORT, () => {
  console.log(
    "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
  );
});
