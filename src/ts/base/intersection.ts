// interface First {
//   test:string
// }

// interface Second{
//   test:string
// }

// interface First implements object{
//   test:string
// }

// TODO:First Second
function extend<First, Second>(first: First, second: Second): First & Second {
  const result: Partial<First & Second> = {}
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (result as First)[prop] = first[prop]
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (result as Second)[prop] = second[prop];
    }
  }
  return result as First & Second;

}



class Person {
  constructor(public name:string){}
}

interface Loggable {
  log(name: string): void;
}

class ConsoleLogger implements Loggable {
  log(name:string) {
      console.log(`Hello, I'm ${name}.`);
  }
}


const jim = extend(
  new Person("jim"),
  ConsoleLogger.prototype
)

jim.log(jim.name);



// --------------------------------


interface Fish{
  swim():any
}


interface Bird{
  fly():any
}


function isFish(pet:Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}









