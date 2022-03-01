export class contactForm {
  name: string | null;
  email: string | null;
  message: string | null;

  constructor(data: contactForm) {
    this.name = data.name;
    this.email = data.email;
    this.message = data.message;
  }
}
