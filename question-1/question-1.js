const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

function lowerCaseWords(mixedArray){
    let returnArray = new Promise((resolve, reject) => {
        let isALetter = mixedArray.filter((isElementAString) => typeof isElementAString === 'string' && /[a-zA-Z]/.test(isElementAString))

        let mapWords = isALetter.map((changeElementToLowerCase) => changeElementToLowerCase.toLowerCase())
        
        if (isALetter.length == 0 || mixedArray.length === 0 || !Array.isArray(mixedArray)) {
            reject("Error or Incorrect input")        
        }
        else {
            resolve(mapWords)
        }
    })
    return returnArray
}


lowerCaseWords(mixedArray)


.then((resolve) => {
    console.log(resolve) 
})

.catch((reject) => {
    console.log(reject )
})
