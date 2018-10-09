export class Message{
    constructor() {}
    name: string;
  
    email: string;
   
    title: string;
    text: string;

    edit(data) {
        this.name = data.name;
        this.email = data.email;
        this.title = data.title;
        this.text = data.text;
       
      }
}