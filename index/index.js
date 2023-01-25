

const encrypter = () =>{
    outputSpace.textContent= '';
    const inputWord = document.getElementById('inputSpace').value;
    const wordToEncryp = inputWord
        let letterA =[];
        let letterE =[];
        let letterI =[];
        let letterO =[];
        let letterU =[];
        
        let fixingWord = Array.from(wordToEncryp);
    
        for(let i = 0; i < wordToEncryp.length; i++){
            if (wordToEncryp[i] === "a") letterA.push(i);
            
            if (wordToEncryp[i] === "e") letterE.push(i);
            
            if (wordToEncryp[i] === "i") letterI.push(i);
            
            if (wordToEncryp[i] === "o") letterO.push(i);
            
            if (wordToEncryp[i] === "u") letterU.push(i);
            
        }
    
        
        letterA.forEach(element => {
            fixingWord[element] = 'ai';
            //console.log(element);
            return(fixingWord);
            
        });
        letterE.forEach(element => {
            fixingWord[element] = 'enter';
            //console.log(letterE1);
            return(fixingWord);
            
        });
        letterI.forEach(element => {
            fixingWord[element] = 'imes';
            //console.log(letterI1);
            return(fixingWord);
            
        });
        letterO.forEach(element => {
            fixingWord[element] = 'ober';
            //console.log(letterO1);
            return(fixingWord);
            
        });
        letterU.forEach(element => {
            fixingWord[element] = 'ufat';
            //console.log(letterU1);
            return(fixingWord);
            
        });

        const answer = fixingWord.join('')
        console.log(answer);
        /*const createOutput = document.createElement('textarea');
        const unencryptSection = document.getElementById('unencryptSection')
        h3.style.visibility = "hidden";
        createOutput.id = 'outputSpace'*/
        const image = document.getElementById('imageContainer');
        outputSpace.textContent= answer;
        h3.style.visibility = 'hidden';
        parragraph.style.visibility = 'hidden';
        imageContainer.style.visibility = 'hidden';
        outputSpace.style.visibility = 'visible';

}

