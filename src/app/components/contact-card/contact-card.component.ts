import { Component, OnInit } from '@angular/core';
import { Message } from '../../Message'
import { ContactService } from '../../contact.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  message: Message;
  messageEdit: FormGroup;
  emailSent: boolean = false;
  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.message = new Message();

    this.messageEdit = fb.group({
      name: new FormControl(this.message.name, [Validators.required]),
     
      email: new FormControl(this.message.email, [ Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      title: new FormControl(this.message.title, [Validators.required]),
     
      text: new FormControl(this.message.text, [Validators.required]),
    });
  }

  ngOnInit() {
  }

  sendMailHandler() {
    console.log(this.messageEdit.value)
    this.message.edit(this.messageEdit.value)
    this.contactService.sendEmail(this.message).subscribe(() => {
      this.emailSent = true;
    
    })
  }
}
