var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "driver_id": "",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getSpecificDriver(request_options, function (data) {

    console.log(data);
})