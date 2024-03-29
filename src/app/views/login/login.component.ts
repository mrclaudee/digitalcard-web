import { Component, OnInit } from '@angular/core';
 
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, AbstractControl, FormBuilder} from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatButton,
    HeaderComponent,
    FooterComponent,
    FormsModule, ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
API_URL = 'http://bariiiph6o.laravel-sail.site:8080/api/v1/login'

  loginForm: FormGroup= new FormGroup({
    email : new FormControl(''),
    password: new FormControl(''),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  constructor( private formBuilder: FormBuilder, private router:Router) {
    this.loginForm = new FormGroup({})    
  } 
  ngOnInit(){
    this.loginForm = this.formBuilder.group(
      {        
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    
      },
    )
  }

   async onSubmit(){
    let result= JSON.stringify(this.loginForm.value);
  await axios.post(this.API_URL ,result, {
    headers:{
      "Content-Type" : 'application/json'
    }

  }).then((res)=>{
    localStorage.setItem('userinfo',JSON.stringify(res.data));
    console.log('userinfo:',localStorage.getItem('userinfo'));
    this.router.navigate(['/'])
  }).catch((error)=> {
    console.log(error)
  })

    console.log(result);
  }
  
}

