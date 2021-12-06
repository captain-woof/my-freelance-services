import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

// Set SendGrid api key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

// /api/sendEmail?from=FROM&name=NAME&subject=SUBJECT&body=BODY
export default async function handler({ query }: NextApiRequest, res: NextApiResponse) {
    if (!(('from' in query) && ('subject' in query) && ('body' in query) && ('name' in query))) {
        res.status(401).send('Invalid request')
    } else {
        let { from, subject, body, name } = query
        name = decodeURIComponent(name as string)
        from = decodeURIComponent(from as string)
        subject = decodeURIComponent(subject as string)

        // Automated acknowledgment sent to user, plus same email sent to me
        const msg = {
            to: from as string,
            /*from: process.env.MY_MAIL_BOT as string,*/
            from: `Sohail Saha's Mailbot <${process.env.MY_MAIL_BOT}>`,
            replyTo: `Sohail Saha <${process.env.MY_EMAIL}>`,
            cc: `Sohail Saha <${process.env.MY_EMAIL}>`,
            subject: `Re: ${subject}`,
            html: `<p>Hey there, ${name.split(" ")[0]}!</p><p>I got your message, and I will get back to you here, as soon as I can. You may reply to this conversation if you forgot to mention something.</p><p>With regards,<br/>Sohail Saha</p><br/><b>ORIGINAL MESSAGE</b><br/><blockquote>${body}</blockquote>`
        }

        try {
            await sgMail.send(msg)
            res.status(200).send('Email sent')
        } catch (e: any) {
            res.status(500).json(e)
        }
    }
}