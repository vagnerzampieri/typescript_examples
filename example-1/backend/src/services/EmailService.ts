interface MailTo {
  name: string;
  email: string;
}

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[]; // or Array<string>
}

// DTO = Data Transfer Object (DDD)
interface MessageDTO {
  to: MailTo;
  message: MailMessage;
}

class EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
