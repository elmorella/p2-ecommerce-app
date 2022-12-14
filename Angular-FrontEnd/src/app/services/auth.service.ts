import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Credentials } from '../model/credentials.model';
import { AuthCertificate } from '../model/auth-certificate.model';
import { OrderReceiptServiceTsService} from 'src/app/services/order-receipt.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authCert: AuthCertificate = new AuthCertificate();

  BASE_URL = 'http://localhost:8080'

  constructor(private http: HttpClient, private orderService: OrderReceiptServiceTsService) { }

  public doLoginAttempt(credentials: Credentials) : Observable<any>{
    return this.http.post<any>(`${this.BASE_URL}/user/login`, credentials);
  }

  public setAuthCert(authCert: AuthCertificate){
    this.authCert = authCert
  }

  public getAuthCert(){
      return this.authCert;
  }

  public verifyToken(){
    return this.authCert.valid;
  }

  public logout(){
    this.http.put<AuthCertificate>(`${this.BASE_URL}/auth/invalidate`, this.authCert).subscribe((response: AuthCertificate) =>{
      this.authCert = response;
    });
    this.orderService.clearShoppingCart();
  }
}
