const hobby = {
    hobbyOne : 'videogiochi',
    hobbyTwo : 'Moto',
    hobbyThree : 'Non fare niente',
}

function getHobbies(tuttiHobby) {
    return [tuttiHobby.hobbyOne, tuttiHobby.hobbyTwo, tuttiHobby.hobbyThree]
}

console.log(getHobbies(hobby))

module.exports = getHobbies;