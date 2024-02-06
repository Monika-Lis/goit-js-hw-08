import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

const saveTime = data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', saveTime);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
