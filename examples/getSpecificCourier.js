var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "courier_id": "",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getSpecificCourier(request_options, function (data) {

    console.log(data);
})