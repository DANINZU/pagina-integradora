import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://192.168.1.173:3000/api/users';  // Ajusta la URL según sea necesario

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
