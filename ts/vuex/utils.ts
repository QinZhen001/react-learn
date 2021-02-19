
type Values<Modules> = {
  [k in keyof Modules]:Modules[k]
}[keyof Modules]


type GetMutations<Module>  = Module extends  {mutations: infer M} ? M : never


type Obj = {
  a: 'foo',
  b: {
    ccc:"ccc"
  },
  mutations:{
    ddd:"ddd"
  }
}

// type K = keyof Obj



type T = Values<Obj>
type Q = GetMutations<Obj>