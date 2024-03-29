import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { CommonModule } from '@angular/common';

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
export class CarteComponent {
colorUnity = {
  backgroundColor: "#00ff00",
  fill: "#00ff00"
}
ColorConstante = "#ff00ff"

}

