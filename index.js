const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#check");
const message = document.querySelector(".error-message")
const notes = [2000,500,200,100,50,20,10,5,1];
const noNotes = document.querySelectorAll(".no-of-notes");

button.addEventListener("click", validateBillAndCash )

function validateBillAndCash(){ 
    hideMsg();
    if(billAmount.value>0){
       if(cashGiven.value>= billAmount.value){
          const amountReturned = cashGiven.value - billAmount.value;
          calculateChange(amountReturned);
       }else{
           displayMsg("cash given should be greater than bill amount");
       }
    }
    else{
         displayMsg("Invalid Bill Amount");

    }
}
function calculateChange(amountRet){
    for(i=0;i<notes.length;i++){
        const noOfNotes = Math.trunc(amountRet/notes[i]);
        amountRet%=notes[i];
        noNotes[i].innerText=noOfNotes;


    }

}
function hideMsg(){
    message.style.display = "none";
}

function displayMsg(msg){
    message.style.display = "block";
    message.innerHTML = msg;
}