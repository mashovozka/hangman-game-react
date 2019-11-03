let words = [ "week", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "weekend", "breakfast", "dinner", "lunch", "today", "tomorrow", "board", "chair", "window", "chair", "laptop", "dictionary", "table", "wallet", "purse", "umbrella", "photo", "bag", "key", "watch", "tablet", "notebook", "husband", "wife", "mother", "father", "son", "daughter"]

function randomWord () {
    return words[Math.floor(Math.random()* words.length)]
}
export {randomWord}