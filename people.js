const fullName = require("./names.js")
const getHobbies = require("./hobbies.js")


const getInfo = () => (
    {
        nemes: fullName('Igor', 'Goro'),
        hobbies: getHobbies('videogiochi', 'Moto', 'Non fare niente')
    }
    
)
 console.log( getInfo() )