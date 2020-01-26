//Change these values to edit what appears on the website
var about = "Clinton's newest pawn shop and FFL dealer! We offer cash loans on gold," +
  "jewelry, gas engines, electronics, and much more. We provide a quick," +
  "clean, and confidential loan experience. Feel free to drop by and" +
  "browse our selection of new and used inventory.";

var address = " 175 Faison Hwy, Clinton, NC";
var mapsLink = "https://goo.gl/maps/YQ2cb8u1XthrVQKc7";

var phone = " (910) 592-2001";

var hoursM = "9:00 AM - 6:00 PM";
var hoursTU = "9:00 AM - 6:00 PM";
var hoursW = "9:00 AM - 6:00 PM";
var hoursTH = "9:00 AM - 6:00 PM";
var hoursF = "9:00 AM - 6:00 PM";
var hoursSA = "9:00 AM - 6:00 PM";
var hoursSU = "Closed";

//This is the number of images that you want to appear in the image carousel
//To add images to the carousel place them in the images folder and name them
//carouselImage with the image number after it (e.g. carouselImage4.jpg)
var numImages = 7;

//This sets these values in their corresponding html elements
$("#about").append(about);
$("#address").append(address);
$("#address").attr("href", mapsLink);
$("#phone").append(phone);
$("#hoursM").append(hoursM);
$("#hoursTU").append(hoursTU);
$("#hoursW").append(hoursW);
$("#hoursTH").append(hoursTH);
$("#hoursF").append(hoursF);
$("#hoursSA").append(hoursSA);
$("#hoursSU").append(hoursSU);
