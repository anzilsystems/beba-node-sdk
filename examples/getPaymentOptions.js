var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "country_code": " ",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getPaymentOptions(request_options, function (data) {

    console.log(data);
})