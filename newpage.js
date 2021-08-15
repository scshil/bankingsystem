document.getElementById("diposite-btn").addEventListener("click",function(){
    // taking input
    const dipositevalueText=document.getElementById("diposite-value");
    const dipositeValue=parseFloat(dipositevalueText.value);
    // previous amount 
    const previousAmountText= document.getElementById("diposite-amount");
    const previousAmount=parseFloat(previousAmountText.innerText);
    const total=dipositeValue+previousAmount;
    // setting diposite amount
    previousAmountText.innerText=total;
    dipositevalueText.value=""

    // total amount
    const totalAmountText=document.getElementById("total-amount");
    const Amount=parseFloat(totalAmountText.innerText);
    const totalAmount=Amount+dipositeValue;
    totalAmountText.innerText=totalAmount

})

// withdraw

document.getElementById("withdraw-button").addEventListener("click",function(){
// taking value
    const withdrawValueText = document.getElementById("withdraw-value");
    const withdrawValue=parseFloat(withdrawValueText.value);
 
    const withdrawAmountText=document.getElementById("withdran-amount");
    withdrawAmountText.innerText=withdrawValue;
// setting toatal amount
    const totalAmountText=document.getElementById("total-amount");
    const Amount=parseFloat(totalAmountText.innerText);
    const totalAmount=Amount-withdrawValue;
    totalAmountText.innerText=totalAmount
    withdrawValueText.value="";
    if(totalAmount<=0){
        window.alert("You don't have Sufficient balance")
    }

})