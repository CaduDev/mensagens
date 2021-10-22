import * as Yup from 'yup';

import Message from '../models/Message'

class MessageController {

  async get(req, res) {
    const messages = await Message.findAll({
      order: [['timestamp', 'DESC']],
      attributes: [
        'id',
        'timestamp',
        'subject',
        'detail',
        'read',
      ],
    });

    return res.json(messages);
  }

  async updateStatus(req, res) {
    const { id } = req.params
    const message = await Message.findOne({ where: { id } });

    await message.update({
      read: true
    })

    return res.json({ statu: 200, message: 'status atualizado com sucesso!'});
  }

  async index(req, res) {
    const { id } = req.params
    const messages = await Message.findByPk(id);

    return res.json(messages);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      subject: Yup.string().required().min(1),
      detail: Yup.string().required().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.body;

    const message = await Message.findOne({ where: { id } });

    const udpate = await message.update(req.body)

    return res.json(udpate);   
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      subject: Yup.string().required().min(1),
      detail: Yup.string().required().min(1),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const message = await Message.create({ 
      ...req.body, 
      timestamp: new Date(),
      read: false
    });

    const { id } = message

    console.log({
      id
    })

    return res.json(message);   
  }
}

export default new MessageController();
