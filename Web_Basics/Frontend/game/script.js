let xp=0
let health=100;
let gold=50 //semicolon optional
let current_weapon=0
//we can use let,var(most changing) or const(can't change) to declare variable 
let fighting;
let monsterhealth;
let inventory=["stick"];
//Reffering html elements to later change in script
const button1=document.querySelector('#button1')
const button2=document.querySelector('#button2')
const button3=document.querySelector("#button3")
const xptext=document.querySelector('#xptext')
const healthtext=document.querySelector('#healthtext')
const goldtext=document.querySelector('#goldtext')
const monsterStats=document.querySelector('#monsterStats')
const monsterNameText=document.querySelector('#monsterName')
const monsterhealthtext=document.querySelector('#monsterHealth')
const text=document.querySelector('#text')
//object creation
const weapons=[
    {
        name:"stick",
        power:5
    },
    {
        name:"dagger",
        power:30
    },
    {
        name:"claw hammer",
        power:50
    },
    {
        name:"sword",
        power:100
    }
]
const locations=[
    {
        name:"town sqaure",
        "button text":["Go to store",'Go to cave','Fight dragon'],
        "button function":[gostore,gocave,fightdragon],
        text:"you are in town to square"
    },
    {
        name:"store",
        "button text":["Buy 10 health(10 gold)","Buy weapon(30 gold)","Go to town square"],
        "button function":[buyhealth,buyweapon,gotown],
        text:"you entered the store"
    },
    {
        name:"cave",
        "button text":["fight slime","fight skeleton","Go to town square"],
        "button function":[fightslime,fightskeleton,gotown],
        text:"you entered the cave"
    },
    {
        name:'fight',
        "button text":['attack','dodge','run'],
        "button functions":[attack,dodge,gotown],
        text:"You are fighting a monster."
    }
]
const monster=[
    {
        name:'slime',
        level:2,
        health:15
    },
    {
        name:"skeleton",
        level:8,
        health:60
    },
    {
        name:'dragon',
        length:20,
        health:300
    }
]
// initialize button
button1.onclick=gostore;
button2.onclick=gocave;
button3.onclick=fightdragon;
//creating fuction
/*function gostore(){
    button1.innerHTML="Buy 10 health(10 gold)"
    button2.innerHTML="Buy weapon(30 gold)"
    button3.innerHTML="Go to town square"
    text.innerHTML="You entered the stored"
    button1.onclick=buyhealth
    button2.onclick=buyweapon
    button3.onclick=gotown
}
function gotown(){
    button1.innerHTML="go to store"
    button2.innerHTML="go to weapon"
    button3.innerHTML="fight dragon"
    text.innerHTML="You are back to town"
    button1.onclick=gostore;
    button2.onclick=gocave;
    button3.onclick=fightdragon;
}*/
//above functions perform similar task so we create one fun which updates based on object passed
function update(location){
    button1.innerHTML=location["button text"][0]
    button2.innerHTML=location["button text"][1]
    button3.innerHTML=location["button text"][2]
    text.innerHTML=location.text
    button1.onclick=location["button function"][0]
    button2.onclick=location["button function"][1]
    button3.onclick=location["button function"][2]
}
function gostore(){
    update(locations[1])
}
function gotown(){
    update(locations[0])
}
function gocave(){
    update(locations[2])
}
function fightdragon(){
    console.log("going to fight dragon")
}
function buyhealth(){
    if(gold>=10){
        gold=gold-10
        health+=10
        goldtext.innerHTML=gold
        healthtext.innerHTML=health
    }
    else{
        text.innerHTML="Not enough gold to buy health."
    }
}
function buyweapon(){
    if(current_weapon<weapons.length -1){
        if(gold>=30){
            gold-=30
            current_weapon++
            let newweapon=weapons[current_weapon].name
            text.innerHTML="You now have a " + newweapon + "."
            inventory.push(newweapon)
            text.innerHTML+="In your inventory you have " + inventory //adding text second time
            goldtext.innerHTML=gold
        }
        else{
            text.innerHTML="You do not have enough gold to buy weapon"
        }
    }
    else{
        text.innerHTML="You already have the most powerful weapon"
        button2.innerHTML="Sell weapon for 15 gold"
        button2.onclick=sellweapon
    }
}
function fightslime(){
    fighting=0
    gofight()
}
function fightskeleton(){
    fighting=1
    gofight()
}
function fightdragon(){
    fighting=2
    gofight()
}
function sellweapon(){
    if(inventory.length>1){
        gold+=15
        goldtext.innerHTML=gold
        let current_weapon=inventory.shift()//shift first element of inventory
        text.innerHTML="You sold a " + current_weapon + "."
        text.innerHTML+="In your inventory you have " + inventory
    }
    else{
        text.innerHTML="You have only one weapon"
    }
}
function gofight(){
    update(locations[3])
    monsterhealth=monster[fighting].health
    monsterStats.style.display ="block"
    monsterNameText.innerHTML=monster[fighting].name
    monsterhealthtext.innerHTML=monsterhealth
}
function attack(){
    text.innerHTML="The " + monster[fighting].name + " attacks"
    text.innerHTML+="You attack it with your " + weapons[current_weapon].name + "."
    health-=monster[fighting].level
    monsterhealth-=weapons[current_weapon].power + Math.floor(Math.random() *xp)+1
    monsterhealthtext.innerHTML=monsterhealth
    if(health<=0){
        lose()
    }
    else if (monsterhealth<=0){
        defeatmonster()
    }
}
function dodge(){
    text.innerHTML="You dodged the attack"
}
function defeatmonster(){
    gold
}