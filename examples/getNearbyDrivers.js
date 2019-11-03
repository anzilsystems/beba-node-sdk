var beba = require('beba-node-sdk');

/**
 * Set the request options
 */
const request_options = {

    "radius": " ",
    "current_latitude": " ",
    "current_longitude": " ",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getNearbyDrivers(request_options, function (data) {

    console.log(data);
})