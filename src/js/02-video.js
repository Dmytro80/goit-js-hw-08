import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeupdateOfStorage, 1000));

const stopTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(stopTime);

function onTimeupdateOfStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}
