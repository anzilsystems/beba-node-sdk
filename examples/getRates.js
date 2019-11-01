var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "pickup_latitude": " ",
    "pickup_longitude": " ",
    "delivery_latitude": "",
    "delivery_longitude": " ",
    "callbackURL": "https://ip_address:port/callback_url"

};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getRates(request_options, function (data) {

    console.log(data);
})