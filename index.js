function getRandomItem(el) {
    if (el instanceof Array) {
        return el[Math.floor(Math.random() * el.length)]
    } else if (typeof el === 'string') {
        return el[Math.floor(Math.random() * el.length)]
    } else if (el instanceof Object) {
        const keys = Object.keys(el);

        const key = keys[Math.floor(Math.random() * keys.length)];

        return el[key]
    }
    else if (!el) {
        return Math.floor(Math.random() * 100)
    }
}

module.exports = getRandomItem
