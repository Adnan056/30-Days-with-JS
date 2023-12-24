// Exercise - 1

// age=Number(prompt("Enter your age:"))
// if(age>=18){
//     console.log("You are old enough to drive.")
// }
// else{
//     console.log("You are left with "+(18-age)+" years to drive.")
// }

// myAge=Number(prompt("Enter age 1"))
// yourAge=Number(prompt("Enter age 2:"))
// if(myAge>yourAge){console.log("You are "+(myAge-yourAge)+" years younger than me.")}
// else{console.log("You are "+(yourAge-myAge)+" years older than me.")}

// let a=10
// let b=20

// if(a>b){console.log("a is greater than b")}
// else{console.log("b is greater than a")}

// (a>b)
//     ? console.log("a is greater than b")
//     : console.log("b is greater than a")

// let num=Number(prompt("Enter the number:"))
// if(num%2==0){console.log(num+" is an even number")}
// else(console.log(num+" is an odd number"))

// let marks=Number(prompt("Enter the marks:"))
// switch(true){
//     case marks>=90 && marks<=100:
//         console.log("Grade A")
//         break
//     case marks>=70 && marks<=89:
//         console.log("Grade B")
//         break
//     case marks>=60 && marks<=69:
//         console.log("Grade C")
//         break;
//     case marks>=50 && marks<=59:
//         console.log("Grade D")
//         break
//     case marks>=0 && marks<=49:
//         console.log("Grade F")
//         break
//     default:
//         console.log("Something went wrong! Please check your number is in limit of 0-100")
// }

// var month=(prompt("Enter the month:")).toLowerCase();
// let autumn=['september','october','november']
// let winter=['december','january','february'] 
// let spring=['march','april','may']
// let summer=['june','july','august']
// switch(true){
//     case autumn.includes(month)==true:
//         console.log("You are in Autumn")
//         break
//     case winter.includes(month)==true:
//         console.log("You are in Winter")
//         break
//     case spring.includes(month)==true:
//         console.log("You are in Spring")
//         break
//     case summer.includes(month)==true:
//         console.log("You are in Summer")
//         break        
//     default:
//         console.log("Something went wrong!, Please check your input to be full name of the month")
// }

// let weekday=['monday','tuesday','wednesday','thursday','friday']
// let weekend=['saturday','sunday']
// let today=(prompt("Enter the day today:").toLowerCase())
// switch(true){
//     case weekend.includes(today)==true:
//         console.log(`${today}`+" is a weekend.")
//         break
//     case weekday.includes(today)==true:
//         console.log(`${today}`+" is a working day.")
//         break
//     default:
//         console.log("Something went wrong!")
// }

// let days31=['january','march','may','july','august','october','december']
// let days30=['april','june',,'september','november']
// let days28=['february']
// let month=prompt("Enter your month:").toLowerCase()
// if (days31.includes(month)==true){
//     console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 31 days")
// }
// else if (days30.includes(month)==true){
//     console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 30 days")
// }
// else if (days28.includes(month)==true){
//     console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 28 days")
// }

let days31=['january','march','may','july','august','october','december']
let days30=['april','june',,'september','november']
let days28=['february']
let month=prompt("Enter your month:").toLowerCase()
let year=Number(prompt("Enter your year:").toLowerCase())
if (days31.includes(month)==true){
    console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 31 days")
}
else if (days30.includes(month)==true){
    console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 30 days")
}
else if (days28.includes(month)==true){
    if (year%4==0)
    console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 29 days");
    else
    console.log(month.charAt(0).toUpperCase()+month.slice(1)+" has 28 days");
}