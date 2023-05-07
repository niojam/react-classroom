import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {object, string, bool} from "yup";
import {Formik} from "formik";


const schema = object().shape({
    productName: string().required(),
    productDescription: string().required(),
});

function EditProductForm({product, updateProduct}) {

    const handleOnFormSubmit = async (values) => {
        console.log(values);
        const updatedProduct = {...product, ...{name: values.productName, description: values.productDescription}};
        updateProduct(updatedProduct);
    };

    return (
        <Formik
            validationSchema={schema}
            onSubmit={(values) => handleOnFormSubmit(values)}
            initialValues={{
                productName: product.name,
                productDescription: product.description,
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormikProductName">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control
                                type="text"
                                name="productName"
                                value={values.productName}
                                onChange={handleChange}
                                isValid={touched.productName && !errors.productName}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Product description</Form.Label>
                            <Form.Control
                                type="text"
                                name="productDescription"
                                value={values.productDescription}
                                onChange={handleChange}
                                isValid={touched.productDescription && !errors.productDescription}
                            />

                        </Form.Group>
                    </Row>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
    );
}

export default EditProductForm;