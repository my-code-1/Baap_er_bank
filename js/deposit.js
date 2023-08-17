document.getElementById('btn-Deposit').addEventListener('click',function(){
    // get the deposit amount from the deposit input field
    const depositField=document.getElementById('user-deposit');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);
    // console.log(typeof newDepositAmount);
    // get the total deposit 
    const depositTotal=document.getElementById('deposit-total');
    const previeouseDepositTotalString=depositTotal.innerText;
    const previeouseDepositTotal=parseFloat(previeouseDepositTotalString);
    // console.log(typeof previeouseDepositTotal)
    const currentDepositTotal=newDepositAmount+previeouseDepositTotal;
    // for nor input element other than input,
    depositTotal.innerText=currentDepositTotal;
     const balenceTotalElement=document.getElementById('balence-total');
     const  previeouseBalenceTotalString=balenceTotalElement.innerText;
     const previeouseBalenceTotal=parseFloat(previeouseBalenceTotalString);
     const  currentBalenceTotal=currentDepositTotal+previeouseBalenceTotal;
     balenceTotalElement.innerText=currentBalenceTotal;
    //  console.log(typeof previeouseBalenceTotal)
    // step:7 clear deposit field
    depositField.value='';
})