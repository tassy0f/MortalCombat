const $root = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $fightForm = document.querySelector('.control');
const $chatLog = document.querySelector('.chat');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

const player1 = {
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    playerNumber : 1,

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    },
    changeHP,
    elHp,
    renderHp
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

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    if (name) {
        $winTitle.innerText = name + ' Wins!!!';
    } else {
        $winTitle.innerText = 'draw!!!';
    }
    return $winTitle;
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

const dateWrapGenerate = (anyTime) => anyTime < 10 ? `0${anyTime}` : anyTime;

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const doneDate = `${dateWrapGenerate(hours)}:${dateWrapGenerate(minutes)}:${dateWrapGenerate(seconds)}`;
    return doneDate;
}

const generateLogs = (type, player1, player2, damage = 0) => {
    const text = type.includes('start','draw') ? logs[type] : logs[type][randomInt(logs[type].length - 1)]
    
    console.log(text);

    const confirmedTime = getTime();
    let logMessage = '';

    switch (type) {
        case 'start':
            logMessage = `${text}`
            .replace('[time]', confirmedTime)
            .replace('[player1]', player1.name)
            .replace('[player2]', player2.name);
            break;
        case 'end':
            logMessage = `${confirmedTime} - ${text}`
            .replace('[playerWins]', player1.name)
            .replace('[playerLose]', player2.name);
        case 'hit':
            logMessage = `${confirmedTime} - ${text} -${damage} [${player2.hp}/100]`
            .replace('[playerKick]', player1.name)
            .replace('[playerDefence]', player2.name)
            .replace('[playerWins]', player1.name)
            .replace('[playerLose]', player2.name);
            break;
        case 'defence':
            logMessage = `${confirmedTime} - ${text}`
            .replace('[playerDefence]', player1.name)
            .replace('[playerKick]', player2.name);
            break;
        default:
            logMessage = `${text}`;
    }

    $chatLog.insertAdjacentHTML('afterbegin', `<p>${logMessage}<p>`);
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

$root.appendChild(createPlayer(player1));
$root.appendChild(createPlayer(player2));
generateLogs('start', player2, player1);