import nodemailer from 'nodemailer'

type FormData = {
  email: string
  name: string
  subject: string
  text: string
}
type RequestBody = {
  data: FormData
  token: string
}

export async function POST(request: Request) {
  try {
    const { data, token } = (await request.json()) as RequestBody
    const { RECAPTCHA_BACK_KEY } = process.env

    const gResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secret: RECAPTCHA_BACK_KEY,
          response: token,
        }),
      },
    )
    console.log({ gResponse })
    if (!gResponse.ok) {
      return Response.json('ReCaptcha Token Failed', {
        status: 400,
      })
    }

    await sendMail(data)

    return Response.json('', {
      status: 201,
    })
  } catch (error) {
    return Response.json('', {
      status: 500,
    })
  }
}

const sendMail = async (data: FormData) => {
  const { email, name, subject, text } = data
  const { GMAIL_APP_PASSWORD, EMAIL } = process.env

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: EMAIL,
        pass: GMAIL_APP_PASSWORD,
      },
      secure: true,
    })

    const mailData = {
      from: EMAIL,
      to: EMAIL,
      sender: email,
      replyTo: email,
      subject: `Message From ${name}: ${subject}`,
      text,
    }

    transporter.sendMail(mailData, function (error) {
      if (error) {
        reject(error)
      } else {
        resolve(true)
      }
    })
  })
}
