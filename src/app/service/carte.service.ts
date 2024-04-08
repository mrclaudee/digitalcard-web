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
        'Authorisation': 'Bearer ' + token,
      }
    })
  }
  
  getSearchUnit(){
    return axios.get(UrlService.API_URL + '/researchs-units')
  }

  getCardById(id : any, token : any){
    return axios.get(UrlService.API_URL + '/cards/' + id,{
      headers:{
        'Authorisation': 'Bearer ' + token,
      }
    })
  }

  deleteCard(id : any, token : any){
    return axios.delete(UrlService.API_URL + '/cards/' + id,{
      headers:{
        'Authorisation': 'Bearer ' + token,
      }
    })
  }

}
