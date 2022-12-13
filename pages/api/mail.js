const mail = require('@sendgrid/mail')

mail.setApiKey("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");

export default function handler(req, res) {
  const body = JSON.parse(req.body)

const message = `
Name: ${body.username}\r\n
Address: ${body.address}\r\n
TOC: ${body.toc}\r\n
PP: ${body.pp}
`;

const data = {
  to: 'khawaja.showzib@unit52.pk',
  from: 'showzib22@gmail.com',
  subject: "New SendGrd Practise Message",
  text: message,
  html: message.replace(/\r\n/g, '<br>')
}

mail.send(data)

  res.status(200).json({ status: "ok" })
}
