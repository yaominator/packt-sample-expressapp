const express = require('express');
const app = express();
const aws = require('aws-sdk');
const s3 = new aws.S3();

const getParams = {
    Bucket: 'com.jiqingyao.firsttest', // your bucket name,
    Key: 'a.txt' // path to the object you're looking for
}

app.get('/', function (req, res) {
  s3.getObject(getParams, function(err, data) {
    // Handle any error and exit
    if (err)
        return err;

    var objectData = data.Body.toString('utf-8'); 
      res.send(objectData);// Use the encoding necessary
    });
})

let server = app.listen(8081, function () {
   let host = server.address().address
   let port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
