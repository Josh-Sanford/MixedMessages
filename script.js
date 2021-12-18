const poohWisdom = {
    stateOfMind: ['hungry', '...'],
    //characters: ['Winnie the Pooh', 'Piglet', 'Tigger', 'Rabbit', 'Owl', 'Eeyore', 'Christopher Robin'],
    // choose advice based on randomly chosen stateOfMind and then randomly choose character
    // under that stateOfMind in the advice object to get a quote
    advice: {
        'stateOfMind': {
            'character': 'quote',
        }
    }
}

// function to randomly generate the message

// message in form of: If you're feeling {stateOfMind}, {character} says, "{quote}"

// log the message to the console