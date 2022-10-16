import observer from './patterns/observer.js';
import prototype from './patterns/prototype.js';
import proxy from './patterns/proxy.js';
import singleton from './patterns/singleton.js';
import module from './patterns/module.js';
import mixin from './patterns/mixin.js';
import middleware from './patterns/middelware.js';
import flyweight from './patterns/flyweight.js';
import factory from './patterns/factory.js';
import command from './patterns/command.js';

const arrayOfPatterns = [
    singleton,
    proxy,
    prototype,
    observer,
    module,
    mixin,
    middleware,
    flyweight,
    factory,
    command,
];

const buttons = document.querySelector('#buttons');
const script = document.querySelector('#script');
let isActive = -1;
let tooltips = [];

const handleTooltipAbilitation = () => {
    document.querySelectorAll('button').forEach(button =>{
        const buttonTp = tooltips.find(tp => tp._element === button);
        if(!((button.offsetWidth < button.scrollWidth))){
            buttonTp.disable();
        } else {
            buttonTp.enable();
        }
    })
}

const renderScript = (pattern) => {
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.classList.add('language-javascript');
    const body = pattern.toString().slice(pattern.toString().indexOf("{") + 1, pattern.toString().lastIndexOf("}"));
    code.innerHTML = body;
    pre.appendChild(code);
    script.innerHTML = '';
    script.appendChild(pre);
    Prism.highlightElement(code);
}

const classCheck = (index) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button, i) => {
        button.classList.remove('btn-secondary');
        button.classList.remove('btn-light');
        if (i === index){
            button.classList.add('btn-secondary');
        } else {
            button.classList.add('btn-light');
        }
    })
}

const hashChange = () => {
    let i;
    const pattern = arrayOfPatterns.find((pattern, index) => {
        if (pattern.name === window.location.hash.replace('#','')){
            i = index;
            return true;
        }
        return false;
    });
    if(pattern) {
        clickEvent(pattern, i)
    };
}

const clickEvent = (pattern, i) => {
    console.clear();
    console.log('%c'+pattern.name.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); }).toUpperCase(), "color:darkorange; background:darkblue; font-size: 20pt; padding: 5px 16px");
    window.location.hash = pattern.name;
    try{
        pattern();
    } finally{
        renderScript(pattern);
        isActive = i;
        classCheck(i);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    arrayOfPatterns.forEach((pattern, i) => {
        const button = document.createElement('button');
        button.innerHTML = new RegExp(/([a-z][A-Z])/g).test(pattern.name) ? pattern.name.replace(/([A-Z])/g, ' $1') : pattern.name;
        button.classList.add('btn');
        button.classList.add('btn-light');
        button.addEventListener('click', () => clickEvent(pattern, i));
        button.title = button.innerHTML.toUpperCase();
        tooltips.push(
            new bootstrap.Tooltip(button, {
                title: button.innerHTML.toUpperCase(),
                customClass: 'buttonTooltip',
                delay: { "show": 50, "hide": 0 },
                trigger: 'hover'
            })
        );
        button.setAttribute('data-bs-toggle', 'tooltip');
        buttons.appendChild(button);
        handleTooltipAbilitation();
    });

    hashChange();
    window.addEventListener('hashchange', () => hashChange());
    window.addEventListener('resize', () => handleTooltipAbilitation());
});