var beba = require('beba');

/**
 * Set the request options
 */
const request_options = {

    "radius": " ",
    "current_latitude": " ",
    "current_longitude": " ",
    "callbackURL": "https://ip_address:port/callback_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getNearbyDrivers(request_options, function (data) {

    console.log(data);
})