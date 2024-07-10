
let button = document.querySelector("button");
let total = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


function hexCreation(){
let hexCode ='';
for(let i=0; i<6; i++){
    let hexData = Math.floor(Math.random()*total.length);
    hexCode += total[hexData];   
}
console.log(hexCode)
return hexCode
}

//hexConsumption
button.addEventListener("click", ()=>{ 
    let holdHex = hexCreation()
    document.querySelector("body").style.background = `#${holdHex}`;
})

