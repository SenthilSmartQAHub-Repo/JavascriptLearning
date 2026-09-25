
// for loop - Loops through a block of code a specific number of times.
// while loop - Loops through a block of code as long as the condition is true.
// do...while loop - Executes the block at least once before checking the condition.
// for...in loop - Loops through the properties of an object.
// for...of loop - Loops through the values of an iterable object like an array.

//Traditional for loop

for(let i=1;i<=10;i++)
{
    console.log(i)
}
  console.log("*******************************")

  for(let i=10;i>=1;i--)
  {
    console.log(i)
  }

  //while loop 

  let i=1;
  while(i<=10)
  {
     console.log(i)
     i++;
  }
// do...while
  console.log("-------------------------------------")

 let j=1;
do{
     console.log(j)
     j++;
}while(j<=0)
