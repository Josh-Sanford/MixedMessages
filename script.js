const poohWisdom = {
    stateOfMind: ['hungry', 'blue', 'a lack of confidence', 'unfulfilled', 'like you need some love', 'lost'],
    middles: ['just remember', 'think about what', 'ponder what', 'just think'],
    //characters: ['Winnie the Pooh', 'Piglet', 'Tigger', 'Rabbit', 'Owl', 'Eeyore', 'Christopher Robin'],
    // choose advice based on randomly chosen stateOfMind and then randomly choose character
    // under that stateOfMind in the advice object to get a quote
    advice: {
        'hungry': {
            'Winnie the Pooh': 'When you go after honey with a balloon, the great thing is to not let the bees know you’re coming.',
            'Winnie the Pooh': 'I\'m so rumbly in my tumbly.',
            'Winnie the Pooh': 'What could be more important than a little something to eat?',
            'Winnie the Pooh': 'Before beginning a Hunt, it is wise to ask someone what you are looking for before you begin looking for it.',
            'Winnie the Pooh': 'Oh, bother.',

        },
        'blue': {
            'Winnie the Pooh': 'A hug is always the right size.',
            'Eeyore': 'After all, one can\'t complain. I have my friends.',
            'Rabbit': 'Tiggers never go on being sad.',
            'Winnie the Pooh': 'It isn\'t much good having anything exciting, if you can\'t share it with somebody',
            'Winnie the Pooh': 'Nobody can be uncheered with a balloon.',

        },
        'a lack of confidence': {
            'Piglet': 'The things that make me different are the things that make me, me.',
            'Christopher Robin': 'You\'re braver than you believe, stronger than you seem and smarter than you think.',
            'Winnie the Pooh': 'You can\'t stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.',
            'Piglet': 'I wonder what\'s going to happen exciting today?',
            'Owl': 'If the string breaks, then we try another piece of string.',

        },
        'unfulfilled': {
            'Winnie the Pooh': 'Sometimes the smallest things take up the most room in your heart.',
            'Winnie the Pooh': 'A day without a friend is like a pot without a single drop of honey left inside.',
            'Eeyore': 'Could be worse. Not sure how, but it could be.',
            'Winnie the Pooh': 'How lucky am I to have something that makes saying goodbye so hard.',
            'Winnie the Pooh': 'Rivers know this: There is no hurry. We shall get there some day.',

        },
        'like you need some love': {
            'Winnie the Pooh': 'If you live to be a hundred, I hope I live to be a hundred minus one day, so that I never have to live a day without you.',
            'Winnie the Pooh': 'Some people care too much. I think it\'s called love.',
            'Winnie the Pooh': 'If there ever comes a day when we can\'t be together, keep me in your heart, I\'ll stay there forever.',
            'Winnie the Pooh': 'Any day spent with you is my favorite day. So, today is my new favorite day.',
            'Winnie the Pooh': 'If there ever comes a day when we can\'t be together, keep me in your heart, I\'ll stay there forever.',

        },
        'lost': {
            'Winnie the Pooh': 'I\'m not lost for I know where I am. But however, where I am may be lost.',
            'Winnie the Pooh': 'If people are upset because you\'ve forgotten something, console them by letting them know you didn\'t forget—you just weren\'t remembering.',
            'Winnie the Pooh': 'If it\'s not Here, that means it\'s out There.',
            'Winnie the Pooh': 'Those who are clever, who have a Brain, never understand anything.',
            'Winnie the Pooh': 'Always watch where you are going. Otherwise, you may step on a piece of the Forest that was left out by mistake.',

        },

    },
    
}

// function to randomly generate the message

// message in form of: If you're feeling {stateOfMind}, {character} says, "{quote}"

// log the message to the console
