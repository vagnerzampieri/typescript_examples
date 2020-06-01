interface MailTo {
  name: string;
  email: string;
}

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // or Array<string>
}

class EmailService {
  sendMail(to: MailTo, message: MailMessage) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
