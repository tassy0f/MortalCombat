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
    },
    changeHP: changeHP,
    elHp: elHp,
    renderHp: renderHp
};

const player2 = {
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    playerNumber : 2,

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    },
    changeHP: changeHP,
    elHp: elHp,
    renderHp: renderHp
};

function changeHP(damage) {
    this.elHp;
    this.hp -= damage;
    if (this.hp <= 0) {
        this.hp = 0;
    }
    this.renderHp;  
}

function elHp () {
    const $playerLife = document.querySelector('.player' + this.playerNumber +' .life');
    return $playerLife;
}

function renderHp () {
    return this.elHp().style.width = this.hp + '%';
}

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

$randomButton.addEventListener('click', function() {
    player1.changeHP(randomInt(20));
    player2.changeHP(randomInt(20));
    player1.renderHp();
    player2.renderHp();

    

    if (player1.hp === 0 || player2.hp === 0){
        $randomButton.disabled = true;
        createReloadButton();
    }
    
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $root.appendChild(playerWin(player2.name))
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $root.appendChild(playerWin(player1.name))
    } else if (player2.hp === 0 && player1.hp === 0) {
        $root.appendChild(playerWin())
    }
})

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!!!';
    } else {
        $winTitle.innerText = 'draw!!!';
    }
    return $winTitle;
}

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));