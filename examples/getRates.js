var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "pickup_latitude": " ",
    "pickup_longitude": " ",
    "delivery_latitude": "",
    "delivery_longitude": " ",

};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getRates(request_options, function (data) {

    console.log(data);
})