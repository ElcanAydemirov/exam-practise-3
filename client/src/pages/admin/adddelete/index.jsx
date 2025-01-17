import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDeleteByIdMutation, useGetAllProductsQuery, usePostMutation } from '../../../redux/services';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    imageUrl: Yup.string()
        .url('Invalid URL')
        .required('Required'),
    price: Yup.number()
        .positive('Price must be a positive number')
        .required('Required'),
    description: Yup.string()
        .min(5, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Required'),
    category: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const AddDelete = () => {
    const [addProduct] = usePostMutation();
    const { data, isError, isLoading } = useGetAllProductsQuery();
    const [deleteProduct] = useDeleteByIdMutation();

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const result = await deleteProduct(id).unwrap();
            console.log('Delete success:', result);
        } catch (error) {
            console.error('Delete failed:', error);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading products.</div>;

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>
                                <img src={product.imageUrl} alt={product.title} style={{ width: '50px' }} />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div>
                <h1>Add Product</h1>
                <Formik
                    initialValues={{
                        title: '',
                        imageUrl: '',
                        price: '',
                        description: '',
                        category: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, { resetForm }) => {
                        addProduct(values);
                        resetForm();
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div>
                                <label>Title</label>
                                <Field name="title" />
                                {errors.title && touched.title && <div>{errors.title}</div>}
                            </div>
                            <div>
                                <label>Image URL</label>
                                <Field name="imageUrl" />
                                {errors.imageUrl && touched.imageUrl && <div>{errors.imageUrl}</div>}
                            </div>
                            <div>
                                <label>Price</label>
                                <Field name="price" type="number" />
                                {errors.price && touched.price && <div>{errors.price}</div>}
                            </div>
                            <div>
                                <label>Description</label>
                                <Field name="description" />
                                {errors.description && touched.description && <div>{errors.description}</div>}
                            </div>
                            <div>
                                <label>Category</label>
                                <Field name="category" />
                                {errors.category && touched.category && <div>{errors.category}</div>}
                            </div>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default AddDelete;
