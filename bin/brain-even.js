#!/usr/bin/env node

import getName from '../src/cli.js'
import readlineSync from 'readline-sync'

function isEven (num) {
    return num % 2 === 0
}

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function isEvenGame () {
    console.log('Welcome to the Brain Games!')
    
    const name = getName()

    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")

    for (let tryes = 1; tryes <= 3; tryes += 1) {
        const randomNumber = getRandomNumber(1, 100)
        const correctAnswer = isEven(randomNumber) ? "yes" : "no"

        console.log(`Question: ${randomNumber}`)

        const answer = readlineSync.question("Your answer: ").trim().toLowerCase()

        if (answer === correctAnswer) console.log("Correct!")

        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`)
            console.log(`Let's try again, ${name}`)
            return
        }
    }

    console.log(`Congratulations, ${name}`)
}

isEvenGame()
