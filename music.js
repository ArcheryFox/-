document.body.innerHTML+= "<button>  play</button><button onclick='pl60()'>  play 60</button><!-- <button onclick='pause()'>pause</button> --><button onclick='stop()'>stop</button><div id='player'></div>"
var tag = document.createElement('script'),
  b = document.getElementsByTagName('button')[0],
  i = 1;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '220',
    width: '420',
    videoId: 'PJielywHIjY',
  });
}

function onPlayerStateChange() {
  //  	ОБЯЗАТЕЛЬНАЯ ФУНКЦИЯ !!!
}

b.addEventListener('click', function() {
i++;
console.log(i);
if(i%2 == 0){
play()
} else {
pause()
}
});

function play() {
  player.playVideo();

  console.log('play');
}

function pl60() {

  player.seekTo(60, true);
  console.log('play');
}

function pause() {
  player.pauseVideo();
  console.log('pause');
}

function stop() {
  player.stopVideo();
  console.log('0');
  console.log('stop');
}
