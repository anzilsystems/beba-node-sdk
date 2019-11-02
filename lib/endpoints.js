
/* Copyright 2017 Vincent Chacha. */
"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;
/**
 * Urls to access when the mode is set to sandbox
 */
var sandbox_urls = exports.sandbox_urls = {

    'auth_url': "https://www.pikieglobal.com/api/v1/oauth2/token",
    'getCouriers': "https://pikieglobal.com/api/v1/get_couriers",
    'getRates': "https://www.pikieglobal.com/api/v1/get_rates",
    'getCountries': "https://www.pikieglobal.com/api/v1/get_countries",
    'getServices': "https://www.pikieglobal.com/api/v1/get_services",
    'getServices': "https://www.pikieglobal.com/api/v1/get_services",
    'getPaymentOptions': "https://www.pikieglobal.com/api/v1/get_payment_options",
    'getOrderStatus': "https://www.pikieglobal.com/api/v1/get_order_status",
    'getNearbyDrivers': "https://www.pikieglobal.com/api/v1/get_nearby_drivers",
    'updateOrderStatus': "https://www.pikieglobal.com/api/v1/order_status",
    'cancelShipment': "https://www.pikieglobal.com/api/v1/cancel_shipment",
    'createShipment': "https://www.pikieglobal.com/api/v1/shipments",

};
/**
 * Urls to access when the mode is set to live. Production urls
 */
var live_urls = exports.live_urls = {

    'auth_url': "https://api.pikieglobal.com/api/v1/oauth2/token",
    'getCouriers': "https://api.pikieglobal.com/api/v1/get_couriers",
    'getRates': "https://api.pikieglobal.com/api/v1/get_rates",
    'getCountries': "https://api.pikieglobal.com/api/v1/get_countries",
    'getServices': "https://api.pikieglobal.com/api/v1/get_services",
    'getServices': "https://api.pikieglobal.com/api/v1/get_services",
    'getPaymentOptions': "https://api.pikieglobal.com/api/v1/get_payment_options",
    'getOrderStatus': "https://api.pikieglobal.com/api/v1/get_order_status",
    'getNearbyDrivers': "https://api.pikieglobal.com/api/v1/get_nearby_drivers",
    'updateOrderStatus': "https://api.pikieglobal.com/api/v1/order_status",
    'cancelShipment': "https://api.pikieglobal.com/api/v1/cancel_shipment",
    'createShipment': "https://api.pikieglobal.com/api/v1/shipments",
};