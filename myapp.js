
//Set cookies.
function WriteCookie(){
    if( document.myform.customer.value ==""){
        alert ("Enter some value!");
        return;
    }
    cookievalue= escape(document.myform.customer.value) + ";";
    document.cookie="name=" + cookievalue;
    document.write("Setting Cookies: " + "name=" + cookievalue);
}
function ReadCookie(){
    var allcookies = document.cookie;
    document.write("All cookies: " + allcookies);

     //Get all the cookies pairs in an array.
     cookiearray = allcookies.split(';');

     //Now take key value pair out of this array.
     for (var i=0; i<cookiearray.length; i++){
         name = cookiearray[i].split('=')[0];
         value = cookiearray[i].split('=')[1];
         document.write("Key is: " + name + " and Value is: " + value);
     }
}
function WriteCookie(){
    var now = new Date();
    now.setMonth( now.getMonth() + 1 );
    cookievalue = escape(document.myform.customer.value) + ";"
    document.cookie="name=" + cookievalue;
    document.cookie = "expires=" + now.toUTCString() + ";"
    document.write("Setting cookies: " + "name?=" + cookievalue);
}

//Page refresh. ------------------
function AutoRefresh( t ){
    setTimeout("location.reload(true);", t);
}

//Page re-direction. -------------
function Redirect(){
    window.location="http://www.google.com";
}

//Alert box. ----------------------
function Warn(){
    alert("This is a warning message!");
    document.write("This is a warning message.");
}

//Confirmation box with 2 options. --------------
function getConfirmation(){
    var retVal = confirm("Do you want to continue?"); //This message will be displayed in the box.
    if(retVal == true){
        document.write("User wants to continue.");
        return true;
    }
    else{
        Document.write("User doesn't want to continue.");
        return false;
    }
}


//Prompt dialog box. --------------------
function getValue(){
    /*Prompt-method takes 2 parameters:
     i: a label which you want to display in the text box,
     ii: a default string to display in the text box.
    */
    var retVal = prompt("Your name: ", "Please enter your name here"); 
    document.write("You have entered: " + retVal);
}

//Use of Void to purposely generate the underdefined value.-------
function getValueA(){
    var a,b,b;
    a = void (b=5, c=7);
    document.write("a= " + a + " b= " + b + " c= " + c );
}
/*
//Create an Object.-------------
var book = new Object();    //Create the object.
book.subject = "Perl";      //Assign properties to the object.
book.author = "Na";
document.write("Book name is: " + book.subject + "<br>");
document.write("Book author is: " + book.author + "<br>");


//User-defined objects.-----------
function book(title, author){
    this.title = title;
    this.author = author;
    var myBook = new book("Perl", "Naa");
    document.write("Book title is: " + myBook.title + "<br>");
    document.write("Book author is: " + myBook.author + "<br");
}
*/

//Defining methods for an object.--------
function addPrice(amount){  //Define a function which will work as a method.
    with(this){
        price = amount;
    }
}
function book(title,author){
    this.title = title;
    this.author = author;
    this.price = 0;
    this.addPrice = addPrice;   //Assign that method as a property.
}
var myBook = new book("Perl", "Na");
myBook.addPrice(1010);
document.write("Book title: " + myBook.title + "<br>");
document.write("Book author: " + myBook.author + "<br>");
document.write("Book price: " + myBook.price + "<br>");

