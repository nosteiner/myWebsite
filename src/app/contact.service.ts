import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from './Message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendEmail(message){
    console.log("message")
    this.http.post<Message>('sendEmail',message).subscribe(() => {
      console.log("email sent")
    })
  }
}
