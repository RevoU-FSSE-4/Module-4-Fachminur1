import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface AddressInfoProps {
    formData: any;
    onNext: (values: AddressInfoFormValues) => void;
    onPrevious: () => void;
}

interface AddressInfoFormValues {
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

const AddressInfo: React.FC<AddressInfoProps> = ({formData, onNext, onPrevious}) => {
    const formik = useFormik<AddressInfoFormValues>({
        initialValues: {
            streetAddress: '',
            city: '',
            state: '',
            zipCode: ''
        },

        validationSchema: Yup.object({
            streetAddress: Yup.string().required('Address is Required!'),
            city: Yup.string().required('City is Required!'),
            state: Yup.string().required('State is Required!'),
            zipCode: Yup.string().matches(/^\d{5}$/, 'Invalid zipCode').required('ZIP Code is Required!')
        }),

        onSubmit: values => {
            onNext(values);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="streetAddress">Address</label>
                <input placeholder="Input your address" type="text" {...formik.getFieldProps('streetAddress')} />
                {formik.touched.streetAddress && formik.errors.streetAddress ? (
                    <p>{formik.errors.streetAddress}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input placeholder="Input your city" type="text" {...formik.getFieldProps('city')} />
                {formik.touched.city && formik.errors.city ? (
                    <p>{formik.errors.city}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="state">State</label>
                <input placeholder="Input your state" type="text" {...formik.getFieldProps('state')} />
                {formik.touched.state && formik.errors.state ? (
                    <p>{formik.errors.state}</p>
                ) : null}
            </div>

            <div>
                <label htmlFor="zipCode">ZIP Code</label>
                <input placeholder="Input your ZIP Code" type="text" {...formik.getFieldProps('zipCode')} />
                {formik.touched.zipCode && formik.errors.zipCode ? (
                    <p>{formik.errors.zipCode}</p>
                ) : null}
            </div>

            <div>
                <button type="button" onClick={onPrevious}>Previous</button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
};

export default AddressInfo;
