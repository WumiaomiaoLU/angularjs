import { Component } from '@angular/core'; //引入模块
import { GetDataService } from './services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //暴露
  

  // 插值表达式
  title = 'hello world';
  imgUrl = 'assets/imgs/m1.png';
  // 绑定属性
  id = 'box';
  // 循环
  arr = [1,2,3,4];

  fn(){
    console.log(123);
  }
  // ngSwitch
  fruit:"苹果";
  changeFruit(v){
    // console.log(v);
    this.fruit = v;
  }

  // 双向数据绑定
  txt = '新年快乐';

  // todolist 已练习
  
  tolist=[];
  content;
  // comlist=[];
  doing=0;
  // done=0;
  
  getCon(con){
     this.content=con;
     //console.log(888);
     this.tolist.push(con);
     this.doing=this.tolist.length;
     console.log(this.tolist);
  }

  // addData(){
  //     this.tolist.push(this.content);
  //     this.content='';
  //     this.doing=this.tolist.length;
  // }

  // keyData(e){
  //   if(e.keyCode==13){
  //     this.tolist.push(this.content);
  //     this.content='';
  //     this.doing=this.tolist.length;
  //   }
  
  // }

  // change(idx){
  //   this.comlist.push(this.tolist[idx]);
  //   this.done=this.comlist.length;
  //   console.log(this.comlist);
  //   this.tolist.splice(idx,1);
  //   this.doing=this.tolist.length;
  // }

  // delData(idx){
  //  this.tolist.splice(idx,1);
  //  this.doing=this.tolist.length;
  // }
  
  // change2(i){
  //    this.tolist.push(this.comlist[i]);
  //    this.comlist.splice(i,1);
  //    this.done=this.comlist.length;
  //    this.doing=this.tolist.length;
  // }

  // delData2(i){
  //   this.comlist.splice(i,1);
  //   this.done=this.comlist.length;
  // }





  // 组件交互
  arr1 = [1,2,3,4];
  goodslist = ['a','b','c','d','e','f'];

  agreed = 0;
  disagreed = 0;
  voters = ['张三', '李四', '王五'];
 
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  idx:number=-1;
  getI(i){
      this.idx=i;
  }

  click(){
    this.arr=[8,8,8,8];//会触发ngDoChecked和ngOnChanges
    //this.arr[0]=8;  //只调用ngDoChecked
  }

  constructor(public get:GetDataService){}
  index:number;
  ngOnInit(){
    this.index=this.get.getIndex();
  }
}
