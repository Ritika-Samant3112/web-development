

// let a=10;
// let b=20;
//console.log("sum of a and b is " ,a+b)
//console.log(" multiplication of a and is" ,a*b)
//console.log("dividion of a and b is",a/b)
//console.log(" remainder of a and b is",a%b)
//relational operator
// let a=51;
// let b=20;
// let c="51";
// console.log(a>b)
// console.log(a<b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a===c)
//assignment operator

// let d=50;
// console.log(d**3)
//logical operator
// let a=7
// let b=2
// let c=3
// a>b?console.log(a):console.log(b);

// bitwise operator
// var a=20
// var b=25
// console.log(a&b);
// console.log(a|b);
// console.log(a^b);
// console.log(a<<2);
// console.log(a>>2);
var img=document.getElementById("img");

let temperature=prompt("Enter the temperature: ");
if (temperature<20)  {
    // console.log("even")
    document.write("its cold today")
    img.src="./coldweather.jpg"

}
else if (temperature>=20 && temperature<35){
    // console.log("odd")
    document.write("it's good weather today")
    img.src="./normal weather.jpeg"

}
else{
    document.write("its hot today")
    img.src="./hot weather.jpg"
}

