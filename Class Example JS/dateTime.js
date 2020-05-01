function testDate() 
{
console.log("Testing")
var a= new Date();
console.log(a);

document.getElementById("Date").innerHTML=a
document.getElementById("Time").innerHTML=a
console.log(a.getHours())
console.log(a.getMinutes())
console.log(a.getSeconds())
document.getElementById("Time").innerHTML=a.getHours() +":"+a.getMinutes()+":"+a.getSeconds()

setIntervalDate(testDate,1000)

}

function clearTimer()
{
console.log("Here");
clearInterval()   
}