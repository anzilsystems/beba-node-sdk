var beba = require('beba-node-sdk');


/**
 * Generate token. The keys used to generate are in the .env file in the root folder.
 */
beba.generateBebaToken(config, function (data) {
    console.log(data);
});