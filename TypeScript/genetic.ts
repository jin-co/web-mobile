// genetic.ts

class storage<T> {
  private data: T[] = []

  addData(newData: T) {
    this.data.push(newData)
  }
}

const dataString = new storage<string>()
dataString.addData('ne')
dataString.addData('test')

const dataNumber = new storage<number>()
dataNumber.addData(1)
dataNumber.addData(2)