function add(x: number, y: number, z: number = 10): number {
  if (typeof z === "number") {
    return x + y + z
  } else {
    return x + y
  }
}



const add1 = function (x: number, y: number, z: number): number {
  if (typeof z === "number") {
    return x + y + z
  } else {
    return x + y
  }
}



const add2: (x: number, y: number, z?: number) => number = add