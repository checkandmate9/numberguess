const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0;



document.getElementById("submitButton").onclick = function(){ 
    gönder()
}
function gönder(){
    
    let guess = document.getElementById("guessField").value
    guesses+=1;

    
    if(guess == answer){
    alert(`${answer} is the #. It took you ${guesses} guesses`)
    guesses = 0;
    
     }
    else if (guess < answer){
    alert(" Try larger!")
     }
    else {
    alert("Try smaller!")
    }
    

}
document.getElementById("guessField").addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        gönder();
    }
    
});
