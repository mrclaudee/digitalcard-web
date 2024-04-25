import { Component } from '@angular/core';
import {
  MatDialogClose,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CarteService } from '../../service/carte.service';
@Component({
  selector: 'app-qrcode-profil',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule],
  templateUrl: './qrcode-profil.component.html',
  styleUrl: './qrcode-profil.component.scss'
})
export class QRcodeProfilComponent {
  userInfo: any;
  user: any;
  id: any;
  id1: any;
  QRInfo: any;
  imageUrl: any;

  constructor (private carteservice : CarteService){}

  ngOnInit() {
  this.user = localStorage.getItem('userinfo');
  this.userInfo = JSON.parse(this.user);
  console.log(this.userInfo);
  this.id = localStorage.getItem('profil');
  this.id1 = JSON.parse(this.id);
  console.log(this.id1);

  this.InfoCarte();

  }

 async InfoCarte(){
   await this.carteservice.getCard(this.id1).then((res)=> {
      this.QRInfo=res.data.data;
      this.imageUrl = this.QRInfo.qr_profil

      console.log("URL QR Profil - " + this.imageUrl);
    })
  
  }


}
