import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TestService {
  constructor(private http: HttpClient) {}

  private isAuthenticated: boolean = false;

  updateAuthenticationStatus() {
    this.isAuthenticated = true;
  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }

  updatePassword(data: string) {
    const url = `http://localhost:9000/update/password`;
    return this.http.post(url,data,{
      withCredentials:true
      })
  }

  login() {
    const url = `http://localhost:9000/login`;
    return this.http.post(url,{},{
      headers:new HttpHeaders({
      Authorization:`Basic ${btoa('John:Doe')}`
      }),
      withCredentials:true
      })
  }
}
