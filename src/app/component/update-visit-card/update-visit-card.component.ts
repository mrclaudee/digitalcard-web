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
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { UrlService } from '../../classes/url.service';
import { CarteService } from '../../service/carte.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update-visit-card',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent,MatFormFieldModule,
    MatInputModule, MatSelectModule,FormsModule, MatFormFieldModule, MatInputModule, CommonModule, ReactiveFormsModule],
  templateUrl: './update-visit-card.component.html',
  styleUrl: './update-visit-card.component.scss'
})
export class UpdateVisitCardComponent implements OnInit{
  
  cardForm: FormGroup= new FormGroup({
    research_unit_id: new FormControl(''),
    job_title: new FormControl(''),
    mobile: new FormControl(''),
    fix: new FormControl(''),
    zip_code: new FormControl(''),
    city: new FormControl(''),
    emailFormControl: new FormControl(''),
  });
  ResearchList: any[]=[] ;
  userInfo: any;
  user: any ;
  id: any;
  id1: any;
QRInfo : any;
userCard : any;
  listCarte: any;
  
  get f(): { [key: string]: AbstractControl } {
    return this.cardForm.controls;
  }
  constructor(public dialogRef: MatDialogRef<UpdateVisitCardComponent>,private router:Router, private formBuilder: FormBuilder,private carteService: CarteService) {
    this.cardForm = new FormGroup({})    
  }
  ngOnInit(){
    this.user = localStorage.getItem('userinfo');
  this.userInfo = JSON.parse(this.user);
  console.log(this.userInfo);
  this.id = localStorage.getItem('carteId');
  this.id1 = JSON.parse(this.id);
  console.log(this.id1);

  
    this.cardForm = this.formBuilder.group(
      {        
      research_unit_id: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      fix: ['', [Validators.required]],
      address: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
      city: ['', [Validators.required]],
      description: ['']
      },
    )
    this.unitResearchList();
    this.InfoCarte();
  }

  async onSubmit(){
    let result= JSON.stringify(this.cardForm.value);
    await axios.post(UrlService.API_URL + '/cards',result,{
      headers:{
        'Authorization': 'Bearer ' + this.userInfo.authorization.access_token,
        "Content-Type" : 'application/json'
      }
    }).then((res)=>{
      window.location.reload();
      this.router.navigate(['/'])
    })
    console.log(result);
  } 

  async InfoCarte(){
    await this.carteService.getCardById(this.id1,this.userInfo.authorization.access_token).then((res)=> {
       this.QRInfo=res.data.data;
       console.log(this.QRInfo);
     })
   
   }

  async update(){
    let result= JSON.stringify(this.cardForm.value);
    await axios.put(UrlService.API_URL + '/cards',result,{
      headers:{
        'Authorization': 'Bearer ' + this.userInfo.authorization.access_token,
        "Content-Type" : 'application/json'
      }
    }).then((res)=>{
      window.location.reload();
      this.router.navigate(['/'])
    })

    console.log(result);

  } 
  
  cardList(){
    this.carteService.getlisteCarte(this.userInfo.authorization.access_token).then((res)=>{
      this.listCarte = res.data.data;
      console.log(this.listCarte);    
    }).catch((error)=>{
      console.log(error);
    })
  }
  unitResearchList(){
    this.carteService.getSearchUnit().then((res)=>{
      this.ResearchList = res.data.data;
      console.log(this.ResearchList[0])    
    }).catch((error)=>{
      console.log(error);
    })
  }
  }
