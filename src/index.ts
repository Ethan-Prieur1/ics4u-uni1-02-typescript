/**
* The program shows how to get input
*   and deal with numbers
*
* By:       Ethan Prieur
* Version: 1.0
* Since: 2022-09-15
*/

import promptSync from 'prompt-sync'


const prompt = promptSync()

const massString = prompt('Enter in Mass (kg) to find Energy with E = MC2: ')
const massInt = parseInt(massString)
energy = massInt * (2.998 * 10**8)**2
console.log('Energy = ${energy} Joules')


console.log('\nDone.')
