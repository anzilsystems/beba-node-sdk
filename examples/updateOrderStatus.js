var beba = require('beba');

/**
 * Set the request options
 */
const request_options = {

    "unique_id": " ",
    "callbackURL": "https://ip_address:port/callback_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.updateOrderStatus(request_options, function (data) {

    console.log(data);
})