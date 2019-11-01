"use strict";
require('dotenv').config();
var endpoint = require('./endpoints');
var request = require('request-promise');


var self = module.exports = {
    /**
     * Authentication. This process involves generation of auth token by sending to auth url in mpesa
     *  api both client_id and the secret_id credentials for the auth token to be generated and returned
     * to the client.
     */
    generateBebaToken: function (callback) {
        var client_key = process.env.BEBA_CLIENT_KEY;
        var client_secret = process.env.BEBA_CLIENT_SECRET;
        var auth = "Basic " + new Buffer(client_key + ":" + client_secret).toString("base64");

        const options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": auth,
                'Content-Type': 'application/json'
            },
            json: true // Automatically parses the JSON string in the response
        };
        /** 
        *Check  the MPESA_MODE settings on .env file. Access the sandbox auth url if mode is set to 'sandbox'
        * and access the production url if set to 'live'
        */
        if (process.env.BEBA_ENV == 'sandbox') {
            options.uri = endpoint.sandbox_urls.auth_url;
        }
        else if (process.env.BEBA_ENV == 'live') {
            options.uri = endpoint.live_urls.auth_url;
        }
        return new Promise((resolve, reject) => {
            request(options, (error, res, token) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(token);
                    callback(token);
                }
            });
        });
    },

    /**
      * Use this function to fetch couriers
      * 
      * @param $country_code | Three digit country code
      * @param $category_id  | The service category id
      * @param $callbackURL  | The url to send callback data
    
      * @return mixed|string
      */
    getCouriers: function (request_options, callback) {

        var bodyString = {
            "country_code": request_options.country_code,
            "category_id": request_options.category_id,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getCouriers;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getCouriers;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));


    },

    /**
     * Use this function to estimate shipping rates
     * 
     * @param $pickup_latitude | The latitude of Pickup Point
     * @param $pickup_longitude | The longitude of Pickup Point
     * @param $delivery_latitude | The latitude of Delivery Point
     * @param $delivery_longitude | The longitude of Delivery Point
     * @param $callbackURL | 	The url to send callback data

    * @return string
  */

    getRates: function (request_options, callback) {

        var bodyString = {
            "pickup_latitude": request_options.pickup_latitude,
            "pickup_longitude": request_options.pickup_longitude,
            "delivery_latitude": request_options.delivery_latitude,
            "delivery_longitude": request_options.delivery_longitude,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getRates;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getRates;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
    * Use this function to obtain list of beba supported countries
    * @param $callbackURL | 	The url to send callback data

   * @return string
 */

    getCountries: function (request_options, callback) {

        var bodyString = {
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getCountries;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getCountries;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
        * Use this function to obtain list of all supported services on beba Platform
        * @param $callbackURL | 	The url to send callback data
    
       * @return string
     */

    getServices: function (request_options, callback) {

        var bodyString = {
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getServices;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getServices;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
       * Use this function to get payment methods per country
       * 
       * @param $country_code | Three digit country code
       * @param $callbackURL | 	The url to send callback data
  
      * @return string
    */

    getPaymentOptions: function (request_options, callback) {

        var bodyString = {
            "country_code": request_options.country_code,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getPaymentOptions;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getPaymentOptions;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
       * Use this function to obtain the status of an order based on unique order id
       * 
       * @param $unique_id | UUID Version 4
       * @param $callbackURL | 	The url to send callback data
  
      * @return string
    */

    getOrderStatus: function (request_options, callback) {

        var bodyString = {
            "unique_id": request_options.unique_id,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getOrderStatus;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getOrderStatus;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
     * Use this function to obtain details of nearby drivers
     * 
     * @param $radius | Integer | Distance in KM
     * @param $current_latitude | Integer | Current user latitude
     * @param $current_longitude | Integer | Current user longitude
     * @param $callbackURL | 	The url to send callback data
 
    * @return string
  */

    getNearbyDrivers: function (request_options, callback) {

        var bodyString = {
            "radius": request_options.radius,
            "current_latitude": request_options.current_latitude,
            "current_longitude": request_options.current_longitude,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getNearbyDrivers;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getNearbyDrivers;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
          * Use this function to update the status of an order based on unique order id
          * 
          * @param $unique_id | UUID Version 4
          * @param $callbackURL | 	The url to send callback data
     
         * @return string
       */

    updateOrderStatus: function (request_options, callback) {

        var bodyString = {
            "unique_id": request_options.unique_id,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'PUT',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.updateOrderStatus;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.updateOrderStatus;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
          * Use this function to cancel shipment based on unique order id
          * 
          * @param $unique_id | UUID Version 4
          * @param $callbackURL | 	The url to send callback data
     
         * @return string
       */

    cancelShipment: function (request_options, callback) {

        var bodyString = {
            "unique_id": request_options.unique_id,
            "callbackURL": request_options.callbackURL,
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'DELETE',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.cancelShipment;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.cancelShipment;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },

    /**
         * Use this function to Create Shipment
         * 
         * @param $order_id 
         * @param $unique_id
         * @param $trans_id 
         * @param $service_id 
         * @param $customer_id
         * @param $customer_name
         * @param $customer_phone
         * @param $customer_email
         * @param $pickup_address
         * @param $pickup_latitude
         * @param $pickup_longitude
         * @param $customer_city
         * @param $business_id
         * @param $business_name
         * @param $business_phone
         * @param $business_email
         * @param $delivery_address
         * @param $delivery_country
         * @param $delivery_latitude
         * @param $delivery_longitude
         * @param $business_city
         * @param $courier_id
         * @param $courier_type
         * @param $item_detail
         * @param $business_hours
         * @param $distance
         * @param $order_value
         * @param $shipping_rate
         * @param $paybill_number
         * @param $tax_pin
         * @param $payment_type
    
        * @return string
      */

    createShipment: function (request_options, callback) {

        var bodyString = {
            "order_id": request_options.order_id,
            "unique_id": request_options.unique_id,
            "trans_id": request_options.trans_id,
            "service_id": request_options.service_id,
            "customer_id": request_options.customer_id,
            "customer_name": request_options.customer_name,
            "customer_phone": request_options.customer_phone,
            "customer_email": request_options.customer_email,
            "pickup_address": request_options.pickup_address,
            "pickup_country": request_options.pickup_country,
            "pickup_latitude": request_options.pickup_latitude,
            "pickup_longitude": request_options.pickup_longitude,
            "customer_city": request_options.customer_city,
            "business_id": request_options.business_id,
            "business_name": request_options.business_name,
            "business_phone": request_options.business_phone,
            "business_email": request_options.business_email,
            "delivery_address": request_options.delivery_address,
            "delivery_country": request_options.delivery_country,
            "delivery_latitude": request_options.delivery_latitude,
            "delivery_longitude": request_options.delivery_longitude,
            "business_city": request_options.business_city,
            "courier_id": request_options.courier_id,
            "courier_type": request_options.courier_type,
            "item_detail": JSON.stringify(request_options.item_detail),
            "business_hours": request_options.$business_hours,
            "distance": request_options.distance,
            "order_value": request_options.order_value,
            "shipping_rate": request_options.shipping_rate,
            "paybill_number": request_options.paybill_number, //optional
            "tax_pin": request_options.tax_pin,  //optional
            "payment_type": request_options.payment_type
        };
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            body: bodyString,
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.createShipment;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.createShipment;
        }
        /**
         * Get token and use it to make a request.
         */
        return self.generateBebaToken(function (token) {
        }).then(function (token) {
            var access_token = token.access_token;
            options.headers.Authorization = "Bearer " + access_token;

        })
            .then(function () {
                return request(options).then(function (parsedBody) {
                    callback(parsedBody)
                })
            }).catch(error => console.log(error));

    },












};