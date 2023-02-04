function addNumbers(num1:number, num2:number) {
  console.log(num1 + num2)
  const result = num1 + num2  
  return result
}

document.body.innerHTML = addNumbers(1, 2).toString()