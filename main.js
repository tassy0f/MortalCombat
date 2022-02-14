const player1 = {
    name : 'Kitana',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    }
};

const player2 = {
    name : 'Scorpion',
    hp : 100,
    img : 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',

    weapon :['stillet','butterfly'],

    function(name) {
        console.log(name + ' Fight...');
    }
};

function createPlayer(player, obj, hp){
    const $player = document.createElement('div');
    $player.classList.add(player);                        

        const $progressbar = document.createElement('div')
        $progressbar.classList.add('progressbar');

            const $life = document.createElement('div')
            $life.classList.add('life');
                $life.style.width = hp + '%';

            const $name = document.createElement('div')
            $name.classList.add('name');
            $name.innerText = obj.name;

        const $character = document.createElement('div')
        $character.classList.add('character');

            const $img = document.createElement('img')
            $img.src = obj.img;

    const $root = document.querySelector('.arenas');
    $root.appendChild($player);
        $player.appendChild($progressbar);
            $progressbar.appendChild($life);
            $progressbar.appendChild($name);
        $player.appendChild($character);
            $character.appendChild($img);
};

createPlayer('player1', player1, 100);
createPlayer('player2', player2, 100);