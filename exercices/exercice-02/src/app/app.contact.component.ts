import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.ts']
})
export class ContactComponent {
  contacts: any[] = [];
  nouveauContact: any = {};

  ajouterContact() {
    this.contacts.push({ ...this.nouveauContact });
    this.nouveauContact = {};
  }

  supprimerContact(contact: any) {
    const index = this.contacts.indexOf(contact);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }
}
