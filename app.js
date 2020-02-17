const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed"
            }
        ]
    };

    var jsonData = JSON.stringify(data);

var options = {
    url:"https://us4.api.mailchimp.com/3.0/lists/8d98946b1b",
    method: "POST",
    headers: {
        "Authorization": "Umida1 52756291cb81001df97e223a525b44f0-us4"
    },
    body: jsonData
};

request(options, function(error, response, body){

    if (error){
        console.log(error);
        
    }else{
        console.log(response.statusCode);
        
    }

})
});

app.listen(3000);



// 52756291cb81001df97e223a525b44f0-us4

// list_id 
// 8d98946b1b