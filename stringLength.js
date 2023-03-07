function stringLength(str){
    
    if (str.length < 1){
        throw new Error('string must be at least 1 charactor')
    }
    if (str.length > 10){
        throw new Error('string must be at less than 10 charactor')
    }

    return str.length;
}


module.exports = stringLength;