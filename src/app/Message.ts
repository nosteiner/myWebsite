export class Message{
    constructor() {}
    name: string;
    phoneNumber: string;
    email: string;
    subject: string;
    title: string;
    text: string;

    edit(data) {
        this.name = data.name;
        this.phoneNumber = data.phoneNumber;
        this.email = data.email;
        this.title = data.title;
        this.subject = data.subject;
        this.text = data.text;
       
      }
}