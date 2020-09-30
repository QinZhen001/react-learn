// import {Reducer} from 

// state
interface IProductCategory {
 aaa:number
}

export interface IProduct {
  id:string,
  name:string,
  category:IProductCategory,
}

export interface MyState {
  readonly products: IProduct | null 
}

// action 
export interface IAddAction {
  type:'add'
}

export interface IRemoveAction {
  type:"remove",
  payload:{}
  id:number
}

export type MyAction = IAddAction | IRemoveAction



// reducer
// export const MyReducer:Reducer<<MyState, MyAction> = {

// }

