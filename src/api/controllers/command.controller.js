import Command from '../models/command.model';
import { create } from 'domain';

export default {
  async list(req, res, next) {
    try {
      const commands = await Command.find().exec();
      res.json(commands);
    } catch (error) {
      response.status(500).send(error);
      //next(error);
    }
  },
  async create(req, res, next) {
    try {
      debugger;
      const command = new Command(req.body);
      const result = await command.save();
      res.send(result);
      next();
    } catch (error) {
      res.status(500).send(error);
      //next(error);
    }
  },
};
