function validAnagram(ana1,ana2){
    // add whatever parameters you deem necessary - good luck!
    if (ana1.length !== ana2.length){
        return false;
    }
    const lookup = {};
    
    for (let i = 0; ana1.length; i++){
        let letter = ana1[i];
        if (lookup[letter] ? lookup[letter]+=1 : lookup[letter] = 1);
    }
    for (let i = 0; ana2.length; i++){
        let letter = second[i];
        if (!lookup[letter]){
            return false;
        }else {
            lookup[letter]-=1;
        }
    }
    return true;
  }
  
console.log(validAnagram('anagram','anagram'));