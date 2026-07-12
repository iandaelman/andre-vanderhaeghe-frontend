import { Component, signal } from '@angular/core';
import { Header } from '../../../../core/header/header';
import { email, form, required, submit, FormField } from '@angular/forms/signals';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [Header, FormField],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  private readonly RECIPIENT = 'xavier_vanderhaeghe@skynet.be';

  private readonly subjectLabels: Record<string, string> = {
    schilderij: 'Vraag over een schilderij',
    tentoonstelling: 'Tentoonstelling',
    monografie: 'Monografie',
    anders: 'Andere',
  };

  contactModel = signal<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  contactForm = form(this.contactModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Naam is verplicht' });
    required(schemaPath.email, { message: 'E-mailadres is verplicht' });
    email(schemaPath.email, { message: 'Voer een geldig e-mailadres in' });
    required(schemaPath.message, { message: 'Bericht is verplicht' });
  });

  async onSubmit(): Promise<void> {
    await submit(this.contactForm, async () => {
      const data = this.contactModel();
      const subjectLabel = this.subjectLabels[data.subject] ?? 'Contactformulier';

      const body = [`Naam: ${data.name}`, `E-mail: ${data.email}`, '', data.message].join('\n');

      const mailtoUrl =
        `mailto:${this.RECIPIENT}` +
        `?subject=${encodeURIComponent(subjectLabel)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoUrl;
      this.contactForm().reset();
    });
  }
}
