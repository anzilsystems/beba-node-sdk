"use strict";
require('dotenv').config();
var endpoint = require('./endpoints');
var request = require('request-promise');
var php = require('js-php-serialize');


var self = module.exports = {
    /**
     * Authentication. This process involves generation of auth token by sending to auth url in beba
     *  api both client_id and the secret_id credentials for the auth token to be generated and returned
     * to the client.
     */
    generateBebaToken: function (callback) {
        var client_key = process.env.BEBA_CLIENT_KEY;
        var client_secret = process.env.BEBA_CLIENT_SECRET;
        var auth = "Basic " + Buffer.from(client_key + ":" + client_secret).toString("base64");

        var bodyString = {
            "grant_type": "client_credentials",
        };

        const options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": auth,
                'Content-Type': 'application/json'
            },
            body: bodyString,
            json: true // Automatically parses the JSON string in the response
        };
        /** 
        *Check  the BEBA_MODE settings on .env file. Access the sandbox auth url if mode is set to 'sandbox'
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
    * Use this function to fetch a specific courier
    * @param $courier_id  | The courier id
    * 
    */
    getSpecificCourier: function (request_options, callback) {
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getSpecificCourier + "/" + request_options.courier_id;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getSpecificCourier + "/" + request_options.courier_id;
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
   * Use this function to fetch a specific driver
   * @param $driver_id  | The driver id
   * 
   */
    getSpecificDriver: function (request_options, callback) {
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getSpecificCourier + "/" + request_options.driver_id;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getSpecificCourier + "/" + request_options.driver_id;
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

    * @return string
  */

    getRates: function (request_options, callback) {

        var bodyString = {
            "pickup_latitude": request_options.pickup_latitude,
            "pickup_longitude": request_options.pickup_longitude,
            "delivery_latitude": request_options.delivery_latitude,
            "delivery_longitude": request_options.delivery_longitude,
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
    * 
    */

    getCountries: function (request_options, callback) {

        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
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
        *  
     */

    getServices: function (request_options, callback) {

        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'GET',
            headers: {
                "Authorization": ''
            },
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
       * @param $country_code | Three letter ISO  country code
      
      * @return string
    */

    getPaymentOptions: function (request_options, callback) {

        var bodyString = {
            "country_code": request_options.country_code,
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
  
      * @return string
    */

    getOrderStatus: function (request_options, callback) {
        // request option
        var options = {
            uri: '',
            port: 443,
            method: 'POST',
            headers: {
                "Authorization": ''
            },
            json: true // Automatically stringifies the body to JSON
        };

        /**
         * Check .env file for mode configuration//sandbox/live
         */
        if (process.env.BEBA_ENV === 'sandbox') {
            options.uri = endpoint.sandbox_urls.getOrderStatus + "/" + request_options.unique_id;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getOrderStatus + "/" + request_options.unique_id;
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
   * Use this function to obtain details of nearby drivers
   * 
   * @param $radius | Integer | Distance in KM
   * @param $current_latitude | Integer | Current user latitude
   * @param $current_longitude | Integer | Current user longitude
   * @param $callbackURL | 	The url to send callback data
 
  * @return string
*/

    getNearbyCouriers: function (request_options, callback) {

        var bodyString = {
            "radius": request_options.radius,
            "current_latitude": request_options.current_latitude,
            "current_longitude": request_options.current_longitude,
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
            options.uri = endpoint.sandbox_urls.getNearbyCouriers;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.getNearbyCouriers;
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
         * Use this function to update the payment status of a specific based on unique id and driver id
         * 
         * @param $unique_id | UUID Version 4
         * @param $driver_id 
         * @param $payment_status | 	0, 1
    
        * @return string
      */

    updateDriverPayment: function (request_options, callback) {

        var bodyString = {
            "payment_status": request_options.payment_status,
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
            options.uri = endpoint.sandbox_urls.updateDriverPayment + "/" + request_options.unique_id;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.updateDriverPayment + "/" + request_options.unique_id;
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
     
         * @return string
       */

    cancelShipment: function (request_options, callback) {
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
            options.uri = endpoint.sandbox_urls.cancelShipment + "/" + request_options.unique_id;
        } else if (process.env.BEBA_ENV === 'live') {
            options.uri = endpoint.live_urls.cancelShipment + "/" + request_options.unique_id;
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
         * @param $unique_id
         * @param $service_id 
         * @param $customer_name
         * @param $customer_phone
         * @param $customer_email
         * @param $pickup_address
         * @param $pickup_latitude
         * @param $pickup_longitude
         * @param $customer_city
         * @param $business_name
         * @param $business_phone
         * @param $business_email
         * @param $delivery_address
         * @param $delivery_country
         * @param $delivery_latitude
         * @param $delivery_longitude
         * @param $business_city
         * @param $courier_id
         * @param $driver_id
         * @param $courier_type
         * @param $item_detail
         * @param $business_hours
         * @param $order_value
         * @param $shipping_mode
         * @param $currency_code
        
    
        * @return string
      */

    createShipment: function (request_options, callback) {

        var bodyString = {

            "unique_id": request_options.unique_id,
            "service_id": request_options.service_id,
            "customer_name": request_options.customer_name,
            "customer_phone": request_options.customer_phone,
            "customer_email": request_options.customer_email,
            "pickup_address": request_options.pickup_address,
            "pickup_country": request_options.pickup_country,
            "pickup_latitude": request_options.pickup_latitude,
            "pickup_longitude": request_options.pickup_longitude,
            "customer_city": request_options.customer_city,
            "business_name": request_options.business_name,
            "business_phone": request_options.business_phone,
            "business_email": request_options.business_email,
            "delivery_address": request_options.delivery_address,
            "delivery_country": request_options.delivery_country,
            "delivery_latitude": request_options.delivery_latitude,
            "delivery_longitude": request_options.delivery_longitude,
            "business_city": request_options.business_city,
            "courier_id": request_options.courier_id,
            "driver_id": request_options.driver_id,
            "courier_type": request_options.courier_type,
            "item_detail": php.serialize(request_options.item_detail),
            "business_hours": request_options.$business_hours,
            "order_value": request_options.order_value,
            "shipping_mode": request_options.shipping_mode,
            "currency_code": request_options.currency_code
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