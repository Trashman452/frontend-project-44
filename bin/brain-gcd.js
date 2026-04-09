#!/usr/bin/env node

import getName from '../src/cli.js'
import readlineSync from 'readline-sync'
import _ from 'lodash'

function getTwoNumbers() {
  return `${_.random(1, 100)} ${_.random(1, 100)}`
}

const app = (n, m) => {
  if (m !== 0) {
    const k = n % m

    return app(m, k)
  }

  return n
}

function getCorrectAnswer(exp) {
  const [a, b] = exp.split(' ')

  return app(a, b)
}

export default function getGCD() {
  console.log('Welcome to the Brain Games!')

  const name = getName()

  console.log('Find the greatest common divisor of given numbers.')

  for (let i = 1; i <= 3; i += 1) {
    const num = getTwoNumbers()
    const correctAnswer = getCorrectAnswer(num)

    console.log(`Question: ${num}`)

    const answer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (correctAnswer == answer) console.log('Correct!')

    else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

getGCD()
