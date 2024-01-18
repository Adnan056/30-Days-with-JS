const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
  
// for (let i=0;i<=10;i++){console.log(countries[i])}
// for (let i=10;i>=0;i--){console.log(countries[i])}
// let i=0;
// while (i<=10){
//     console.log(countries[i])
//     i++;
// }
// i=10;
// while (i>=0){
//     console.log(countries[i])
//     i--;
// }

// do {
//     console.log(countries[i])
//     i++;
//   }
// while (i<=10);

// do {
//     console.log(countries[i])
//     i--;
//   }
// while (i>=0);

// let n=Number(prompt("Enter the number: "))
// for (let i=0;i<=n;i++){console.log(countries[i])}

// console.log("    #\n    ##\n    ###\n    ####\n    #####\n    ######\n    #######");

// for(let i=0;i<=10;i++){
//     console.log(`${i}`+" x "+`${i}`+" = "+`${i*i}`)
// }

// for(let i=0;i<=10;i++){
//     console.log(`${i}`+"    "+`${Math.pow(i,2)}`+"     "+`${Math.pow(i,3)}`)
// }

// for(let i=0;i<=100;i++){if(i%2==0){console.log(i)}}

// for(let i=0;i<=100;i++){if(i%2!=0){console.log(i)}}

// for(let i=0;i<=100;i++){
//     let isprime=true;
//     if(i==0 || i==1){continue;}
//     for (let j=2;j<=Math.sqrt(i);j++){
//         if(i%j===0){
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime){
//         console.log(i);
//     }
// }

// let sum = 0
// for(let i=0;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

// let even=0;let odd=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         even+=i
//     }
//     else{
//         odd+=i
//     }
// }
// console.log("The sum of all evens from 0 to 100 is "+even+". And the sum of all odds from 0 to 100 is "+odd+".")

// let even=0;let odd=0;
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         even+=i
//     }
//     else{
//         odd+=i
//     }
// }
// let arr=[even,odd]
// console.log(arr)

// let arr=[]
// for(let i=0;i<5;i++){arr.push(i)}
// arr=arr.map(ele => {return Number(Math.floor(Math.random()*11))})
// console.log(arr)

// let arr=[]
// for(let i=0;i<5;i++){arr.push(i)}
// arr=arr.map(ele => {return Number(Math.floor(Math.random()*11))})
// for(i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){arr[i]=Number(Math.floor(Math.random()*11));j=0}
//     }
// }
// console.log(arr)

// let variable="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let length=6;
// let id='';
// for(let i=0;i<length;i++){
//     let ranv=Math.floor(Math.random()*variable.length)
//     id+=variable.substring(ranv,ranv+1)
// }
// console.log(id)

// let variable="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
// let length=Math.floor(Math.random()*10);
// let id='';
// for(let i=0;i<length;i++){
//     let ranv=Math.floor(Math.random()*variable.length)
//     id+=variable.substring(ranv,ranv+1)
// }
// console.log(id)

// let randomno=Math.floor(Math.random()*16777215)
// let hex=randomno.toString(16).padStart(6,'0')
// console.log(hex)

// let r=Math.floor(Math.random()*256)
// let g=Math.floor(Math.random()*256)
// let b=Math.floor(Math.random()*256)
// console.log(`rgb(${r},${g},${b})`)

// let tem=[]
// tem=countries.map(ele => {return ele.toUpperCase()} )
// console.log(tem)

// let tem=[]
// tem=countries.map(ele => {return ele.length} )
// console.log(tem)

// let res=[]
// for (let i=0;i<countries.length;i++){
//     let temp=[]
//     temp.push(countries[i],(countries[i].substring(0,3)).toUpperCase(),countries[i].length)
//     res.push(temp)
// }
// console.log(res)

// let temp=[]
// for (let i=0;i<countries.length;i++){
//     if(countries[i].includes('land')==true){
//         temp.push(countries[i])
//     }
// }
// console.log(temp)

// let temp=[]
// for (let i=0;i<countries.length;i++){
//     if(countries[i].endsWith('ia')==true){
//         temp.push(countries[i])
//     }
// }
// console.log(temp)

// let num=[]
// num=countries.map(ele => {return ele.length})
// let high=Math.max(...num)
// console.log(countries[num.indexOf(high)])

// let five=[]
// for (let i of countries){if(i.length==5){five.push(i)}}
// console.log(five)

const WebTech=[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// let temp=WebTech.reduce((maxname,currentname) => {
//     return currentname.length > maxname.length ? currentname : maxname;},'');
// console.log(temp)

// let res=[]
// for(let i of WebTech){let temp=[];temp.push(i,i.length);res.push(temp)}
// console.log(res)


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// let temp=[]
// for(i of mernStack){temp.push(i.substring(0,1))}
// console.log(temp.join(',').replace(/,/gi,''))

// for(i of ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]){console.log(i)}

// let rev=[];
// for (i of ['banana', 'orange', 'mango', 'lemon']){rev.unshift(i)}
// console.log(rev)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// let temp = []
// temp.push(fullStack.join(','));temp=(temp.toString()).split(',')
// for(i of temp){console.log(i)}