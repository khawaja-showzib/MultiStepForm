const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

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
