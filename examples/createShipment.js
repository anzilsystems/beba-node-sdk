var beba = require('beba-node-sdk');
const uuid = require('uuidv4').default;

/**
 * Set the request options
 */

let item_detail = [
    {
        item_name: "Beef Fry",
        item_quantity: 2,
        unit_cost: 40,
        unit_weight: "",
        unit_volume: "",
    },
    {
        item_name: "Ugali Matumbo",
        item_quantity: 5,
        unit_cost: 50,
        unit_weight: "",
        unit_volume: "",
    },
    {
        item_name: "Italian Pizza",
        item_quantity: 6,
        unit_cost: 20,
        unit_weight: "",
        unit_volume: "",
    },
];


const request_options = {

    "unique_id": uuid(), //generate unique id e.g 11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000
    "service_id": "1",
    "customer_name": "Jane Doe",
    "customer_phone": "254721123456",
    "customer_email": "janedoe@gmail.com",
    "pickup_address": "Safari Park Fly Over, Thika Road, Nairobi, Kenya",
    "pickup_country": "KENYA",
    "pickup_latitude": "-1.2256562",
    "pickup_longitude": "36.88495850000004",
    "customer_city": "Nairobi, Kenya",
    "business_name": "ABC Hotel",
    "business_phone": "254721174236",
    "business_email": "johndoe@gmail.com",
    "delivery_address": "Naivas, Outer Ring Road, Nairobi, Kenya",
    "delivery_country": "KENYA",
    "delivery_latitude": "-1.2476927",
    "delivery_longitude": "36.872455",
    "business_city": "Nairobi , Kenya",
    "courier_id": "12",
    "driver_id": "",
    "courier_type": "1",
    "item_detail": item_detail,
    "business_hours": "8.00 AM - 5.00 PM",
    "order_value": "700",
    "shipping_mode": "1",
    "currency_code": "KES"

};

/**
 * Call the api and pass the options as the first parameter
 */
beba.createShipment(request_options, function (data) {

    console.log(data);
})