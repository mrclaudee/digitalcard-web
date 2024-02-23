import { Component } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    nom= `Pierre Durant`;
    uniterecherche =`NETEC`
    defunit=`Neuroépidémiologie Tropicale et Comparée`
    profession1 = `Maître de Conférence des Universités`;
    profession2 = `Praticien Hospitalier`;

}
