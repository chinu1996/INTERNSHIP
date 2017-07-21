
//      console.log( Api.getResponsePayload().context)
//      console.log( Api.getResponsePayload().context.Date)
//      console.log( Api.getResponsePayload().context.FormattedDate)
//      console.log( Api.getResponsePayload().context.FormattedTime)
//      console.log( Api.getResponsePayload().context.FromCity)
//      console.log( Api.getResponsePayload().context.ToCity)
//      console.log( Api.getResponsePayload().context.passengers)
    
      
      
      
         var API = require('qpx-express');
 
var apiKey = 'AIzaSyB1R7wTVpcqyhPrAtX6jFn7lD4QOzzwgBg';
var qpx = new API(apiKey);
 
var body = {
  "request": {
    "slice": [
      {
        "origin": "IND",
        "destination": "AUS",
        "date": "2017-10-10"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 1,
    "refundable": false
  }
};
 
qpx.getInfo(body, function(error, data){
    console.log('Heyy!', data);
});

//
//{
//  "request": {
//    "slice": [
//      {
//        "origin": "ZZZ",
//        "destination": "ZZZ",
//        "date": "YYYY-MM-DD"
//      }
//    ],
//    "passengers": {
//      "adultCount": 1,
//      "infantInLapCount": 0,
//      "infantInSeatCount": 0,
//      "childCount": 0,
//      "seniorCount": 0
//    },
//    "solutions": 20,
//    "refundable": false
//  }
////
      
//      var lastResponse = {
//  "request": {
//    "passengers": {
//      "adultCount":  Api.getResponsePayload().context.passengers
//    },
//    "slice": [
//      {
//        "origin": Api.getResponsePayload().context.FromCity,
//        "destination": Api.getResponsePayload().context.ToCity,
//        "date": Api.getResponsePayload().context.Date
//       
//      }
//    ],
//    "solutions": 10
//  }
//}

//    console.log( lastResponse)   

      
//      
//      var xhttp = new XMLHttpRequest();
//    xhttp.open("POST", "https://www.googleapis.com/qpxExpress/v1/trips/search?key= AIzaSyB1R7wTVpcqyhPrAtX6jFn7lD4QOzzwgBg", false);
//    xhttp.setRequestHeader("Content-type", "application/json");
//    xhttp.send(lastResponse);
//    var response = JSON.parse(xhttp.responseText);
//      console.log(response)
//      
      
//     $.ajax({
//         method: "POST", 
//            url: "https://www.googleapis.com/qpxExpress/v1/trips/search?key= AIzaSyB1R7wTVpcqyhPrAtX6jFn7lD4QOzzwgBg", 
//            type: "application/json",      
//            data: lastResponse,     
//   
//            success: function(returnhtml){                          
//             console.log(returnhtml)                 
//            }           
//        }); 
    
 
      