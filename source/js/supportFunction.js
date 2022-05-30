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

export {randomInt,createElement}