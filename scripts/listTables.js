var AWS = require("aws-sdk");
AWS.config.update({
  region: "eu-central-1",
  endpoint: "http://localhost:8000",
});

var dynamodb = new AWS.DynamoDB();

dynamodb.listTables(function (err, data) {
  if (err) {
    console.error(
      "Unable to list table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "table listed. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
