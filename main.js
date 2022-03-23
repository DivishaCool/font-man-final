function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }



  function copy_text() {

    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  song1 = "";
  song2 = "";
  song1_status = "";
  song2_status = "";

  function preload(){
    song1.loadSound("music.mp3");
    song2.loadSound("music2.mp3");

  }

  function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
  }

  function draw(){
    image( video ,0 , 0 , 600 , 500);
  }
