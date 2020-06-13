const Handlebars = require("handlebars");

function getRandomWord() {
    return Math.floor(Math.random() * 7);
}
const subjects = [
    'shark',
    'popcorn',
    'poison',
    'fork',
    'cherry',
    'toothbrush',
    'cannon',
];
const punchlines = [
    'watch movie with',
    'spread some love',
    'put on cake',
    'clean toilets',
    'go to the moon',
    'achieve world piece',
    'help people learn programing',
];

function drawCard() {
    const cardData = {
        subject: subjects[getRandomWord()],
        punchline: punchlines[getRandomWord()]
    };
    var card = "{{subject}} is great for {{punchline}}";
    var template = Handlebars.compile(card);
    var result = template(cardData);
    console.log(result);
}
drawCard();