import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  @Input() tolist;
  @Input() doing;
  comlist=[]; 
  done=0;  
   
  change(idx){    
    this.comlist.push(this.tolist[idx]);
    this.done=this.comlist.length;
    //console.log(this.comlist);
    this.tolist.splice(idx,1);
    this.doing=this.tolist.length;
  }

  delData(idx){
   this.tolist.splice(idx,1);
   this.doing=this.tolist.length;
  }
  
  change2(i){
     this.tolist.push(this.comlist[i]);
     this.comlist.splice(i,1);
     this.done=this.comlist.length;
     this.doing=this.tolist.length;
  }

  delData2(i){
    this.comlist.splice(i,1);
    this.done=this.comlist.length;
  }
}
