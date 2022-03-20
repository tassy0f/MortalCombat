import {randomInt} from "./supportFunction.js";
import {$fightForm} from "./main.js";

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    playerNumber : 1,
    changeHP,
    elHp,
    renderHp
};

const player2 = {
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    playerNumber : 2,
    changeHP,
    elHp,
    renderHp
};

function enemyAttack() {
    const hit = ATTACK[randomInt(3) - 1];
    const defence = ATTACK[randomInt(3) - 1];
    
    return {
        value: randomInt(HIT[hit]),
        hit,
        defence,
    }
}

function changeHP(damage) {
    this.elHp;
    this.hp -= damage;
    if (this.hp <= 0) {
        this.hp = 0;
    }
    this.renderHp;  
}

function elHp () {
    return document.querySelector('.player' + this.playerNumber +' .life');
}

function renderHp () {
    return this.elHp().style.width = this.hp + '%';
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
    return attack;
}

export {player1,player2,enemyAttack,playerAttack}