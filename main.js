const $root = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    playerNumber : 1,

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    }
};

const player2 = {
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    playerNumber : 2,

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    }
};

function createElement (tag, className) {
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}

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

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.playerNumber +' .life');
    const $randomDamage = Math.ceil(Math.random() * 20);

    
    if (player.hp <= 0) {
        player.hp = 0;
        $playerLife.style.width = player.hp + '%';
        $randomButton.disabled = true
        $root.appendChild(playerWin(player.name))  // не смог понять как создать правильно надпись победителя
    } else {
        console.log(player.hp -= $randomDamage);
        $playerLife.style.width = player.hp +'%';
        
    }
}

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' dont Wins!!!';

    return $winTitle;
}

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));