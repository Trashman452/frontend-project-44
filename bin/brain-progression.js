#!/usr/bin/env node

import getName from '../src/cli.js'
import readlineSync from 'readline-sync'
import _ from 'lodash'

function getProgression () {
    const index = _.random(1, 20)
    const start = _.random(1, 100)
    const length = _.random(5, 12)
    const result = []

    for (let i = 0; i < length; i += 1) {
        result.push(start + (i * index))
    }

    const hiddenIndex = _.random(3, result.length)

    result[hiddenIndex] = ".."

    return result.join(' ')
}

function getCorrectAnswer (prog) {
    const arr = prog.split(' ')

    const i = arr[1] - arr[0]
    const unfined = arr.indexOf("..")

    return Number(arr[unfined - 1]) + i
}

export default function progressionGame () {
    console.log('Welcome to the Brain Games!')

    const name = getName()

    console.log("What number is missing in the progression?")

    for (let i = 1; i <= 3; i += 1) {
        const progression = getProgression()
        const correctAnswer = getCorrectAnswer(progression)

        console.log(`Question: ${progression}`)

        const answer = readlineSync.question("Your answer: ").trim().toLowerCase()

        if (correctAnswer == answer) console.log("Correct!")
        
        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

progressionGame()