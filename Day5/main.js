// let arr=[]
// let five=['a','b','c','d','e']
// console.log(five.length)
// console.log(five[0],five[Math.floor((five.length)/2)],five[five.length-1])
// let MixedDataTypes=['a',1,"one",true,undefined,{name:"Adnan",age:22}]
// console.log(MixedDataTypes.length)
let itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
// console.log(itCompanies.length)
// console.log(itCompanies[0],itCompanies[Math.floor((itCompanies.length)/2)],itCompanies[itCompanies.length-1])
// for (var i in itCompanies){console.log(itCompanies[i])}
// for (var i in itCompanies){console.log(itCompanies[i].toUpperCase())}
// console.log(`${itCompanies[0]}`+', '+`${itCompanies[1]}`+', '+`${itCompanies[2]}`+', '+ `${itCompanies[3]}`+', '+ `${itCompanies[4]}`+', '+`${itCompanies[5]}`+" and "+`${itCompanies[6] }`+" are big IT companies.")

// let company=prompt("Enter the company to search:").toLowerCase();
// let temp=itCompanies.map(element => {return element.toLowerCase();});
// if ((temp).includes(company)==true){
//     console.log(`${company}`+" exists in the array")
// }
// else{
//     console.log(`${company}`+" is not found")
// }

// var b=[]
// for (i in itCompanies) {
//     itCompanies=itCompanies.map(element => {return element.toLowerCase()})
//     let a = itCompanies[i].split('')
//     var c=0;
//     for (j in a){
//         if(a[j]=='o'){c=c+1;if(c>1){b.push(i);break}}
//     }
// }
// for(var i=b.length-1;i>=0;i--){itCompanies.splice(b[i],1)}
// console.log(itCompanies)
itCompanies.sort()
// console.log(itCompanies)
// // console.log(itCompanies.reverse())
// console.log(itCompanies.slice(3))
// console.log(itCompanies.slice(0,4))

// if((itCompanies.length%2)==0){
//     let e=(itCompanies.length)/2;
//     let r=itCompanies.slice(0,e-1);r=r.concat(itCompanies.slice(e+5))
//     console.log(r)
// }
// else {
//     let e=Math.floor((itCompanies.length)/2);
//     let r=itCompanies.slice(0,e)
//     r=r.concat(itCompanies.slice(e+1))
//     console.log(r)
// }

// console.log(itCompanies)
// console.log(itCompanies.slice(1))
// if((itCompanies.length%2)==0){
//     let e=(itCompanies.length)/2;
//     let r=itCompanies.slice(0,e-1);r=r.concat(itCompanies.slice(e+5))
//     console.log(r)
// }
// else {
//     let e=Math.floor((itCompanies.length)/2);
//     let r=itCompanies.slice(0,e)
//     r=r.concat(itCompanies.slice(e+1))
//     console.log(r)
// }
// console.log(itCompanies.slice(0,-1))

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// words=text.replace(/[,.]/gi,'')
// words=text.split(' ')
// console.log(words)
// console.log(words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// let mycart=shoppingCart
// mycart.unshift('Meat')
// mycart.push('Sugar')
// mycart.splice(4,1)
// mycart[mycart.indexOf('Tea')]="Green Tea"
// console.log(mycart)

// let x=countries;
// if (x.includes("Ethiopia")==true){
//     console.log("ETHIOPIA")
// }
// else {
//     x.push("Ethiopia")
//     x.sort()
// }

// let y=webTechs;
// if(y.includes("Sass")==true){
//     console.log("Sass is a CSS preprocess")
// }
// else{
//     y.push("Sass")
//     y.sort()
//     console.log(y)
// }

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack=frontEnd.concat(backEnd)
// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// ages.sort()
// console.log(ages)
// console.log("The Minimum Age is "+`${Math.min(...ages)}`)
// console.log("The Maximum Age is "+`${Math.max(...ages)}`)
// if(ages.length%2==0){
//     console.log("The median is "+((ages[ages.length/2]+ages[(ages.length/2)+1])/2))
// }
// else{
//     console.log("The median is "+(ages[ages.length/2]/2))
// }
// let sum=0
// ages.forEach(ele => {sum=sum+ele})
// console.log("The average age is "+(sum/ages.length))
// console.log("The range is "+((Math.max(...ages))-(Math.min(...ages))))
// console.log("The difference b/w min and average is "+(Math.abs((Math.min(...ages))-(sum/ages.length))))
// console.log("The difference b/w max and average is "+(Math.abs((Math.max(...ages))-(sum/ages.length))))

// let x= countries
// console.log(x.slice(10))
// if(x.length%2==0){
//     console.log("The middle countries are "+x[Math.ceil(x.length/2)]+" "+x[Math.ceil(x.length/2)+1])
// }
// else{
//     console.log("The middle country is "+(x[Math.ceil(x.length/2)]))
// }

let first=[]
let second=[]
let mid=Math.ceil(countries.length/2)
for (let i=0;i<countries.length;i++){
    if(i<mid){
        first.push(countries[i])
    }
    else{
        second.push(countries[i])
    }
}
console.log(first)
console.log(second)