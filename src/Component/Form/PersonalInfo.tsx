import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface PersonalInfoProps {
    onNext: (values: PersonalInfoFormValues) => void;
    onPrevious: () => void;
}

interface PersonalInfoFormValues {
    fullName: string;
    email: string;
    dateOfBirth: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({onNext, onPrevious}) => {
    const formik = useFormik<PersonalInfoFormValues>({
        initialValues: {
            fullName: '',
            email: '',
            dateOfBirth: ''
        },

        validationSchema: Yup.object({
            fullName: Yup.string().required('Full name is Required!'),
            email: Yup.string().email('Email is Required!').required('Email is Required!'),
            dateOfBirth: Yup.string().required('Date of Birth is Required!')
        }),

        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor="fullName">Full name</label>
                <input placeholder="Input your Name" type="text" {...formik.getFieldProps('fullName')} />
                {formik.touched.fullName && formik.errors.fullName ? (
                    <p>{formik.errors.fullName}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input placeholder="Input your Email" type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                    <p>{formik.errors.email}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input placeholder="Input your Date of Birth" type="date" {...formik.getFieldProps('dateOfBirth')} />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                    <p>{formik.errors.dateOfBirth}</p>
                ) : null}
            </div>

            <div>
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
};

export default PersonalInfo;