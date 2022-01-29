const btn= document.querySelector(".btn");
const userInput= document.querySelector("#wordInput");

 btn.addEventListener("click",()=>{
   const word=userInput.value; 
    isNull(word,()=>{
         isWord(word,()=>{
             vowelCounter(word,vowelCounter)
         })
     })
 })


function isWord(word,callback){
    let lettersOnly = /^[a-zA-Z]+$/
   
    if(word.match(lettersOnly)){
        return callback(word)
    }
    else {
        alert("please enter a word without numbers or special characters")
        return false
    }
    
}

function vowelCounter(word){
      let count = word.split("").filter(x=>x.match(/[aeiou]/gi)).length;
      document.querySelector(".output").innerText=count;

    
}

function isNull(word, callback){
    if (!word){
        alert(" please enter a word")
        return false; 
    }
    else {
        return callback(word)
    }
}

