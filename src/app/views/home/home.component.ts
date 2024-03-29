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
    QRcodeProfilComponent
  ],
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  nom = `Pierre Durant`;
  uniterecherche = `NETEC`;
  defunit = `Neuroépidémiologie Tropicale et Comparée`;
  profession1 = `Maître de Conférence des Universités`;
  profession2 = `Praticien Hospitalier`;
  poste = `Créer une carte`;
  defpost = `Pas besoin de supprimer votre carte existante`;
  text1poste = `Profitez des espaces vide dans`;
  text2poste = `votre porte carte`;

  changePage(route: string){
    this.router.navigate([route]);
  }
  
  constructor(public dialog: MatDialog,private router: Router) {}

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
  openprofil(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(QRcodeProfilComponent, {
      // height: '0vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
}
}
