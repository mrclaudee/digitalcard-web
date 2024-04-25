import { Component, OnInit } from '@angular/core';
 
import { HeaderComponent } from '../../component/header/header.component';
import { FooterComponent } from '../../component/footer/footer.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, AbstractControl, FormBuilder} from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { UrlService } from '../../classes/url.service';


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
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit{
  hide = true;
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
  await axios.post(UrlService.API_URL +'/login',result, {
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

