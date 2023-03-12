import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle((ev) => {
    localStorage.setItem("videoplayer-current-time", ev.seconds);
    }, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time");

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

// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
