const wordingArray = [
    [
    'Today',
    'Tomorrow',
    'Day after tomorrow',
    'Next week',
    'In next 2 weeks',
    'Next month',
    'Next year'
    ],
    [
    'you',
    'your friend',
    'your relative',
    'your partner'
    ],
    ['will be'],
    [
    'successful',
    'sad',
    'happy',
    'positive',
    'betrayed',
    'left alone',
    'promoted'
    ]
]

const ranWordsArray = arrays =>{
    const wordsArray = arrays.map(array => {
        return array[Math.floor(Math.random()*array.length)]
    });
    return wordsArray.join(' ') + '!'
}
console.log(ranWordsArray(wordingArray));