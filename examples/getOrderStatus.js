var beba = require('beba');

/**
 * Set the request options
 */
const request_options = {
    "unique_id": " ",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getOrderStatus(request_options, function (data) {

    console.log(data);
})