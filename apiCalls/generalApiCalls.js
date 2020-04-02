var sdkClient = require('../api_SDK/astro-api-nodejs-client-master/sdk/sdk');
var getHoroscopedata = function (sign) {
    var zodiacChosen = sign;

    var data = {
        'date': 0,
        'month': 0,
        'year': 1990,
        'hour': 12,
        'minute': 25,
        'latitude': 39,
        'longitude': -104,
        'timezone': 5.5
    };

    switch (zodiacChosen) {
        case "Taurus":
            {
                data.date = 23;
                data.month = 7;
                break;
            }
        case "Aries":
            {
                data.date = 10;
                data.month = 7;
                break;
            }

        case "Gemini":
            {
                data.date = 10;
                data.month = 8;
                break;
            }
        case "Cancer":
            {
                data.date = 10;
                data.month = 9;
                break;
            }
        case "Leo":
            {
                data.date = 10;
                data.month = 10;
                break;
            }
        case "Virgo":
            {
                data.date = 10;
                data.month = 12;
                break;
            }
        case "Libra":
            {
                data.date = 10;
                data.month = 1
                break;
            }
        case "Scorpio":
            {
                data.date = 30;
                data.month = 1;
                break;
            }
        case "Sagittarius":
            {
                data.date = 10;
                data.month = 3;
                break;
            }
        case "Capricorn":
            {
                data.date = 10;
                data.month = 5;
                break;
            }
        case "Aquarius":
            {
                data.date = 30;
                data.month = 5;
                break;
            }
        case "Pisces":
            {
                data.date = 10;
                data.month = 6;
                break;
            }
    }
    console.log(data.date);
    console.log(data.month);

    var resource = "general_ascendant_report/tropical";

    sdkClient.call(resource, data.date, data.month, data.year, data.hour, data.minute, data.latitude, data.longitude, data.timezone, function (error, result) {

        console.log(data.date);
        console.log(data.month);
        console.log(resource);

        if (error) {
            console.log("Error returned!!");
        }
        else {
            console.log('Response has arrived from API server --');
            console.log(result);
        }
    });

}
module.exports = getHoroscopedata;