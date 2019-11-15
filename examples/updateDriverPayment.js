var beba = require('beba');

/**
 * Set the request options
 */
const request_options = {
    "unique_id": "",
    "driver_id": "",
    "payment_status": "",
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.updateDriverPayment(request_options, function (data) {

    console.log(data);
})