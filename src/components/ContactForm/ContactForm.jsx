import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css'

const ContactSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
    username: "",
    number: ""
}

export default function ContactForm({handleSubmit} ) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
			<Form className={css.form}>
				<label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="username" id={nameFieldId} />
                <ErrorMessage name="username" component="span" className={css.error} />

                <label htmlFor={numberFieldId}>Number</label>
                <Field type="text" name="number" id={numberFieldId} />
                <ErrorMessage name="number" component="span" className={css.error} />

				<button type="submit">Add contact</button>
			</Form>
    </Formik>
    )
}