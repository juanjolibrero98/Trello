import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Card, CreateCardDto, UpdateCardDto } from '@models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  //metodo para actualizar la card de posicion y lista
  update(id: Card['id'], changes: UpdateCardDto){
    return this.http.put<Card>(`${this.apiUrl}/api/v1/cards/${id}`, changes, {
      context: checkToken()
    })
  }

  //metodo para crear una nueva card
  create(dto: CreateCardDto){
    return this.http.post<Card>(`${this.apiUrl}/api/v1/cards`, dto, {
      context: checkToken()
    })
  }
}
