console.log("Script loaded");

function addPopup() {
var img = new Image();
img.src = 'http://via.placeholder.com/350x150';
img.id = 'popup';
img.onclick = function() {
    window.location.href = 'http://www.google.com';

};
  
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "X";
button.id = "delPopup";



// 3. Add event handler
button.onclick = function() {
 document.getElementById("popup").style.display = "none";
 document.getElementById("delPopup").style.display = "none";
console.log("button was clicked");
};

document.body.appendChild(img);
document.body.appendChild(button);


var d = new Date();
    //to change the exp date change the number from to to what is desired
    d.setTime(d.getTime() + (2*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();

document.cookie = "vistedPage=Yes;" + expires;




};


var returnVisitor = false;

function ReadCookie()
{
   var allcookies = document.cookie;

   // Get all the cookies pairs in an array
   cookiearray  = allcookies.split(';');
   // Now take key value pair out of this array

   for(var i=0; i<cookiearray.length; i++){
    //log the current cookie value
       
       var currentCookie = cookiearray[i];

       //when creating this script wordpress would sometimes change the number of spaces added

      if(currentCookie === "vistedPage=Yes" || currentCookie === " vistedPage=Yes" || currentCookie === "  vistedPage=Yes") {
      
      returnVisitor = true;
      }
      
      var name = cookiearray[i].split('=')[0];
      var value = cookiearray[i].split('=')[1];
      
  
}

if(returnVisitor === true) {


}

if (returnVisitor === false) {
//add a 3 second delay using setTimeout 
var triggerPopup = window.setTimeout(addPopup, 3000);

  }

   }

   ReadCookie();