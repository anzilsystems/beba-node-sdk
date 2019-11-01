var beba = require('beba');

/**
 * Set the request options
 */

const item_detail = {
    0: {
        'item_name': '',
        'qty_no': '',
        'rate': ''
    },
    1: {
        'item_name': '',
        'qty_no': '',
        'rate': ''
    },
};


const request_options = {

    "order_id": "5",
    "unique_id": "45684e0b-8c73-41be-a118-fc7ab1c17694",
    "trans_id": "5",
    "service_id": "1",
    "customer_id": "4",
    "customer_name": "Jane Doe",
    "customer_phone": "254721123456",
    "customer_email": "janedoe@gmail.com",
    "pickup_address": "Safari Park Fly Over, Thika Road, Nairobi, Kenya",
    "pickup_country": "KENYA",
    "pickup_latitude": "-1.2256562",
    "pickup_longitude": "36.88495850000004",
    "customer_city": "Nairobi, Kenya",
    "business_id": "1",
    "business_name": "ABC Hotel",
    "business_phone": "254721174236",
    "business_email": "johndoe@gmail.com",
    "delivery_address": "Naivas, Outer Ring Road, Nairobi, Kenya",
    "delivery_country": "KENYA",
    "delivery_latitude": "-1.2476927",
    "delivery_longitude": "36.872455",
    "business_city": "Nairobi , Kenya",
    "courier_id": "12",
    "courier_type": "corporate",
    "item_detail": item_detail,
    "business_hours": "8.00 PM- 5 PM",
    "distance": "7.1",
    "order_value": "700",
    "shipping_rate": "355",
    "paybill_number": "35323",
    "tax_pin": "123455",
    "payment_type": "bank",
    "callbackURL": "https://ip_address:port/callback_url"
};

/**
 * Call the api and pass the options as the first parameter
 */
beba.getCouriers(request_options, function (data) {

    console.log(data);
})