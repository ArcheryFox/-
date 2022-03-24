var tag = document.createElement('script'),
  b = document.getElementById('play'),
  i = 1;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var mplayer;

function onYouTubeIframeAPIReady() {
  mplayer = new YT.Player('mplayer', {
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
play();
b.innerHTML = 'pause';
} else {
pause();
b.innerHTML = 'play';
}
});

function play() {
  mplayer.playVideo();

  console.log('play');
}

function pl60() {

  mplayer.seekTo(60, true);
  console.log('play');
}

function pause() {
  mplayer.pauseVideo();
  console.log('pause');
}

function stop() {
  mplayer.stopVideo();
  console.log('0');
  console.log('stop');
}
