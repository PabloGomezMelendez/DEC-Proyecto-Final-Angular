import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_TOP_ANIME='https://ejerciciostutorialesya.com/vue/datos.php';

@Injectable({
  providedIn: 'root'
})


export class TopSeviceService {

  constructor(private httpClient: HttpClient) { }

  //Metodo que devuelve un array de productos
  obtenerTopAnime(){
    return this.httpClient.get<any>(`${URL_TOP_ANIME}`);
  }
}
