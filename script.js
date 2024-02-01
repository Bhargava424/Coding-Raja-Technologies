// seek bar---------------------------------
var range = document.getElementById("range");
var completionBar = document.getElementById("completionBar");
var slide = document.querySelector('.slide input[type="range"]');

var audioSeek = document.getElementById("audioSrc");

range.oninput = function() {
  completionBar.style.width = this.value+'%';
  audioSeek.currentTime = ((this.value/100))*playing.duration;
}


//------------------------------------------

function play(element)
{
  
  var nowPlayingBoardId = document.getElementById("now-playing-board-id"); 
  var nowPlayingBoardBottomBarId = document.getElementById("now-playing-board-bottom-bar-id");  
  
   var vynlId = document.getElementById("vynl-id"); 
  
  var audio = document.getElementById("audioSrc");
  
  audio.loop = true;
  
  // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
audio.ontimeupdate = function() {
  completionBar.style.width = ((this.currentTime/this.duration)*100)+'%';
  if(completionBar.style.width > "99%")
  {
    range.value=0;  
  }
  else
  {
    console.log(' '+completionBar.style.width);
  }
};
  if(document.getElementById("playpause").classList.contains("play-square"))
  {  
vynlId.classList.add("vynl-animation");
    
 document.getElementById("audioSrc").play();
     nowPlayingBoardId.style.transform="translatey(-30%)";
     nowPlayingBoardBottomBarId.style.transform="translatey(0)";
    
    document.getElementById("playpause").classList.remove("play-circle");
    document.getElementById("playpause").classList.add("pause-square");
  }
   else if(document.getElementById("playpause").classList.contains("pause-square"))
  {    
   vynlId.classList.remove("vynl-animation");
   
  document.getElementById("audioSrc").pause(); 
    nowPlayingBoardId.style.transform="translatey(56%)";
    nowPlayingBoardBottomBarId.style.transform="translatey(-20%)";
    
    document.getElementById("playpause").classList.remove("pause-square");
    document.getElementById("playpause").classList.add("play-circle");
  }
}

//fullscreen code 
let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit rayalscreen";
    }
    else {
        fullscreen = false;
        document.exitrayalscreen();
        fsEnter.innerHTML = "Go rayalscreen";
    }
});
