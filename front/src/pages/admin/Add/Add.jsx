import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import {Formik} from 'formik'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import './Add.css'

const Add = () => {
    const { data, setData } = useContext(MainContext)

    return (
        <div className='add__div'>
        <Helmet>
                <title>Add Page</title>
            </Helmet>
            <Formik
                initialValues={{ title: '', image: '', description: '' }}
                validate={values => { }}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post("http://localhost:8080/practise4", { ...values })
                        .then(res => {
                            console.log(res.data);
                            setData(res.data)
                        })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <input
                            type="text"
                            name="image"
                            placeholder='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        <input
                            type="text"
                            name="description"
                            placeholder='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Add
