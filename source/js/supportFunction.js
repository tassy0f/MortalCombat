import { player1, player2 } from "./objects.js";
import {$root, $fightForm} from "./main.js";
import { generateLogs } from "./logs.js";

const $randomButton = document.querySelector('.button');

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function randomInt(int) {
    return Math.ceil(Math.random() * int);
}

function createReloadButton() {
    const $reloadButtonDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');
    $reloadButton.innerText = 'Restart';
    $root.appendChild($reloadButtonDiv);
    $reloadButtonDiv.appendChild($reloadButton);
    $reloadButton.addEventListener('click', function() {
        window.location.reload();
    })
}

function showResult() {
    if (player1.hp === 0 || player2.hp === 0){
        $randomButton.disabled = true;
        createReloadButton();
    }
    
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $root.appendChild(playerWin(player2.name));
        generateLogs('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $root.appendChild(playerWin(player1.name));
        generateLogs('end', player1, player2);
    } else if (player2.hp === 0 && player1.hp === 0) {
        $root.appendChild(playerWin());
        generateLogs('draw');
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!!!';
    } else {
        $winTitle.innerText = 'draw!!!';
    }
    return $winTitle;
}

export {randomInt,createElement,showResult}