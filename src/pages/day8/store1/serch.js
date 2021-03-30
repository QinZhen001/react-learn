import { observable, action } from "mobx";
import React from 'react'

class SearchStore {
  @observable searchText;

  @action
  setSearchText = (searchText) => {
    this.searchText = searchText;
  };
}


export const storesContext =  React.createContext(new SearchStore())

// 自定义hook
export const useStores = () => React.useContext(storesContext)

export default SearchStore