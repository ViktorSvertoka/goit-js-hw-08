import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);

// if (localStorage.getItem('videoplayer-current-time')) {
//   const currenTime = JSON.parse(
//     localStorage.getItem('videoplayer-current-time')
//   );
//   player.setCurrentTime(currenTime);
// }
