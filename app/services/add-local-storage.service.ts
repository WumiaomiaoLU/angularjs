import { Injectable } from '@angular/core';

@Injectable()
export class AddLocalStorageService {

  constructor() {}
  
   
  addLocalStorage(todolist){
    localStorage.clear();
    localStorage.setItem('待办事项',todolist);
    //localStorage.setItem('1','2');     
  }

}
