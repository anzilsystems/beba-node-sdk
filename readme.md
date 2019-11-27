# beba-node-sdk

**Introduction**

This is Beba Node SDK, a product of [Anzil Software Ltd](https://www.anzilsystems.com) for Node.js/Javascript developers to help integrate Pickup and delivery services into their web apps easily. The package uses REST API that is documented on https://www.pikieglobal.com/docs.
 
## Installation

```sh
npm install beba-node-sdk
```

## Configuration
 Set custom environment variables for BEBA_CLIENT_KEY, BEBA_CLIENT_SECRET and BEBA_ENV (i.e live or sandbox) using the export command using the keys you received when registering your application from the developer portal.<br>
 You can Register for a developer account and get your client_id and secret at [Beba Developer Portal](https://developer.pikieglobal.com). <br>

From linux/mac terminal type

 `export BEBA_CLIENT_KEY= YOUR_API_CLIENT_KEY` <br>
 `export BEBA_CLIENT_SECRET=YOUR_API_CLIENT_SECRET`<br>
 `export BEBA_ENV = sandbox`<br>

 For Windows users check this [link](https://helpdeskgeek.com/how-to/create-custom-environment-variables-in-windows/) for setup instructions 

**Callback Responses**<br>
_You should be able to register  callback urls where the callback responses will be sent._

## Usage

  * Require 'beba-node-sdk' in your file.

    ```js
    var beba = require('beba-node-sdk');
    ```

**Get Couriers**

  * This is used to fetch couriers and drivers based on country and service category

    ```js
    const request_options= {
        "country_code": " ",
        "category_id":" ",
      };

      beba.getCouriers(request_options,function(data){
          console.log(data);
      })
      ```

**Get Specific Courier**

  * This is used to fetch a specific couriers based on courier_id

    ```js
    const request_options= {
        "courier_id": " ",
      };

      beba.getSpecificCourier(request_options,function(data){
          console.log(data);
      })

      ```

**Get Specific Driver**

  * This is used to fetch a specific driver based on driver_id

    ```js
    const request_options= {
        "driver_id": "",
      };

      beba.getSpecificDriver(request_options,function(data){
          console.log(data);
      })

    ```

**Get Shipping Rate**

  * This is used to estimate shipping rate based on pickup and delivery coordinates(distance)

    ```js
    const request_options= {
        "pickup_latitude":" ",
        "pickup_longitude":" ",
        "delivery_latitude":"",
        "delivery_longitude":" ",
      };

    beba.getRates(request_options,function(data){
          console.log(data);
      })

     ```

**Get Countries**

  * This is used to obtain list of beba supported countries

   ```js
   const request_options={};
   beba.getCountries(request_options,function(data){
          console.log(data);
     })

   ```

**Get Service Categories**

  * This is used to obtain list of all supported services on beba Platform

   ```javascript
   const request_options={};
   beba.getServices(request_options,function(data){
          console.log(data);
     })
   ```

**Get Payment Options**

  * This is used to obtain list of payment methods available per country

   ```javascript
   const request_options={
          "country_code":""
          };
   beba.getPaymentOptions(request_options,function(data){
          console.log(data);
     })
   ```

**Get Order Status**

  * This is used to obtain the status of an order based on unique order id

   ```javascript
   const request_options={
          "unique_id":""  
      };
   beba.getOrderStatus(request_options,function(data){
          console.log(data);
     })

   ```

**Get Nearby Drivers**

* This is used to obtain details of nearby drivers based on radius and current location.

```js
const request_options= {
        "radius": " ",
        "current_latitude": " ",
        "current_longitude": " "
      };

beba.getNearbyDrivers(request_options,function(data){
      console.log(data);
 })
```

**Get Nearby Couriers**

* This is used to obtain details of nearby couriers based on radius and current location.

```js
const request_options= {
        "radius": "",
        "current_latitude": "",
        "current_longitude": ""
      };
beba.getNearbyCouriers(request_options,function(data){
      console.log(data);
 })
```

**Update Driver Payment Status**

 * This is used to update driver payment status based on unique id and driver id

   ```javascript
   const request_options={
          "unique_id":"",
          "driver_id":"",
          "payment_status":"", 
      };
   beba.updateDriverPayment(request_options,function(data){
          console.log(data);
     })

   ```

**Create Shipment**

 * This is used to create a shipment request

```javascript

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


const request_options={
    "unique_id": "45684e0b-8c73-41be-a118-fc7ab1c17694",
    "service_id": "1",
    "customer_name" : "Jane Doe",
    "customer_phone" : "254721123456",
    "customer_email" : "janedoe@gmail.com",
    "pickup_address" : "Safari Park Fly Over, Thika Road, Nairobi, Kenya",
    "pickup_country" : "KENYA",
    "pickup_latitude" : "-1.2256562",
    "pickup_longitude" : "36.88495850000004",
    "customer_city" : "Nairobi, Kenya",
    "business_name" : "ABC Hotel",
    "business_phone" : "254721174236",
    "business_email" : "johndoe@gmail.com",
    "delivery_address" : "Naivas, Outer Ring Road, Nairobi, Kenya",
    "delivery_country" : "KENYA",
    "delivery_latitude" : "-1.2476927",
    "delivery_longitude" : "36.872455",
    "business_city" : "Nairobi , Kenya",
    "courier_id" : "12",
    "driver_id" : "",
    "courier_type" : "1"
    "item_detail" : item_detail,
    "business_hours" : "8.00 PM - 5 PM",
    "order_value"  : "700",
    "shipping_mode"  : "1",
    "currency_code"  : "KES",
  };

  beba.createShipment(request_options,function(data){
        console.log(data);
    })
```

**Cancel Shipment**

 * This is used to cancel shipment based on unique order id

   ```javascript
   const request_options={
          "unique_id":" " 
      };
   beba.cancelShipment(request_options,function(data){
          console.log(data);
     })

   ```

## Reference

   [REST API Reference] (https://www.pikieglobal.com/docs)


## Support

Need support using this package:-

- _api-feedback@pikieglobal.com_ 

## Contributors

- [Basil Ndonga](https://www.linkedin.com/in/basil-ndonga-1a76ba124/)


If you wish to be added as a contributor to this project let us know.


## Security

If you discover any security related issues, please email _api-feedback@pikieglobal.com_ 




