import { func } from "prop-types"

// 可索引类型 Interface
interface StringSet {
  readonly [index: number]: string
  length: number
}


let arr1: StringSet = ["hello", "hello1"]
// only permits reading (只读属性 无法修改)
// arr1[1] = '123'


// 数组应为 string 类型
// let arr2: StringSet = [1, 2, 3, 4]




// --------------------------------------
// 类 Interface


interface PersonConstructor {
  // 这个是用来检查 constructor 的
  new(name: string, age: number)
  // 静态属性
  typename: string
  // 静态方法 
  logname(): void
}

// PersonInterface 则是用来检查实例部分的
interface PersonInterface {
  log(): void // : 这里定义了实例方法 log
}


const Person: PersonConstructor = class Person implements PersonInterface {

  static typename = "Person type"
  static logname() {
    console.log("static logname", this.typename)
  }

  // constructor 也是静态方法
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  log() {
    console.log(this.name, this.age)
  }
}




interface PersonInfoInterface {
  name: string
  age: number
  log?(): void
}


interface Student extends PersonInfoInterface {
  doHomework(): boolean
}


interface Teacher extends PersonInfoInterface {
  dispatchHomework(): void
}



let Alice: Teacher = {
  name: "Alice",
  age: 34,
  dispatchHomework() {
    console.log("dispatchHomework")
  }
}


let oliver: Student = {
  name: "oliver",
  age: 12,
  log() {
    console.log(this.name, this.age)
  },
  doHomework() {
    // ... 
    return true
  }
}



// 混合类型的 Interface
interface Counter {
  (start: number): void
  add(): void
  log(): number
}

function getCounter(): Counter {
  let count = 0
  function counter(start: number) {
    count = start
  }
  counter.add = function () {
    count++
  }
  counter.log = function () {
    return count
  }
  return counter
}


// function concat<T, U>(arr: T[], arr2: U[]): Array<T | U>


// function extend<T, U>(first: T, second: U): T & U {
//   let result = {} as T & U
//   for (let id in first){
//     (result as any)[id] = (first as any)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//         (result as any)[id] = (<any>second)[id];
//     }
// }
// return result;
// }