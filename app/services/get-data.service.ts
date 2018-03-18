import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {

  constructor() { }

  list=[];    //变量
  index:number=9999;
  get(url: number){        
      return url+100;     
  }
  
  addData(num:number){
    this.list.push(num);
  }

  getIndex(){
    return this.index;
  }
}
