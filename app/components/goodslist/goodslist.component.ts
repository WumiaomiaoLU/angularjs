import { Component, OnInit, Input } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';
import {Router} from '@angular/router';
import {Http,Headers,Jsonp} from '@angular/http';

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:Router,public http:Http,public jsonp:Jsonp) {}
  list:number[]=[1,2,3,4];
  //@Input() list:Array<any>;
  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/get').subscribe(data=>{
    //   console.log(JSON.parse(data['_body']));
    //   this.list=JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });

    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?classID=1&callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list=data['_body'];
    },err=>{
      console.log(err);
    });
  }
  
  goDetail(idx){
    this.router.navigate(['/goodslist/gooddetail',idx]);
  }
}
