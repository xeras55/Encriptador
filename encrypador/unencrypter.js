

let wordToEncryp = 'murcielago';

const unencrypFunction = () => {
    
    console.log(wordToUnencrypt.includes('ober'));
    console.log(wordToUnencrypt.replace('ober', 'o'));
}
//unencrypFunction();

const unencrypFunctionA = () => {
    if (wordToUnencrypt.includes('ai'))  wordToUnencrypt = wordToUnencrypt.replace('ai', 'a');
    if (wordToUnencrypt.includes('enter'))  wordToUnencrypt = (wordToUnencrypt.replace('enter', 'e')); 
    if (wordToUnencrypt.includes('imes'))  wordToUnencrypt = wordToUnencrypt.replace('imes', 'i');
    if (wordToUnencrypt.includes('ober'))  wordToUnencrypt = (wordToUnencrypt.replace('ober', 'o'))
    if (wordToUnencrypt.includes('ufat'))  wordToUnencrypt = wordToUnencrypt.replace('ufat', 'u');
    console.log(wordToUnencrypt);
}

//let wordToUnencrypt = 'mufatrcimesenterlaigober'
let wordToUnencrypt = 'imesimesimesimes'
let findingWord = Array.from(wordToUnencrypt);
//console.log(findingWord.slice(0,3));

let letterA =[];
let worA = [];

/*if (findingWord.includes('a')){
    for(let i = 0; i < findingWord.length; i++)
    letterA.push(i+2);
    console.log(findingWord.slice(indexW,3)); 
}*/


findingWord.forEach(element => {
    if (element === 'a')
    {
    letterA.push( wordd = findingWord.indexOf(element));
    //console.log(wordd)
    //for (let i = 0; i < array.length; i++) {}


    //compare = findingWord.splice(wordd,2);
    //let word1 = wordd + 1
    //console.log(word1)
    
        
    }
});

/*if (wordToUnencrypt.includes('ai')){
    //for(let i = 0; i < findingWord.length; i++)
    console.log(ind = wordToUnencrypt.indexOf('ai'))
}*/


const wordXA = []

/*for (let i = 0; i < wordToUnencrypt.length -1; i++) {
    if(wordToUnencrypt[i] === 'a' && wordToUnencrypt[i+1] === 'i'){
        wordXA.push(i+1);
        console.log(wordXA[0])
        let lengthUnen =wordToUnencrypt.length;
        console.log(lengthUnen)
        findingWord[wordXA[0]] = '';
        console.log(findingWord)
        console.log(wordToUnencrypt)
        console.log(findingWord.join(''));
        //wordSliced = wordToUnencrypt.slice(wordXA[0], lengthUnen)
        //console.log(wordSliced)
        
    }
    
}

const wordXE = []

for (let i = 0; i < wordToUnencrypt.length -1; i++) {
    if(wordToUnencrypt[i] === 'e' && wordToUnencrypt[i+1] === 'n' && wordToUnencrypt[i+2] === 't' ){
        wordXE.push(i+1, i+2, i+3, i+4, i+5);
        console.log(wordXE[0])
        console.log(wordXE[1])
        console.log(wordXE[2])
        console.log(wordXE[3])
        let lengthUnen =wordToUnencrypt.length;
        //console.log(lengthUnen)
        findingWord[wordXE[0]] = '';
        findingWord[wordXE[1]] = '';
        findingWord[wordXE[2]] = '';
        findingWord[wordXE[3]] = '';
        console.log(findingWord)
        console.log(wordToUnencrypt)
        console.log(findingWord.join(''));
        //wordSliced = wordToUnencrypt.slice(wordXE[0], lengthUnen)
        //console.log(wordSliced)
        
    }
    
}

const wordXI = []

for (let i = 0; i < wordToUnencrypt.length -1; i++) {
    if(wordToUnencrypt[i] === 'i' && wordToUnencrypt[i+1] === 'm' && wordToUnencrypt[i+2] === 'e' ){
        wordXI.push(i+1, i+2, i+3);
        console.log(wordXI[0])
        console.log(wordXI[1])
        console.log(wordXI[2])
        let lengthUnen =wordToUnencrypt.length;
        //console.log(lengthUnen)
        findingWord[wordXI[0]] = '';
        findingWord[wordXI[1]] = '';
        findingWord[wordXI[2]] = '';
        console.log(findingWord)
        console.log(wordToUnencrypt)
        console.log(findingWord.join(''));
        //wordSliced = wordToUnencrypt.slice(wordXE[0], lengthUnen)
        //console.log(wordSliced)
        
    }
    
}

const wordXO = []

for (let i = 0; i < wordToUnencrypt.length -1; i++) {
    if(wordToUnencrypt[i] === 'o' && wordToUnencrypt[i+1] === 'b' && wordToUnencrypt[i+2] === 'e' ){
        wordXO.push(i+1, i+2, i+3);
        console.log(wordXO[0])
        console.log(wordXO[1])
        console.log(wordXO[2])
        let lengthUnen =wordToUnencrypt.length;
        //console.log(lengthUnen)
        findingWord[wordXO[0]] = '';
        findingWord[wordXO[1]] = '';
        findingWord[wordXO[2]] = '';
        console.log(findingWord)
        console.log(wordToUnencrypt)
        console.log(findingWord.join(''));
        //wordSliced = wordToUnencrypt.slice(wordXE[0], lengthUnen)
        //console.log(wordSliced)
        
    }
    
}

const wordXU = []

for (let i = 0; i < wordToUnencrypt.length -1; i++) {
    if(wordToUnencrypt[i] === 'u' && wordToUnencrypt[i+1] === 'f' && wordToUnencrypt[i+2] === 'a' ){
        wordXU.push(i+1, i+2, i+3);
        console.log(wordXU[0])
        console.log(wordXU[1])
        console.log(wordXU[2])
        let lengthUnen =wordToUnencrypt.length;
        //console.log(lengthUnen)
        findingWord[wordXU[0]] = '';
        findingWord[wordXU[1]] = '';
        findingWord[wordXU[2]] = '';
        console.log(findingWord)
        console.log(wordToUnencrypt)
        console.log(findingWord.join(''));
        //wordSliced = wordToUnencrypt.slice(wordXE[0], lengthUnen)
        //console.log(wordSliced)
        
    }
    
}*/

/*wordToUnencrypt =  'aienterimesoberufataienterimesoberufat'
findingWord = Array.from(wordToUnencrypt);
let wordToUnencrypt1 = [];
const wordXI = []

const cleari = () => {
    for (let i = 0; i < wordToUnencrypt.length; i++) {
        if(wordToUnencrypt[i] === 'i' && wordToUnencrypt[i+1] === 'm' && wordToUnencrypt[i+2] === 'e' ){
            wordXI.push(i+1, i+2, i+3);
            //console.log(wordXI[0])
            //console.log(wordXI[1])
            //console.log(wordXI[2])
            let lengthUnen = wordToUnencrypt.length;
            console.log(lengthUnen)
            findingWord[wordXI[0]] = '';
            findingWord[wordXI[1]] = '';
            findingWord[wordXI[2]] = '';
            //console.log(findingWord)
            //console.log(wordToUnencrypt) 
            wordToUnencrypt = findingWord.join('')
            //console.log(wordToUnencrypt)
            wordSliced = wordToUnencrypt.slice(wordXI[0], lengthUnen)
            if (wordSliced.includes('imes')) {
                wordSliced = wordSliced.replace('imes', 'i');
            }else return(wordSliced)
    }
    
}
}*/


while (wordToUnencrypt.includes('ai')){
    wordToUnencrypt = wordToUnencrypt.replace('ai', 'a');
    console.log(wordToUnencrypt)
}

while (wordToUnencrypt.includes('enter')){
    wordToUnencrypt = wordToUnencrypt.replace('enter', 'e');
    console.log(wordToUnencrypt)
}

while (wordToUnencrypt.includes('imes')){
    wordToUnencrypt = wordToUnencrypt.replace('imes', 'i');
    console.log(wordToUnencrypt)
}

while (wordToUnencrypt.includes('ober')){
    wordToUnencrypt = wordToUnencrypt.replace('ober', 'o');
    console.log(wordToUnencrypt)
}

while (wordToUnencrypt.includes('ufat')){
    wordToUnencrypt = wordToUnencrypt.replace('ufat', 'u');
    console.log(wordToUnencrypt)
}



