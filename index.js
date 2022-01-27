const btn= document.querySelector(".btn");
const userInput= document.querySelector("#wordInput").value;

 btn.addEventListener("click", nullCheck)


function wordChecker(word){
    let lettersOnly = /^[a-zA-Z]+$/
   
    if(word.match(lettersOnly)){
     console.log(word)
        return word;
    }
    else {
        alert("please only submit a word that containing a-z or A-Z")
        return false
    }
    
}

function vowelCounter(wordChecker){

   let word = document.querySelector("#wordInput").value;
   wordChecker(word)
   console.log(word.split("").filter(x=>x.match(/[aeiou]/gi)).length) 
}

function nullCheck(input){
   const value= input.value.trim()
    if (value.dataset.state=){
        alert("please write a word")
        return false
    }
    else{
        return userInput
    }
}
