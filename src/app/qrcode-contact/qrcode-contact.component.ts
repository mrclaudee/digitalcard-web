import { Component } from '@angular/core';
import { CarteService } from '../service/carte.service';
import { MatDialogClose, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-qrcode-contact',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogTitle,
    MatButtonModule],
  templateUrl: './qrcode-contact.component.html',
  styleUrl: './qrcode-contact.component.scss'
})
export class QRcodeContactComponent {
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
   await this.carteservice.getCardById(this.id1,this.userInfo.authorization.access_token).then((res)=> {
      this.QRInfo=res.data.data;
      this.imageUrl = this.QRInfo.qr_contact

      console.log("URL QR Contact - " + this.imageUrl);
    })
  
  }
}
  