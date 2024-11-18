function upDate(previewPic){
    big_pic = document.getElementById("image");
    big_pic.innerHTML = previewPic.alt;
    big_pic.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo(){
    big_pic = document.getElementById("image");
    big_pic.innerHTML = "Hover over an image below to display here.";
    big_pic.style.backgroundImage = "url('')";
}
