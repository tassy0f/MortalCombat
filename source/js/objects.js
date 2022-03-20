import {randomInt, createElement} from "./supportFunction.js";
import {$fightForm} from "./game.js";

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];

class Player {
    constructor(props){
        this.playerNumber = props.playerNumber;
        this.name = props.name;
        this.hp = props.hp;
        this.img = props.img;
        this.selector = `player${this.playerNumber}`;
        this.rootSelector = props.rootSelector;
    }

    changeHP = (damage) => {
        this.elHp;
        this.hp -= damage;
        if (this.hp <= 0) {
            this.hp = 0;
        }
        this.renderHp;  
    }
    
    elHp = () => {
        return document.querySelector(`.${this.selector} .life`);
    }
    
    renderHp = () => {
        return this.elHp().style.width = this.hp + '%';
    }

    createPlayer = () => {
        const $player = createElement('div', this.selector); 

        const $progressbar = createElement('div', 'progressbar');
        $player.appendChild($progressbar);
        
        const $life = createElement('div', 'life');
        $life.style.width = this.hp + '%';
        $progressbar.appendChild($life);

        const $name = createElement('div', 'name');
        $name.innerText = this.name;
        $progressbar.appendChild($name);

        const $character = createElement('div', 'character');
        $player.appendChild($character);

        const $img = createElement('img');
        $img.src = this.img;
        $character.appendChild($img);
    
        const $arenas = document.querySelector(`.${this.rootSelector}`);
        $arenas.appendChild($player);
    }
}

function enemyAttack() {
    const hit = ATTACK[randomInt(3) - 1];
    const defence = ATTACK[randomInt(3) - 1];
    
    return {
        value: randomInt(HIT[hit]),
        hit,
        defence,
    }
}

function playerAttack() {
    const attack = {};

    for (const item of $fightForm) {
        if (item.checked && item.name === 'hit') {
            attack.value = randomInt(HIT[item.value]);
            attack.hit = item.value;
        }
        if (item.checked && item.name === 'defence') {
            attack.defence = item.value;
        }

        item.checked = false;
    }

    const result = fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
        method: 'POST',
        body: JSON.stringify({
            hit: attack.hit,
            defence: attack.defence,
        })
    }).then(data => data.json());
    //console.log(result);

    return attack;
}

export {Player,playerAttack,enemyAttack}