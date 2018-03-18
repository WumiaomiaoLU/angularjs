import { Component, OnInit, Input, Optional } from '@angular/core';
import { GetDataService } from '../../services/get-data.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(@Optional() public getdata:GetDataService) { 

  }
  @Input() list:Array<any>;
  ngOnInit() {//用来初始化数据
    console.log(1);
    
    this.getdata.addData(10);
    this.getdata.addData(90);
    console.log(this.getdata.list);
  }
}
