const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#check");
const buttonNext = document.querySelector(".btn-next");
const divCash = document.querySelector("#cash");
const  table =document.querySelector("#table");

const message = document.querySelector(".error-message-check");
const nextMsg = document.querySelector(".error-message-next");
const notes = [2000,500,200,100,50,20,10,5,1];
const noNotes = document.querySelectorAll(".no-of-notes");

hideCashAndTable();
buttonNext.addEventListener("click", validateBillAmount);
// button.addEventListener("click", validateBillAndCash );
button.addEventListener("click",  validateCash );

function validateBillAmount(){
    hideCashAndTable();
    if(billAmount.value>0){
    divCash.style.display ="block";
    message.style.display = "none";
    buttonNext.style.display = "none";
    } else{
        nextMsg.style.display = "block";
        nextMsg.innerHTML = "Invalid Bill Amount";
    }
}
function validateCash(){
    if((cashGiven.value - billAmount.value)<0){
        message.style.display = "block";
      message.innerHTML = "Cash given should be more than bill amount"; 
      table.style.display="none";
    } else{
        table.style.display="block";
        const amountReturned = cashGiven.value - billAmount.value;
        calculateChange(amountReturned);
    }
}

function hideCashAndTable(){
    nextMsg.style.display = "none";
    divCash.style.display ="none";
    table.style.display="none";
}
function calculateChange(amountRet){
        for(i=0;i<notes.length;i++){
            const noOfNotes = Math.trunc(amountRet/notes[i]);
            amountRet %= notes[i];
            noNotes[i].innerText = noOfNotes;
        }
    }







// function validateBillAndCash(){ 
//     hideMsg();
//     if(billAmount.value>0){
//        if((cashGiven.value>billAmount.value)||(cashGiven.value==billAmount.value)){
//           const amountReturned = cashGiven.value - billAmount.value;
//           calculateChange(amountReturned);
//        } else{
//            displayMsg("cash given should be greater than bill amount");
//        }
//     } else{
//          displayMsg("Invalid Bill Amount");

//     }
// }
// function calculateChange(amountRet){
//     for(i=0;i<notes.length;i++){
//         const noOfNotes = Math.trunc(amountRet/notes[i]);
//         amountRet%=notes[i];
//         noNotes[i].innerText=noOfNotes;


//     }

// }
// function hideMsg(){
//     message.style.display = "none";
// }

// function displayMsg(msg){
//     message.style.display = "block";
//     message.innerHTML = msg;
// }