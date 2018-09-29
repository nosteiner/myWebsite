import { Component, OnInit } from '@angular/core';
import { Message } from '../../Message'
import { ContactService } from '../../contact.service'
@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

 message : Message;
  
  constructor(private contactService: ContactService) {
    this.message = new Message();
   }

  ngOnInit() {
  }

  sendMailHandler(){
this.contactService.sendEmail(this.message)
  }
}
