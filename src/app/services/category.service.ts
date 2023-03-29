import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44351/api/categories/getall';
  products: Category[] = [];

  constructor(private httpClient: HttpClient) { }


  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }
}