import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEYNAME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((ev) => {
    localStorage.setItem(KEYNAME, ev.seconds);
    }, 1000));

const currentTime = localStorage.getItem(KEYNAME);

if (currentTime) {
    player.setCurrentTime(currentTime)
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            console.log("RANGE ERROR");
            break;
        default:
            console.log("Some other error occurred");
            break;
    }
});
}
