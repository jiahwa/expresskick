// Todo
// github@author: jiahwa

// When access.log size is bigger than a limite value, threshold, default value is 1024kb
// and then it will be packed
// Maybe a listener should be started, but a hook should be a better one
const pack = (option) => {
    // Case 1: listenr outside
    listenr(option)

    // Case 2: hook innerside
    hook(option)
}
const listenr = () => {
    // Todo
}
const hook = () => {
    // Todo
}
module.exports = {
    pack
}