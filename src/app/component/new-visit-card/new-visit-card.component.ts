import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, AbstractControl, FormBuilder} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import axios from 'axios';



@Component({
  selector: 'new-visit-card',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatFormFieldModule,
    MatInputModule, MatSelectModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './new-visit-card.component.html',
  styleUrl: './new-visit-card.component.scss'
})
export class NewVisitCardComponent implements OnInit{
  apiUrl="http://bariiiph6o.laravel-sail.site:8080/api/v1/login";
  cardForm: FormGroup= new FormGroup({
    unitFormControl: new FormControl(''),
    functionFormControl: new FormControl(''),
    mobileFormControl: new FormControl(''),
    fixeFormControl: new FormControl(''),
    postalFormControl: new FormControl(''),
    townFormControl: new FormControl(''),
    emailFormControl: new FormControl(''),
  });
  
  get f(): { [key: string]: AbstractControl } {
    return this.cardForm.controls;
  }
  constructor(public dialogRef: MatDialogRef<NewVisitCardComponent>, private formBuilder: FormBuilder) {
    this.cardForm = new FormGroup({})    
  }
  ngOnInit(){
    this.cardForm = this.formBuilder.group(
      {        
      unitFormControl: ['', [Validators.required]],
      functionFormControl: ['', [Validators.required]],
      mobileFormControl: ['', [Validators.required]],
      fixeFormControl: ['', [Validators.required]],
      addressFormControl: ['', [Validators.required]],
      postalFormControl: ['', [Validators.required]],
      townFormControl: ['', [Validators.required]],
    
      },
    )
  }

  async onSubmit(){
    let result= JSON.stringify(this.cardForm.value);
    await axios.post(this.apiUrl,result,{
      headers:{
      "content-type":"application/json"
      }
    }).then((res)=>{

    })

    console.log(result);

  }
  
}
