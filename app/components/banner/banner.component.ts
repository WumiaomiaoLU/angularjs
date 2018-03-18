import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';//组件中引用其他服务
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  //getdata=new GetDataServices(); 一般不这样用，一般写到consructor里面;
  constructor(public getdata:GetDataService) { }
  @Input() title; //表示输入才可显示
  @Input() arrData=[];
  @Output() getIndex=new EventEmitter();//getIndex是需要传给父组件的值
  
  ngOnChanges(){   
    console.log(0);
  }
  ngOnInit() {//用来初始化数据
    console.log(1);
    
    this.getdata.addData(800);
    this.getdata.addData(100);
    console.log(this.getdata.list);
  }

  num:number;
  ngDoCheck(){//检查数据
    console.log(2);
    //this.num=this.getdata.get(300);//使用服务中的get方法
    //console.log(this.num);   
  }

  fn(i){
     this.getIndex.emit(i);//抛出
  }

}
