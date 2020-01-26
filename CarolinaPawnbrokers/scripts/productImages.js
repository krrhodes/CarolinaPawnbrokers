var imageURL = "";
for (var imageIndex = 1; imageIndex <= numImages; ++imageIndex) {
  imageURL = "images/carouselImage" + imageIndex + ".jpg";
  if (imageIndex === 1) {
    $("#carouselIndicators").append("<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");
    $("#carouselWrapper").append("<div class='item active'><img src='" + imageURL + "'></div>");
  } else {
    $("#carouselIndicators").append("<li data-target='#myCarousel' data-slide-to='0'></li>");
    $("#carouselWrapper").append("<div class='item'><img src='" + imageURL + "' alt='product'></div>");
  }
}
