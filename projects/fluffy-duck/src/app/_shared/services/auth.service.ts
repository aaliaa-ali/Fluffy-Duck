import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  auth = new Subject<boolean>();
  register(user: any) {
    this.http
      .post<any>('http://localhost:8000/api/register', user)
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.checkAuth();
      });
  }
  logout() {
    this.http
      .post<any>('http://localhost:8000/api/logout','logout')
      .subscribe((res) => {
        localStorage.removeItem('token');
        this.checkAuth();
      });
  }
  login(user: any) {
    this.http
      .post<any>('http://localhost:8000/api/login', user)
      .subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.checkAuth();
      });
  }
  checkAuth() {
    if (localStorage.getItem('token')) {
      this.auth.next(true);
    } else {
      this.auth.next(false);
    }
  }
}
