# beba-node-sdk

**Introduction**

This is a Beba sdk for node.js developers to help javascript developers integrate Pickup and delivery services into their web apps easily. The package uses REST API that is documented on https://www.pikieglobal.com/docs.
 
## Installation

```sh
npm install beba-node-sdk
```

## Configuration
 Set custom environment variables for BEBA_CLIENT_KEY,BEBA_CLIENT_SECRET and BEBA_ENV(i.e live or sandbox) using the export command using the keys you received when registering your application from the developer portal.<br>
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
**Get Shipping Rate**
 * This is used to estimate shipping rate based on pickup and delivery coordinates(distance)

    ```javascript
   const request_options={
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

 *This is used to obtain list of beba supported countries

   ```javascript
   const request_options={};
   beba.getCountries(request_options,function(data){
          console.log(data);
     })
   ```

**Get Service Categories**

 *This is used to obtain list of all supported services on beba Platform

   ```javascript
   const request_options={};
   beba.getServices(request_options,function(data){
          console.log(data);
     })
   ```

**Get Payment Options**

 *This is used to obtain list of payment methods available per country

   ```javascript
   const request_options={
          "country_code":""};
   beba.getPaymentOptions(request_options,function(data){
          console.log(data);
     })
   ```

**Get Order Status**

 *This is used to obtain the status of an order based on unique order id

   ```javascript
   const request_options={
          "unique_id":" "
          "callbackURL":"https://ip_address:port/callback_url"
        
      };
   beba.getOrderStatus(request_options,function(data){
          console.log(data);
     })

   ```

**Get Nearby Drivers**

This is used to obtain details of nearby drivers based on radius and current location.

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


**Update Order Status**

 *This is used to update the status of an order based on unique order id

   ```javascript
   const request_options={
          "unique_id":" "
          "callbackURL":"https://ip_address:port/callback_url"
        
      };
   beba.updateOrderStatus(request_options,function(data){
          console.log(data);
     })

   ```

  
**Cancel Shipment**

 *This is used to cancel shipment based on unique order id

   ```javascript
   const request_options={
          "unique_id":" " 
      };
   beba.cancelShipment(request_options,function(data){
          console.log(data);
     })

   ```

**Create Shipment**
 This is used to create a shipment request

```javascript

let item_detail = [
  {
    item_name: "Beef Fry",
    qty_no: 2,
    rate: 40
  },
  {
    item_name: "Ugali Matumbo",
    qty_no: 1,
    rate: 30
  },
  {
    item_name: "Italian Pizza",
    qty_no: 4,
    rate: 45
  },
];


const request_options={

    "order_id" : "5",
    "unique_id": "45684e0b-8c73-41be-a118-fc7ab1c17694",
    "trans_id" : "5",
    "service_id": "1",
    "customer_id"  : "4",
    "customer_name" : "Jane Doe",
    "customer_phone" : "254721123456",
    "customer_email" : "janedoe@gmail.com",
    "pickup_address" : "Safari Park Fly Over, Thika Road, Nairobi, Kenya",
    "pickup_country" : "KENYA",
    "pickup_latitude" : "-1.2256562",
    "pickup_longitude" : "36.88495850000004",
    "customer_city" : "Nairobi, Kenya",
    "business_id" : "1",
    "business_name" : "ABC Hotel",
    "business_phone" : "254721174236",
    "business_email" : "johndoe@gmail.com",
    "delivery_address" : "Naivas, Outer Ring Road, Nairobi, Kenya",
    "delivery_country" : "KENYA",
    "delivery_latitude" : "-1.2476927",
    "delivery_longitude" : "36.872455",
    "business_city" : "Nairobi , Kenya",
    "courier_id" : "12",
    "courier_type" : "corporate"
    "item_detail" : item_detail,
    "business_hours" : "8.00 PM- 5 PM",
    "distance"       : "7.1",
    "order_value"  : "700",
    "shipping_rate"  : "355",
    "paybill_number" : "35323",
    "tax_pin" : "123455",
    "payment_type" : "bank",
     "callbackURL": "https://ip_address:port/callback_url"

    };

    beba.createShipment(request_options,function(data){
        console.log(data);
    })
```

## Reference
   [REST API Reference] (https://developer.pikieglobal.com/docs)


## Running Examples
Examples are located in the [examples directory](/examples).


## Support

Need support using this package:-

- _api-feedback@pikieglobal.com_ 


If you wish to be added as a contributor to this project let us know.


## Security

If you discover any security related issues, please email _api-feedback@pikieglobal.com_ 




