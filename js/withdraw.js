document.getElementById('btn-Withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const newWithdrawAmount=parseFloat(newWithdrawAmountString);
    const withdrawTotal=document.getElementById('withdraw-total');
    const previeouseWithdrawTotalString=withdrawTotal.innerText;
    const previeouseWithdrawTotal=parseFloat(previeouseWithdrawTotalString);
    const currentWithdrawTotal=newWithdrawAmount+previeouseWithdrawTotal;
    withdrawTotal.innerText=currentWithdrawTotal;
    const balenceTotalElement=document.getElementById('balence-total');
    const  previeouseBalenceTotalString=balenceTotalElement.innerText;
    const previeouseBalenceTotal=parseFloat(previeouseBalenceTotalString);
    const  currentBalenceTotal=previeouseBalenceTotal-currentWithdrawTotal;
    balenceTotalElement.innerText=currentBalenceTotal;


    withdrawField.value='';
})