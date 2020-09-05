// -------------    基本类型  -------------------------------------------

export let isDone: boolean = false
let age: number = 20
let binaryNumber: number = 0b1111

let firstName: string = 'viking'
let message: string = `Hello, ${firstName}, age is ${age}`


let u: undefined = undefined
let n: null = null

let num: number | undefined = undefined

let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

// notSure.myName
notSure.getName()


let numberOrString: number | string = 234
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.push(5)


function test() {
  console.log(arguments)
}

let user: [string, number] = ['viking', 1]


function test111() {
  let list: number[] = [1, 2, 34]
  let list2: Array<number> = [1, 2, 34, 45, 5]
}



// ---------------   Tuple ---------------------------

let x: [string, number]
x = ['hello', 10]
// x  = [10,'asdasdd'] 


console.log(x[0].substr(1))




// -------------------  Enum ------------------------------------
enum Color { Red, Green, Blue }
let c: Color = Color.Red

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
// enum Color {Red = 1,Green,Blue}
// let cx:Color = Color.Green



// -------------------------- unknwon ------------------------------
declare const maybe: unknown
function unknwon() {

  const aNUmber: number = maybe
  if(maybe === true){

  }

  if(typeof maybe === "string"){

  }
}



// ---------------------  any ------------------------------------------





// ------------------------- interface ------------------------
interface Example {
  diff(one:string,two?:string,three?:boolean):number
}

function fn(x:(a:string,b:string,c:number)=>void){}

var xxx:Example

fn(xxx.diff)

interface Moment {
  utcOffset():number
  utcOffset(b:number):Moment
  utcOffset(b: string): Moment;
}


interface SquareConfig {
  color?: string;
  width?: number;
  [propName:string]:any
}

function createSquare(config: SquareConfig): void {
  // ...
}


let mySquare = createSquare({ colour: "red", width: 100 });
// let mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);


interface SearchFunc {
  (source:string,subString:string):boolean
}

let mySearch:SearchFunc 
mySearch  = function(source: string, subString: string){
  let result = source.search(subString);
  return result > -1;
}
mySearch("asdasd","asdasd")



class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}


interface ClockInterface {
  currentTime:Date; 
}

class Clock  implements ClockInterface {
  currentTime:Date = new Date()
  constructor(h:number,m:number){}
}