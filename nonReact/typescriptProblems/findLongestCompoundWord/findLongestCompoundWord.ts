const findLongestCompoundWord = (words:string[]) => {
    let longestCompoundWord:string;

    for(let i = 0; i < words.length; i++){
        const word = words[i];
        if(!words.find((currentWord,index)=>index !== i && currentWord === word))continue;
        
    }
}