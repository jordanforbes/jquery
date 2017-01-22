/*$(document).ready(
  function(){
    alert("yo")
  }
);*/
/*
var darkAngelSrc = [
	"assets/audio/Dark Angel - Time Does Not Heal/01.Time Does Not Heal.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/02.Pain's Invention Madness.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/03.Act of Contrition.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/04.The New Priesthood.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/05.Psychosexuality.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/06.An Ancient Inherited Shame.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/07.Trauma and Catharsis.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/08.Sensory Deprivation.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/09.A Subtle Induction.mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/10.The Promise of Agony [live].mp3",
	"assets/audio/Dark Angel - Time Does Not Heal/11.I Don't Care About You [live].mp3"
]*/

function song(title,artist,album,track,src){
  this.title = title;
  this.artist = artist;
  this.album = album;
  this.track = track;
  this.src = src;
};

var timeDoesNotHeal = new song(
  "Time Does Not Heal",
  "Dark Angel",
  "Time Does Not Heal",
  1,
  "assets/audio/timedoesnotheal.mp3"
);

var painsInventionMadness = new song(
  "Pain's Invention Madness",
  "Dark Angel",
  "Time Does Not Heal",
  2,
  "assets/audio/painsinventionmadness.mp3"
)

var darkAngel = [timeDoesNotHeal, painsInventionMadness];


function trackChange(num, adder, subtractor){
    this.num = num;
    this.adder = adder
    this.subtractor = subtractor};

var player = new trackChange(0,
  function(){this.num += 1},
  function(){this.num -= 1});

$("#next").click().ready(player.adder());

//$("#previous").click(player.subtractor());

$(document).ready(function jukebox(){
  var audioElement = document.createElement('audio');

  audioElement.setAttribute('src', darkAngel[player.num].src);






  audioElement.addEventListener('ended',function(){
    this.play();
    }, false
  );

  audioElement.addEventListener("canplay",function(){
    //$("#length").text("Duration:" + audioElement.duration + " seconds");
    $("#source").text("Source: " + darkAngel[player.num].src);
    $("#song").text("Song: " + darkAngel[player.num].title);
    $("#artist").text("Artist: " + darkAngel[player.num].artist);
    $("#album").text("Album: " + darkAngel[player.num].album);
    $("#track").text("Track: " + darkAngel[player.num].track);
    $("#status").text("Status: Ready to play").css("color","green");

  });

  audioElement.addEventListener("timeupdate", function(){
    $("#currentTime").text("Time: " + audioElement.currentTime
      +" / "+ audioElement.duration + " seconds");
  });



  $("#play").click(function(){
    audioElement.play();
    $("#status").text("Status: Playing");
  });

  $('#pause').click(function(){
    audioElement.pause();
    $('#status').text("Status: Paused");
  });

  $("#restart").click(function(){
    audioElement.currentTime = 0;
  });


});
