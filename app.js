const request = require('request');
const cheerio = require('cheerio');
const mongoose = require('fs');

const URL = "https://apps.shopify.com/judgeme/reviews?rating=5";

var rating =[];
function getRating(){

}
getRating()
var showRating = getRating();

console.log(showRating)
var five = require("johnny-five"),
  board, lcd;

board = new five.Board();

board.on("ready", function() {

    request
request(URL, function (err, res, body) {
    if(err)
    {
        console.log(err);
    }
    else
    {   
    

        let $ = cheerio.load(body);  //loading of complete HTML body
    
        $('div.reviews-summary__review-count').each(function(index){
            const link = $(this).find('a').html();
            var review = link.substring(1, link.length -1)
            
           rating.push(review)
           
             
        });

        return rating = rating
    }
});

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  // Tell the LCD you will use these characters:
  lcd.useChar("check");
  lcd.useChar("heart");
  lcd.useChar("duck");

  // Line 1: Hi rmurphey & hgstrp!
  lcd.clear().print("Welcome to");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  // lcd.print("I").write(7).print(" johnny-five");
  // can now be written as:
  lcd.print("Judge.me reviews");

  this.wait(3000, function() {
    lcd.clear().cursor(0, 1).print("---=="+rating[0]+"==---");
    lcd.cursor(1, 1);
    lcd.print("***** REVIEWS");
    lcd.noCursor()

   

  

  });



  this.repl.inject({
    lcd: lcd
  });
});
