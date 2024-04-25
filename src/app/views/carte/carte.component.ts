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
import { ActivatedRoute } from '@angular/router';

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
  id1: any;
QRInfo : any;
userCard : any;
  listCarte: any;
constructor (private carteservice : CarteService, private route: ActivatedRoute){
  this.route.params.subscribe(params => {
    this.id1 = params['id'];
  })
}

  async ngOnInit() {
  console.log("Id carte " + this.id1);

  await this.InfoCarte();

  }

 async InfoCarte(){
   await this.carteservice.getCard(this.id1).then((res)=> {
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



