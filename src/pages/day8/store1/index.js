import {observable} from "mobx";

class Leo {
    @observable arr = [1];
    @observable obj = {};
    @observable map = new Map();
    @observable str = 'leo';
    @observable num = 100;
    @observable bool = false;
}

export const leo = new Leo()




