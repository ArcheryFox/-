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
  cg('Плеер: '+i)
i++;
// cl(`Счётчик: ${i}`);
if(i%2 == 0){
play();
b.innerHTML = 'pause';
} else {
pause();
b.innerHTML = 'play';
console.groupEnd()
}
});

function play() {
  mplayer.playVideo();
  cl('play');
  console.groupEnd()
}

function pl60() {
  mplayer.seekTo(60, true);
  cl('play');
}

function pause() {
 
  mplayer.pauseVideo();
  cl('pause');
  console.groupEnd()
}

function stop() {
  cgc(`Плеер стоп`)
  mplayer.stopVideo();
  cl(i=1);
  cl('stop');
  cge()
}
cge()