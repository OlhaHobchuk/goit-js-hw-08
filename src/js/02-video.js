import Player from '@vimeo/player';
import lodash from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', lodash(savedTime, 1000));

function savedTime(data) {

    const videoPaused = data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(`${videoPaused}`));
}

const newTime = localStorage.getItem("videoplayer-current-time");


if (localStorage.getItem('videoplayer-current-time')) {
    player.setCurrentTime(JSON.parse(newTime));
}