var beba = require('beba');

/**
 * Set the request options
 */
const request_options = {

    "country_code": " ",
    "category_id": " ",
    "callbackURL": "https://ip_address:port/callback_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getCouriers(request_options, function (data) {

    console.log(data);
})