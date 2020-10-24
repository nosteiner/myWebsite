import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Message } from '../Message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(message: Message) {
    return this.http.post('sendEmail', message);
  }

}
