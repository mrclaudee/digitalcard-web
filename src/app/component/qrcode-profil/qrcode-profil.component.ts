import { Component } from '@angular/core';
import {
  MatDialogClose,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
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

}
