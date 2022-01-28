const btn= document.querySelector(".btn");
const userInput= document.querySelector("#wordInput").value;

 btn.addEventListener("click",()=>{
     nullCheck(userInput,()=>{
         wordChecker(word,()=>{
             vowelCounter(word)
         })
     })
 })


function wordChecker(word,callback){
    let lettersOnly = /^[a-zA-Z]+$/
   
    if(word.match(lettersOnly)){
     console.log(word)
        return word;
    }
    else {
        
        return false
    }
    
}

function vowelCounter(word){
      let count =word.split("").filter(x=>x.match(/[aeiou]/gi)).length;
      document.querySelector(".output").innerText=count;

    
}

function nullCheck(word, callback){
    if (!word){
        alert(" please enter a word")
        return false; 
    }
    else {
        console.log(word)
        return word
    }
}

