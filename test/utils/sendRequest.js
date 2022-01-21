const axios = require("axios");
const logger = require("../config/logger.config");

async function sendRequest(config) {
    try {
        const response = await axios({
            method: config.method,
            url: config.url
        })
        return response;
    } catch(Error) {
        logger.error(Error);
    }
    
   
}

module.exports = sendRequest;