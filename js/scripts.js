const mario = document.querySelector ('.mario');
const pipe = document.querySelector ('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 600);
}

const loop = setInterval( () => {

    const marioPosition = +window.getComputedStyle (mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;
    
    if (pipePosition <= 100 && pipePosition > 0 &&  marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '70px'
        mario.style.marginLeft = '40px'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
