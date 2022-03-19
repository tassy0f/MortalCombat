import { generateLogs } from "./logs.js";
import { Player, playerAttack, enemyAttack } from "./objects.js";
import { randomInt, showResult } from "./supportFunction.js";

const $root = document.querySelector('.arenas');

const $fightForm = document.querySelector('.control');
const $chatLog = document.querySelector('.chat');

class Game {
    getPlayers = async() => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }

    start = () =>{

        const players = await this.getPlayers();

        const p1 = players[randomInt(players.length)];
        let player1 = new Player({
            ...p1,
            playerNumber:1,
            rootSelector: 'arenas',
        })

        const p2 = players[randomInt(players.length)];
        let player2 = new Player({
            ...p2,
            playerNumber:2,
            rootSelector: 'arenas',
        });


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