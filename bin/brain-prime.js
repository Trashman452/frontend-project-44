#!/usr/bin/env node

import getName from '../src/cli.js'
import readlineSync from 'readline-sync'
import _ from 'lodash'

function getNum () {
    return _.random(1, 200)
}

function getCorrectAnswer (num) {
    if (num < 2) return "no"
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) return "no"
    }
    return "yes"
}

export default function primeGame () {
    console.log('Welcome to the Brain Games!')

    const name = getName()

    console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".")

    for (let i = 1; i <= 3; i += 1) {
        const num = getNum()
        const correctAnswer = getCorrectAnswer(num)

        console.log(`Question: ${num}`)

        const answer = readlineSync.question("Your answer: ").trim().toLowerCase()

        if (correctAnswer === answer) console.log("Correct!")
        
        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

primeGame()