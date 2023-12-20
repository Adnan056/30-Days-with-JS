// let firstname="Adnan",lastname="Sohail",age=21,isMarried=false,year=14/12/2023;
// console.log(typeof(firstname),typeof(lastname),typeof(age),typeof(isMarried),typeof(year))
// console.log((typeof('10')==typeof(10)))
// console.log(parseInt(9.8)==10)
// console.log((typeof("Hello")=='string'),(typeof(10)=='number'),(typeof(true)=='boolean'))
// console.log((typeof("Hello")== String),(typeof(10)==Number),(typeof(true)==Boolean))
// console.log(4 > 3,4 >= 3,4 < 3,4 <= 3,4 == 4,4 === 4,4 != 4,4 !== 4,4 != '4',4 == '4',4 === '4')
// console.log("Python".length===String("Jargon".length))
// console.log(4 > 3 && 10 < 12,4 > 3 && 10 > 12,4 > 3 || 10 < 12,4 > 3 || 10 > 12,!(4 > 3),!(4 < 3),!(false),!(4 > 3 && 10 < 12),!(4 > 3 && 10 > 12),!(4 === '4'))
// console.log("dragon".includes('on') && "Python".includes('on'))
// const time= new Date()
// console.log(time.getFullYear())
// console.log(time.getMonth())
// console.log(time.getDate())
// console.log(time.getDay())
// console.log(time.getHours())
// console.log(time.getMinutes())
// console.log(time.getSeconds())
// const x=new Date("1970-01-01");
// console.log(Math.abs(x.getTime()-time.getTime())/1000);

//Exercise - 2

// let base=prompt("Enter Base here")
// let height=prompt("Enter height here")
// console.log("Area of the triangle is: "+((base*height)/2))

// let a=Number(prompt("Enter the side a"));
// let b=Number(prompt("Enter the side b"));
// let c=Number(prompt("Enter the side c"));
// perimeter=a+b+c;
// console.log("The perimeter of the triangle is: "+perimeter)

// let length=Number(prompt("Enter the length"));
// let width=Number(prompt("Enter the width"));
// perimeter_R=2*(length+width);
// area_R=length*width;
// console.log("The Area of the Rectangle is: "+area_R);
// console.log("The Perimeter of the Rectangle is: "+perimeter_R);

// radius=Number(prompt("Enter the Circle's Radius here"));
// pi=3.14;
// area_c=pi*Math.pow(radius,2);
// circumference=2*pi*radius;
// console.log("The area of the Circle is: "+area_c+"\nThe circumference of the Circle is: "+circumference)

// let eq=(("y = 2x -2").replace(/ /g,'')).split('')
// let slope1=null
// for (i in eq) {
//     if(eq[i]=='x'){
//         slope1=eq[i-1]
//     }
// }
// console.log("The slope is: "+slope1)

// let x1=2,x2=6,y1=2,y2=10;
// let slope2=Math.floor((y2-y1)/(x2-x1))
// console.log("The slope is: "+Math.floor((y2-y1)/(x2-x1)))

// if(slope1==slope2){
//     console.log("Both slopes are equal :)")
// }

// let hour=Number(prompt("Enter your hours you have worked:"))
// let rate=Number(prompt("Enter your rate per hour of your job:"))
// const salary=hour*rate;
// console.log(salary)

// let name1=(prompt("Enter your name:"))
// if(name1.length>7){
//     console.log("Your name is long")
// }
// else{
//     console.log("Your name is short")
// }

// let firstname="AdnanSohail"
// let lastname="Shaik"

// if(firstname.length>lastname.length){
//     var len="longer"
// }
// else{
//     var len="shorter"
// }

// console.log("Your first name, "+firstname+" is "+len+" than your family name, "+lastname)

// let myAge=22
// let yourAge=18

// if(myAge>yourAge){
//     var diff=myAge-yourAge
//     var old="older"
// }
// else{
//     var diff=yourAge-myAge
//     var old="younger"
// }

// console.log("I am "+diff+" years "+old+" than you.")

// const year=new Date()
// var Now1=year.getFullYear();
// var dob=Number(prompt("Enter your Date Of Birth:"))
// if ((Now1-dob)>=18){
//     console.log("You are "+(Now1-dob)+". You are old enough to drive")
// }
// else{
//     console.log("You are "+(Now1-dob)+". You will be allowed to drive after "+(18-(Now1-dob))+" years.")    
// }

// var exp=Number(prompt("Enter the number of years you are expected to live:"))
// var secs=exp*(365*24*60*60)
// console.log(secs)

// const now = new Date()
// const year = now.getFullYear()
// const month = now.getMonth()
// const date = now.getDate()
// const hours = now.getHours()
// const minutes = now.getMinutes()
// console.log(`${year}-${month}-${date} ${hours}:${minutes}`)
// console.log(`${date}-${month}-${year} ${hours}:${minutes}`)
// console.log(`${year}/${month}/${date} ${hours}:${minutes}`)

