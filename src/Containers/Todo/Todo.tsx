import { useEffect, useState } from "react"
import { Card, Text, Input } from "../../Component"
import { Tombol } from "../../Component/Buttons"
import {useFormik} from 'formik';
import * as yup from 'yup';

interface ProductData {
    id?: number
    title: string
    price: number
}

interface Response {
    products: ProductData[]
}

const ProductContainer = () => {
    const [products, setProducts] = useState<ProductData[]>([])

    const fetchProduct = async () => {
        const response = await fetch('https://documenter.getpostman.com/view/15804286/2sA3Bn6CSh')
        const data: Response = await response.json()
        setProducts?.(data.products)
    }

    const formMik = useFormik({
        initialValues: {
            title: '',
            price: 0
        },
        onSubmit: (data: ProductData) => submitProduct(data)
    })

    // untuk menambahkan product
    const submitProduct = async (form: ProductData) => {
        const response = await fetch('https://library-crud-sample.vercel.app/api/category/create',{
            headers: {
                'Authorization' : localStorage.getItem('token') ?? ''
            },
            method: 'POST',
            body: JSON.stringify({
                title: form.title,
                price: form.price
            })
        })
        const data: ProductData = await response.json();
        setProducts([...products, data])
    }

    useEffect (
        () => {
            fetchProduct()
        },
        []
    )
    
    return (
        <Card border>
            <form onSubmit={formMik.handleSubmit}>
                <Card border={false}>
                    <div>
                        <Text>{'Title'}</Text>
                        <Input value={formMik.values.title} onChange={formMik.handleChange('title')}/>
                    </div>
                    <div>
                        <Text>{'Price'}</Text>
                        <Input value={formMik.values.price} onChange={formMik.handleChange('price')}/>
                    </div>
                    <Tombol label={'input'} type={"submit"}/>
                </Card>
            </form>
            <Card border={false}>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card> 
        </Card>
    )
}
export default ProductContainer;
