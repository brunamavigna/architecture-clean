import { Injectable } from '@angular/core';
import { User } from '../entities/user/user';
import{ HttpClient} from '@angular/common/http'
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TesteService {

  private url = 'http://localhost:3335/users'

  constructor(
    private http: HttpClient
  ) { }

  // async register(data: User): Promise<User>{
  //   return data
  // }

  loadData(){
    return this.http.get<User[]>(`${this.url}`)
  }

  

  register(data: any){
    return this.http.post(`${this.url}`, data).pipe(take(1))
  }

  





  

  

  

  
}
