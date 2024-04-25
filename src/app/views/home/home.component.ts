import { Component } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NewVisitCardComponent } from '../../component/new-visit-card/new-visit-card.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { QRcodeProfilComponent } from '../../component/qrcode-profil/qrcode-profil.component';
import { CarteService } from '../../service/carte.service';
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { UpdateVisitCardComponent } from '../../component/update-visit-card/update-visit-card.component';
import { QRcodeContactComponent } from '../../qrcode-contact/qrcode-contact.component';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NewVisitCardComponent,
    HeaderComponent,
    FooterComponent,
    CommonModule,
    QRcodeProfilComponent
  ],
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  
  poste = `Créer une carte`;
  defpost = `Pas besoin de supprimer votre carte existante`;
  text1poste = `Profitez des espaces vide dans`;
  text2poste = `votre porte carte`;

  // Nombre de carte max
  availableCardsNumber = 4;
  
  user: any;
  userInfo: any;
  listCarte: any;
  ResearchList: any[]=[];

  changePage(id:any){
    this.router.navigate(['/cards', id]);
  }
  
  constructor(public dialog: MatDialog,private router: Router, private carteService: CarteService) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ){
    this.dialog.open(NewVisitCardComponent, {
      // height: '0vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });    
  }
  openUpdate(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    cardId: number
  ){
    localStorage.removeItem('carteId');
    localStorage.setItem('carteId', JSON.stringify(cardId));
    this.dialog.open(UpdateVisitCardComponent, {
      // height: '0vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });    
  }
  openprofil(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    idprofil: any
  ): void {
    this.dialog.open(QRcodeProfilComponent, {
      // height: '0vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    localStorage.setItem('profil', idprofil);
    this.router.navigate(['/']);
  }

  opencontact(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    idprofil: any
  ): void {
    this.dialog.open(QRcodeContactComponent, {
      // height: '0vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    localStorage.setItem('profil', idprofil);
    this.router.navigate(['/']);
  }

ngOnInit(){
  this.user = localStorage.getItem('userinfo');
  this.userInfo = JSON.parse(this.user);
  console.log(this.userInfo);
  this.cardList();
  this.unitResearchList();
  // this.deletecard(id);

}

cardList(){
  this.carteService.getlisteCarte(this.userInfo.authorization.access_token).then((res)=>{
    this.listCarte = res.data.data;
    // Mise à jour du nombre de cartes restantes
    this.availableCardsNumber = this.availableCardsNumber - this.listCarte.length;
    console.log(this.listCarte);    
  }).catch((error)=>{
    console.log(error);
  })
}

unitResearchList(){
  this.carteService.getSearchUnit().then((res)=>{
    this.ResearchList = res.data.data;
    console.log(this.ResearchList[2])    
  }).catch((error)=>{
    console.log(error);
  })
}

deletecard(id:any){
  this.carteService.deleteCard(id,this.userInfo.authorization.access_token).then((res)=>{
     window.location.reload();
     alert("votre carte a été supprimée");
  }).catch((error)=>{
    console.log(error);
  })
}
}

