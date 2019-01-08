import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
link = 'https://www.dropbox.com/s/airrg8ofqn92oue/Noam%20Steiner%20CV%20-%202019.docx?dl=1';
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }
}
