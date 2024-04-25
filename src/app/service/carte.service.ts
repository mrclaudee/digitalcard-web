import { Injectable } from '@angular/core';
import axios from 'axios';
import { UrlService } from '../classes/url.service';

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  constructor() { }

  getlisteCarte(token : any){
    return axios.get(UrlService.API_URL + '/cards',{
      headers:{
        'Authorization': 'Bearer ' + token,
      }
    })
  }
  
  getSearchUnit(){
    return axios.get(UrlService.API_URL + '/research-units')
  }

  getCardById(id : any, token : any){
    return axios.get(UrlService.API_URL + '/cards/' + id,{
      headers:{
        'Authorization': 'Bearer ' + token,
      }
    })
  }

  getCard(id : any){
    return axios.get(UrlService.API_URL + '/cards/' + id)
  }

  deleteCard(id : any, token : any){
    return axios.delete(UrlService.API_URL + '/cards/' + id,{
      headers:{
        'Authorization': 'Bearer ' + token,
      }
    })
  }

 }
