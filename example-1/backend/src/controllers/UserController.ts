import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'John Doe', email: 'johndoe@gmail.com'}
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: users[0],
      message: { subject: 'Welcome to the system', body: 'Welcome to the system' }
    })

    return res.json(users);
  }
};
