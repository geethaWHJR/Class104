Webcam.attach('#camera');
camera = document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
image_format:'png',
png_quality:90
});



console.log("working");
function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    
});
}

console.log("ml5version",ml5.version);

complifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/W-_Kmdxhw/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}