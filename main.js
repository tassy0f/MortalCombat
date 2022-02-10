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

function createPlayer(player, name, hp){
    const $player = document.createElement('div');
    $player.classList.add('player1');                        // Немного не понял как сделать так, чтобы создавалось два разных класса из одной строки.
                                                             // Тоесть как передать объект player2 так, чтобы для него создался класс (есть подозрения, что нужно имя входящего объекта преобразовать через toString,
                                                             // но в js я не знаю как это реализовать)
        const $progressbar = document.createElement('div')
        $progressbar.classList.add('progressbar');

            const $life = document.createElement('div')
            $life.classList.add('life');
                const $p_hp = document.createElement('p');
                $p_hp.innerText = hp;

            const $name = document.createElement('div')
            $name.classList.add('name');
                const $p_name = document.createElement('p');
                $p_name.innerText = name;

        const $character = document.createElement('div')
        $character.classList.add('character');

            const $img = document.createElement('img')
            $img.src = player.img;

    const $root = document.querySelector('.arenas');
    $root.appendChild($player);
        $player.appendChild($progressbar);
            $progressbar.appendChild($life);
               $life.appendChild($p_hp);
            $progressbar.appendChild($name);
               $name.appendChild($p_name);
        $player.appendChild($character);
            $character.appendChild($img);
};

createPlayer(player1, player1.name, 100);
createPlayer(player2, player2.name, 100);