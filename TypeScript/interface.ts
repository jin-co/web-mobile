interface Person {
  name: string
  age: number
  married?: boolean
  walk?: () => void // method
}

let person1: Person = {
  name: 'tom',
  age: 2,
}
