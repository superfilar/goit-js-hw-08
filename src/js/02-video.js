import Player from '/node_modules/@vimeo/player';
import throttle from '/node_modules/lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate',  throttle( (e) => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000)
);
const videoStopLocalStorage = localStorage.getItem('videoplayer-current-time');

if(videoStopLocalStorage === undefined || videoStopLocalStorage === null){
    localStorage.setItem('videoplayer-current-time', 0);
} else {
    player.setCurrentTime(videoStopLocalStorage);
};
