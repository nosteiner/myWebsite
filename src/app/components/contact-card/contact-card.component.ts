import { Component, OnInit } from '@angular/core';
import { Message } from '../../Message';
import { ContactService } from '../../contact.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  message: Message;
  messageEdit: FormGroup;
  emailSent = false;
  success = false;

  constructor(private contactService: ContactService, private fb: FormBuilder) {
    this.message = new Message();
    this.messageEdit = fb.group({
      name: new FormControl(this.message.name),

      email: new FormControl(this.message.email),
      title: new FormControl(this.message.title),

      text: new FormControl(this.message.text),
    });
  }

  ngOnInit() {
  }

  sendMailHandler() {
    this.message.edit(this.messageEdit.value);
    this.contactService.sendEmail(this.message).subscribe((status) => {
      console.log(status);
      this.messageEdit.reset();
      this.changeStatus(true);

      if ( status === Error) {
        this.success = false;
      } else {
        this.success = true;
      }
    });
  }

  changeStatus(bool) {
    this.emailSent = bool;

  }
}
