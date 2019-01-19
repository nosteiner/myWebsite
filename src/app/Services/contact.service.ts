import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(message) {
    return this.http.post('sendEmail', message);
  }

}
