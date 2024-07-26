'use strict';
const account1={
    owner:'Nitin Lowda',
    movements:[200,450,-400,3000,-650,-130,70,1300],
    intrestrate:1.2,
    pin:1111
};
const account2={
    owner:'Charan Gowda',
    movements:[5000,3400,-150,-700,-3210,-1000,8500,-30],
    intrestrate:1.5,
    pin:2222
};
const account3={
    owner:'Darshan Gandu',
    movements:[200,-200,340,-300,-20,50,400,-460],
    intrestrate:0.7,
    pin:3333
};
const account4={
    owner:'Hrudhay Soda',
    movements:[430,1000,700,50,90],
    intrestrate:1,
    pin:4444
};
const accounts=[account1,account2,account3,account4]; 
const containermovements=document.querySelector('.transaction');
const labelbal=document.querySelector('.bal');
const labelinc=document.querySelector('.income .amount');
const labelout=document.querySelector('.out .amount');
const labelintrest=document.querySelector('.intrest .amount');
const btnlogin=document.querySelector('.nav-arrow');
const inputloginuser=document.querySelector('.nav-inpuser');
const inputloginpin=document.querySelector('.nav-inppin');
const labelwelcome=document.querySelector('.nav-text');
const main=document.querySelector('.detail');
const inputtransferto=document.querySelector('.transferto');
const inputtransferamt=document.querySelector('.transferamt');
const btntransfer=document.querySelector('.tran-arrow')
const addusername=function(accs){
    accs.forEach(function(acc){
        acc.username=acc.owner
        .toLowerCase()
        .split(' ')
        .map(name=>{return name[0]})
        .join('');
    });
}
const displaybalance=function(acc){
    acc.balance=acc.movements.reduce(function(acc,mov,i){
        return acc+mov;
    })
    labelbal.textContent=`${acc.balance}€`;
}
const displaysummary=function(cacc){
    const income=cacc.movements.filter(mov => {return mov>0}).reduce((acc,move) => {return acc+move});
    labelinc.textContent=`${income}€`;
    const out=cacc.movements.filter(mov => {return mov<0}).reduce((acc,move) => {return acc+move});
    labelout.textContent=`${Math.abs(out)}€`;
    const intrest=cacc.movements.filter(mov=>{return mov>0}).map(move=>{return (move*cacc.intrestrate)/100}).filter(mo=>{return mo>=1}).reduce((acc,mov)=>{return acc+mov});
    labelintrest.textContent=`${intrest}€`
}
const displaymovements=function(movements){
    containermovements.innerHTML='';
    movements.forEach(function(mov,i){
        const type=mov>0?'Deposit':'withdraw';
        const html=`
        <div class="tran">
            <div class="${type}">
            <h1>${i+1} ${type}</h1>
            </div>
            <div class="money">${mov}€</div>
        </div>
        <hr>
    `;
    containermovements.insertAdjacentHTML('afterbegin',html);
    })

};
addusername(accounts);
const display=function(acc){
    //display movements
    displaymovements(acc.movements);
    displaybalance(acc);
    displaysummary(acc);
}
let currentaccount;
btnlogin.addEventListener('click',function(e){
    e.preventDefault();
    console.log('login');
    currentaccount=accounts.find(function(acc){
        return acc.username===inputloginuser.value;
    })
    if(currentaccount?.pin==inputloginpin.value){
        inputloginpin.value=inputloginuser.value='';
        //display UI,welcome message
        labelwelcome.textContent=`Welcome back,${currentaccount.owner.split(' ')[0]}`;
        main.style.opacity=100;
        // display movements
        display(currentaccount);
    }
});

btntransfer.addEventListener('click',function(e){
    // console.log('hi');
    // console.log(inputtransferto.value);
    e.preventDefault();
    const reciveraccount=accounts.find(function(acc){
       return inputtransferto.value===acc.username;
    });
    const amount=Number(inputtransferamt.value);
    // console.log(reciveraccount);
    // console.log(currentaccount);
    if(currentaccount.balance>inputtransferamt.value&&inputtransferamt.value>0&&currentaccount.username!=inputtransferto.value&&reciveraccount?.username){
        currentaccount.movements.push(-amount);
        reciveraccount.movements.push(amount);
        display(currentaccount);
    }
    inputtransferamt.value=inputtransferto.value='';
})
