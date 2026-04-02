#!/usr/bin/env node

import getName from '../src/cli.js'
import _ from 'lodash'
import readlineSync from 'readline-sync'

function getRandomExpression () {
    const signs = ['+', '-', '*']

    return `${_.random(1, 100)} ${_.sample(signs)} ${_.random(1, 100)}`
}

function correctAnswer (exp) {
    const [a, operator, b] = exp.split(' ')

    switch (operator) {
        case '+': return String(Number(a) + Number(b))
        case '-': return String(Number(a) - Number(b))
        case '*': return String(Number(a) * Number(b))
        default: return null
    }
}

export default function whatIsCalcRes () {
    console.log('Welcome to the Brain Games!')

    const name = getName()

    console.log("What is the result of the expression?")

    for (let i = 1; i <= 3; i += 1) {
        const randomExpression = getRandomExpression()

        console.log(`Question: ${randomExpression}`)

        const answer = readlineSync.question("Your answer: ").trim().toLowerCase()

        if (correctAnswer(randomExpression) === answer) console.log("Correct!")

        else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer(randomExpression)}"`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }

    console.log(`Congratulations, ${name}!`)
}

whatIsCalcRes()