
let arr=[10,30,20,40,2]
    //   0  1  2  3  4

console.log(arr)

// for(let i=0;i<=4;i++)
// {
//     console.log(arr[i])
// }

for(const value of arr)
{
    console.log(value)
}
arr.forEach(value=>console.log(value))

console.log(arr.concat([100,200]))

let arr1=[10,30,20,40,2]
      //   0  1  2  3  4

console.log(arr1.slice(1,4))

console.log(arr1)
arr1.splice(1,0,100,400,500)
console.log(arr1)



let arr2=[10,30,20,40,2]

const arr3=arr2.map((value)=>value+2)

console.log(arr3)


const arr4=arr1.filter(value=>value>=30)

console.log(arr4)

let str=["Cpp","PYTHON","java","C#","javascript"]

const output=str.filter(i=>i===i.toLowerCase())
console.log(output)


const studentMarks=[70,90,97,50,89,40]

      const filtervalue=  studentMarks.filter(i=>i<=50)

      console.log(filtervalue)

     const mapvalue= filtervalue.map(i=>i+20)

     console.log(mapvalue)

    const output1= studentMarks.filter(i=>i<=50).map(i=>i+20)

    console.log(output1)