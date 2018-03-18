import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  content='';  //用于存放输入框中内容；
  @Output() getContent=new EventEmitter();//getIndex是需要传给父组件的值
  
  
  keyData(e){
    if(e.keyCode==13){     
      console.log(this.content); 
      this.getContent.emit(this.content); //抛出content给父类
      this.content=''; 
    }
  
  }

}
