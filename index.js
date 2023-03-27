function findMatching(array, name){
    return array.filter((el) => el.toLowerCase().includes(name.toLowerCase()));
}

function fuzzyMatch(array, name){
    return array.filter((el) => el.charAt(0).includes(name.charAt(0)));
}

function matchName(array, name){
    return array.filter((obj) => obj.name.includes(name));
}
