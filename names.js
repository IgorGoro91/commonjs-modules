const names = {
    firstName: 'Igor',
    lastName: 'Goro',
}

function fullName(person) {
    return person.firstName +" " +person.lastName;
     
}

console.log(fullName(names))
    
module.exports = fullName;