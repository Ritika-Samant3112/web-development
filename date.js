
// console.log(now)
// console.log(now.getHours(),":",now.getMinutes(),":",now.getSeconds())
// console.log(now.getDate(),"/",now.getMonth()+1,"/",now.getFullYear(),"/",now.getDay())

// console.log(x.getDay())
// console.log(x.getMonth())


let now=new Date();
let x=new Date("2004/02/12")
let t=now-x
// console.log(t/1000/60/60/24/365)
minutes=t/1000/60
hours=minutes/60
days=hours/24
leftHours=hours%24
console.log(`you are ${Number.parseInt(days)} days old and ${Number.parseInt(leftHours)}  hours and ${Number.parseInt(minutes)} minutes`)