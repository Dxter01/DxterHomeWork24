import { doubleArrayElements, sumArray, SkillsManager, DateCalculator  } from "./main.js" 

// #1 
const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum) // Виведення суми

// #2
const exampleDoubleArray = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArray)
console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів

// #3 
const skillsManager = new SkillsManager()
//
console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.addSkill('C'))
console.log(skillsManager.getAllSkills())

// #4
const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів
//
dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів


