// 联合类型与交叉类型很有关联，但是使用上却完全不同。 
// 偶尔你会遇到这种情况，一个代码库希望传入number或string类型的参数。 例如下面的函数：

function padLeft(value: string, padding: number | string ) {
  if (typeof padding === "number") {
      return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", true); // returns "    Hello world"


// ------------------------------


interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}



