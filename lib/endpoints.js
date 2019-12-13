
/* Copyright 2017 Vincent Chacha. */
"use strict";

var sdkVersion = exports.sdkVersion = require('../package').version;
/**
 * Urls to access when the mode is set to sandbox
 */
var sandbox_urls = exports.sandbox_urls = {

    'auth_url': "https://sandbox.pikieglobal.com.com/api/v1/oauth2/token",
    'getCouriers': "https://sandbox.pikieglobal.com.com/api/v1/couriers",
    'getSpecificCourier': "https://sandbox.pikieglobal.com.com/api/v1/couriers",
    'getSpecificDriver': "https://sandbox.pikieglobal.com.com/api/v1/drivers",
    'getRates': "https://sandbox.pikieglobal.com.com/api/v1/rates",
    'getCountries': "https://sandbox.pikieglobal.com.com/api/v1/countries",
    'getServices': "https://sandbox.pikieglobal.com.com/api/v1/services",
    'getPaymentOptions': "https://sandbox.pikieglobal.com.com/api/v1/payment-options",
    'getOrderStatus': "https://sandbox.pikieglobal.com.com/api/v1/order-status",
    'getOrderDetail': "https://sandbox.pikieglobal.com.com/api/v1/order-detail",
    'getNearbyDrivers': "https://sandbox.pikieglobal.com.com/api/v1/nearby-drivers",
    'getNearbyCouriers': "https://sandbox.pikieglobal.com.com/api/v1/nearby-couriers",
    'cancelShipment': "https://sandbox.pikieglobal.com.com/api/v1/shipments",
    'createShipment': "https://sandbox.pikieglobal.com.com/api/v1/shipments",

};
/**
 * Urls to access when the mode is set to live. Production urls
 */
var live_urls = exports.live_urls = {

    'auth_url': "https://api.pikieglobal.com/api/v1/oauth2/token",
    'getCouriers': "https://api.pikieglobal.com/api/v1/couriers",
    'getSpecificCourier': "https://api.pikieglobal.com/api/v1/couriers",
    'getSpecificDriver': "https://api.pikieglobal.com/api/v1/drivers",
    'getRates': "https://api.pikieglobal.com/api/v1/rates",
    'getCountries': "https://api.pikieglobal.com/api/v1/countries",
    'getServices': "https://api.pikieglobal.com/api/v1/services",
    'getPaymentOptions': "https://api.pikieglobal.com/api/v1/payment-options",
    'getOrderStatus': "https://api.pikieglobal.com/api/v1/order-status",
    'getOrderDetail': "https://api.pikieglobal.com.com/api/v1/order-detail",
    'getNearbyDrivers': "https://api.pikieglobal.com/api/v1/nearby-drivers",
    'getNearbyCouriers': "https://api.pikieglobal.com/api/v1/nearby-couriers",
    'cancelShipment': "https://api.pikieglobal.com/api/v1/shipments",
    'createShipment': "https://api.pikieglobal.com/api/v1/shipments",
};