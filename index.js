function getRandomItem(el) {
    if (el instanceof Array) {
        return Math.floor(Math.random() * el.length)
    }
}

module.exports = getRandomItem
