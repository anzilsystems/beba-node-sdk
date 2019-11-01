var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "country_code": " ",
    "callbackURL": "https://ip_address:port/callback_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getPaymentOptions(request_options, function (data) {

    console.log(data);
})