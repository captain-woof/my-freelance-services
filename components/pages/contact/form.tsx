import * as yup from 'yup'
import { useFormik } from 'formik'
import { sendEmail } from '../../../utils/mail'
import styles from './styles.module.css'
import Textfield from './textfield'
import Button from '../../atoms/button'
import { useState } from 'react'

// Validation schema
const validationSchema = yup.object({
    from: yup.string()
        .email("Must be a valid email address!")
        .required("You must provide your email address!"),
    name: yup.string()
        .required('Please enter your name'),
    subject: yup.string()
        .required("You must include a subject."),
    body: yup.string()
        .required("Please write your message.")
})

// Initial values
const initialValues = {
    from: '',
    name: '',
    subject: '',
    body: ''
}

export default function ContactForm() {
    const [emailSent, setEmailSent] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<boolean>(false)

    const formik = useFormik({
        validationSchema, initialValues, onSubmit: async ({ body, name, from, subject }) => {
            if (await sendEmail(from, name, subject, body)) {
                setEmailSent(true)
            } else {
                setEmailError(true)
            }
        }
    })

    return (
        <form className={styles.contactForm} onSubmit={formik.handleSubmit}>
            <h3>Wanna talk?</h3>
            <Textfield error={formik.touched.from ? formik.errors.from : null} value={formik.values.from} onChangeTextField={formik.handleChange} label="Email" name="from" placeholder='Your email address' type="email" />
            <Textfield error={formik.touched.name ? formik.errors.name : null} value={formik.values.name} onChangeTextField={formik.handleChange} label="Name" name="name" placeholder='Enter your name' />
            <Textfield error={formik.touched.subject ? formik.errors.subject : null} value={formik.values.subject} onChangeTextField={formik.handleChange} label="Subject" name="subject" placeholder='Enter subject' />
            <Textfield error={formik.touched.body ? formik.errors.body : null} value={formik.values.body} onChangeTextArea={formik.handleChange} label="Body" name="body" large placeholder='Type your message...' />
            {emailError &&
                <div className={styles.error}>Could not send message. Try again!</div>
            }
            {emailSent
                ? <div className={styles.statusMsg}>Message sent! Check your inbox.</div>
                : <Button buttonProps={{
                    type: 'submit',
                    disabled: (formik.isSubmitting || (!formik.isValid))
                }}>Send</Button>
            }
        </form>
    )
}