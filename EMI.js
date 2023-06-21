function LOAN(){
let amount=document.querySelector("#amount").value;
let rate=document.querySelector("#rate").value;
let months=document.querySelector("#months").value;
rate=(rate/12)*0.01;
let p=Math.pow((1+rate),months);
let payment=(amount*rate*p)/(p-1);
let interest=(payment*months)-amount;

if(isNaN(amount))

      {
          alert("|Please Enter Numbers only in loan Amount");
document.querySelector("#amount").focus();
return;

      }
if(isNaN(rate))
{
    alert("!Please Enter Numbers only in Interest Rate");
document.querySelector("#rate").focus();

return;

}
if(isNaN(months))
{
    alert("!please Enter Numbers Only in Months");
document.querySelector("#months").focus();
return;

}


if(amount==""||rate==""||months=="")
{
    alert("!All Filled must be Filled Out");
return;

}else{
document.getElementById("payment").innerHTML=`Monthly E.M.I &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp   ₹${payment.toFixed(2)}`;
document.getElementById("payable").innerHTML=`Total Interset &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp &nbsp &nbsp  &nbsp &nbsp     ₹${interest.toFixed(2)}`;
document.getElementById("total").innerHTML=`Total Payable Amount  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  ₹${(payment*months).toFixed(2)}`

}

}
/*
function amountInterest()
{const payment=document.querySelector("#payment").value;
const amount=document.querySelector("#amount").value;
const months=document.querySelector("#months").value; 
const interest=Number(payment-(amount/months));                          
let Rate=Number((interest/amount)*months);
document.querySelector("#payment").innerHTML=`Interest Rate on Amount=${Rate}%`;
}*/


/*function myResult() {
    var x=document.getElementById("result");
   if(x.style.display=="")
    {
      x.style.display="none";
    }
      else{
    x.style.display="block";
   }
}*/
  





