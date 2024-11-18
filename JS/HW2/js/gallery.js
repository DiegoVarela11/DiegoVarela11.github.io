function upDate(previewPic){
    big_pic = document.getElementById("image");
    big_pic.innerHTML = previewPic.alt;
    big_pic.style.backgroundImage = `url(${previewPic.src})`;
    big_pic.style.width = `${previewPic.naturalWidth * 2}px`;
    big_pic.style.height = `${previewPic.naturalHeight * 2}px`;
    big_pic.style.lineHeight = big_pic.style.height;
}

function unDo(){
    big_pic = document.getElementById("image");
    big_pic.innerHTML = "Hover over an image below to display here.";
    big_pic.style.backgroundImage = "url('')";
    big_pic.style.width = "575px";
    big_pic.style.height = "650px";
    big_pic.style.lineHeight = big_pic.style.height;
}

function set_listeners(){
    images = document.getElementsByClassName("preview")
    for (i = 0; i < images.length; i++){
        console.log(images[i])
        images[i].setAttribute("tabindex", "0")
    }
}
