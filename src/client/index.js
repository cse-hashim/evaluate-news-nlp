import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { onBlur } from './js/onBlur'
import "./styles/base.scss";
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import logoImage from './img/logo.svg';
document.getElementById('logo').src = logoImage
document.getElementById('favicon').href = logoImage
// const snowfall=()=>{
const snowdrops_count = 100;
if (typeof total !== 'undefined') {
    snowdrops_count = total;
}
const spawn_snow = (snow_density = 200) => {
    snow_density -= 1;

    for (let x = 0; x < snow_density; x++) {
        let board = document.createElement('div');
        board.className = "snowdrops";

        document.getElementById('snow').appendChild(board);
    }
}

const add_css = (rule) => {
    let css = document.createElement('style');
    css.appendChild(document.createTextNode(rule));
    document.getElementsByTagName("head")[0].appendChild(css);
}

const random_int = (value = 100) => Math.floor(Math.random() * value) + 1

const random_range = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)


const spawnSnowCSS = (snow_density = 200) => {
    const snowdrops_name = "snowdrops";
    let rule = ``;
    if (typeof base_css !== 'undefined') {
        rule = base_css;
    }

    for (let i = 1; i < snow_density; i++) {
        let rx = Math.random() * 100; // vw
        let ro = random_range(-100000, 100000) * 0.0001; // vw;
        let rx_end = rx + ro;
        let rx_end_vibrate = rx + (ro / 2);
        let rv_time = random_range(30000, 80000) / 100000;
        let rv_y = rv_time * 100; // vh
        let rs = Math.random();
        let fall_duration = random_range(10, 30) * 1; // s
        let fall_delay = random_int(30) * -1; // s
        let opacity_ = Math.random();

        rule += `
            .${snowdrops_name}:nth-child(${i}) {
                opacity: ${opacity_};
                transform: translate(${rx}vw, -10px) scale(${rs});
                animation: fall-${i} ${fall_duration}s ${fall_delay}s linear infinite;
            }
    
            @keyframes fall-${i} {
                ${rv_time * 100}% {
                    transform: translate(${rx_end}vw, ${rv_y}vh) scale(${rs});
                }
    
                to {
                    transform: translate(${rx_end_vibrate}vw, 100vh) scale(${rs});
                }
                
            }
            `
    }

    add_css(rule);
}

window.onload = function () {
    spawnSnowCSS(snowdrops_count);
    spawn_snow(snowdrops_count);
};

// }

export {
    checkForName,
    handleSubmit,
    onBlur,
}


