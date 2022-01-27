const btn= document.querySelector(".btn");
const userInput= document.querySelector("#wordInput").value;

// btn.addEventListener("submit", wordChecker(userInput))


function wordChecker(formSubmission){
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

function vowelCounter(word){
   return word.split("").filter(x=>x.match(/[aeiou]/gi)).length
   


}

