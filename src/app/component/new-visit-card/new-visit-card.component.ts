import { Component } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'new-visit-card',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatFormFieldModule,
    MatInputModule, MatSelectModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './new-visit-card.component.html',
  styleUrl: './new-visit-card.component.scss'
})
export class NewVisitCardComponent {
  constructor(public dialogRef: MatDialogRef<NewVisitCardComponent>) {}
  unitFormControl = new FormControl('', [Validators.required]);
  functionFormControl = new FormControl('', [Validators.required]);
  mobileFormControl = new FormControl('', [Validators.required]);
  fixeFormControl = new FormControl('', [Validators.required]);
  addressFormControl = new FormControl('', [Validators.required]);
  postalFormControl = new FormControl('', [Validators.required]);
  townFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
