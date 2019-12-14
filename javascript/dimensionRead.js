var url = "./galleryImages/bluegrass.jpg";
var img = new Image();

img.onload = function(){
    var height = img.height;
    var width = img.width;

    // make a background box for the image, or even better a container of the correct dimensions.
}

img.src = url;

document.getElementById('image').innerHTML = img;

// eventually, there will be functions here to take image objects in a list of all posts
// and do the following:
// * Sort the objects being displayed by publishing date
// * Filter the content being shown by tags in each picture

// in addition, image objects should have the following fields:
// * title
// * description
// * media type tags
// * publishing date
// * favorite tag