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
QRInfo : any;
constructor (private carteservice : CarteService){}

  ngOnInit() {
  this.user = localStorage.getItem('userInfo');
  this.userInfo = JSON.parse(this.user);
this.id = localStorage.getItem("carteId");
this.InfoCarte();

  }

  InfoCarte(){
    this.carteservice.getCardById(this.id,this.userInfo.authorization.access_token).then((res)=> {
   this.QRInfo=res.data.data
    })
    }
  }



