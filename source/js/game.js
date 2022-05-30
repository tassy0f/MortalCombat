import { generateLogs } from "./logs.js";
import { Player, playerAttack,enemyAttack } from "./objects.js";
import { randomInt, createElement } from "./supportFunction.js";

const $root = document.querySelector('.arenas');

const $fightForm = document.querySelector('.control');
const $chatLog = document.querySelector('.chat');
const $randomButton = document.querySelector('.button');

class Game {
    getPlayers = async() => {
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }

    start = async() =>{

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


        $fightForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const enemy = enemyAttack();
            const player = playerAttack();
        
            let damagePlayer1 = 0;
            let damagePlayer2 = 0;
        
            //console.log(enemy);
            if (enemy.hit === player.defence) {
                generateLogs('defence', player2, player1, damagePlayer1);
            } else {
                damagePlayer1 = enemy.value;
                player1.changeHP(damagePlayer1);
                player1.renderHp();
        
                generateLogs('hit', player2, player1, damagePlayer1);
            }
        
            //console.log(player);
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