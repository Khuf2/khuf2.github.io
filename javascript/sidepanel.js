const galleryImage = document.getElementsByClassName("galleryImg");

function toggleNav() {
    if(document.getElementById("mySidepanel").style.width < "310px") {
        // Open sidebar
        document.getElementById("mySidepanel").style.width = "310px";
        document.getElementById("sidebar").style.filter = "blur(0px)";
        for(i = 0; i < galleryImage.length; i++) {
            galleryImage[i].style.width = "130px";
            galleryImage[i].style.height = "130px";
            galleryImage[i].style.padding = "5px"
        }
    } else {
        // Close sidebar
        document.getElementById("mySidepanel").style.width = "0";
        document.getElementById("sidebar").style.filter = "blur(5px)";
        for(i = 0; i < galleryImage.length; i++) {
            galleryImage[i].style.width = "200px";
            galleryImage[i].style.height = "200px";
            galleryImage[i].style.padding = "15px"
        }
    } 
}