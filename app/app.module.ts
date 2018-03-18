import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';
import { BannerComponent } from './components/banner/banner.component';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { GetDataService } from './services/get-data.service';//服务要手动引入


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    BannerComponent,
    InputComponent,
    ListComponent,  
    // 自动声明了
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [GetDataService],//声明服务
  bootstrap: [AppComponent]
})
export class AppModule { }
