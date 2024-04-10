import { Component, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CarteService } from '../../service/carte.service';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButton,
    HeaderComponent,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.scss' 
})
export class CarteComponent implements OnInit{

colorUnity = {
  backgroundColor: "#00ff00",
  fill: "#00ff00"
}
ColorConstante = "#ff00ff"
  userInfo: any;
  user: any ;
  id: any;
  id1: any;
QRInfo : any;
userCard : any;
  listCarte: any;
constructor (private carteservice : CarteService){}

  ngOnInit() {
  this.user = localStorage.getItem('userinfo');
  this.userInfo = JSON.parse(this.user);
  console.log(this.userInfo);
  this.id = localStorage.getItem('carteId');
  this.id1 = JSON.parse(this.id);
  console.log(this.id1);

  this.InfoCarte();

  }

 async InfoCarte(){
   await this.carteservice.getCardById(this.id1,this.userInfo.authorization.access_token).then((res)=> {
      this.QRInfo=res.data.data;
      console.log(this.QRInfo);
    })
  
  }

  cardList(){
    this.carteservice.getlisteCarte(this.userInfo.authorization.access_token).then((res)=>{
      this.listCarte = res.data.data;
      console.log(this.listCarte);    
    }).catch((error)=>{
      console.log(error);
    })
  }

  }



