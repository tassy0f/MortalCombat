import { generateLogs } from "./logs.js";
import { player1, player2, playerAttack, enemyAttack } from "./objects.js";
import { createElement, showResult } from "./supportFunction.js";

const $root = document.querySelector('.arenas');

const $fightForm = document.querySelector('.control');
const $chatLog = document.querySelector('.chat');



function createPlayer(obj){
    const $player = createElement('div', 'player' + obj.playerNumber);                        
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    $life.style.width = obj.hp + '%';
    const $name = createElement('div', 'name');
    $name.innerText = obj.name;
    const $character = createElement('div', 'character');
    const $img = createElement('img');
    $img.src = obj.img;
    $player.appendChild($progressbar);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $player.appendChild($character);
    $character.appendChild($img);

    return $player;
}

$fightForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const enemy = enemyAttack();
    const player = playerAttack();

    let damagePlayer1 = 0;
    let damagePlayer2 = 0;

    if (enemy.hit === player.defence) {
        generateLogs('defence', player2, player1, damagePlayer1);
    } else {
        damagePlayer1 = enemy.value;
        player1.changeHP(damagePlayer1);
        player1.renderHp();

        generateLogs('hit', player2, player1, damagePlayer1);
    }

    if (player.hit === enemy.defence) {
        generateLogs('defence', player1, player2, damagePlayer2);
    } else {
        damagePlayer2 = player.value;
        player2.changeHP(damagePlayer2);
        player2.renderHp();

        generateLogs('hit', player1, player2, damagePlayer2);
    }
    showResult();
})

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));
generateLogs('start', player2, player1);

export {$root, $fightForm, $chatLog}