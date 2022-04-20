'use strict';

const express = require('express');
const os = require('os');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(
    `<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello AWS ${os.hostname()}</h1></body>`
  );
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// #!/bin/bash
// sudo yum update -y
// sudo yum install -y httpd
// sudo service httpd start
// sudo systemctl enable httpd.service
// echo "<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>VietAWS</h1></body>" > /var/www/html/index.html

// #!/bin/bash
// # install httpd
// sudo yum update -y
// sudo yum install -y httpd
// sudo service httpd start
// sudo systemctl enable httpd.service
// echo "<body style='background-color:#283E5B'><h1 style='color: orange;text-align:center'>Hello AWS from $(hostname -f)</h1></body>" > /var/www/html/index.html
