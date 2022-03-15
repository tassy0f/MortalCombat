import { generateLogs } from "./logs.js";
import { player1, player2, playerAttack, enemyAttack } from "./objects.js";
import { showResult } from "./supportFunction.js";

const $root = document.querySelector('.arenas');

const $fightForm = document.querySelector('.control');
const $chatLog = document.querySelector('.chat');

class Game {
    constructor(props){

    }

    start = () =>{
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
        
        generateLogs('start', player2, player1);

        player1.createPlayer();
        player2.createPlayer();
    }
}

export {Game, $root, $fightForm, $chatLog}