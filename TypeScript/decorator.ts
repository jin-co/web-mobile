function DecoTest(type:number) {
  return (output: Function) => {
    output.prototype.value = type
  }
}

@DecoTest(1)
class ClassOne {
  type: string = 'number'
  value: number
}

@DecoTest(2)
class ClassTwo {
  type: string = 'number'
  value: number
}

console.log(new ClassOne().value)
console.log(new ClassTwo().value)