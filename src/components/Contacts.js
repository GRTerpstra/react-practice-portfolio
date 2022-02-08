import React, { useState } from 'react';
import './Contacts.scss'
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contacts = () => {

    const [succesMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const service_id = "service_0tnd3fk";
    const template_id = "template_7xxkr2m";
    const user_id = "user_BUV7Fc5yb37f4y5qKfR49";

    const onSubmit = (data, r) => {
        sendEmail(
            service_id,
            template_id,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description,
            },
            user_id
        )
        r.target.reset()
    }

    const sendEmail = (service_id, template_id, variables, user_id) => {
        emailjs.send(service_id, template_id, variables, user_id)
            .then(() => {
                setSuccessMessage("Form sent successfully.");
            }).catch(err => console.error(`Something went wrong ${err}`));
    };

    return (
        <div className="contacts">
            <div className="text-center">
                <h1>Contact Me</h1>
                <p>Please fill out the form and describe your protect needs I will contact you as soon as possible.</p>
                <span className="success-message">{succesMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>
                            <div className="text-center">
                                <input className="form-control" placeholder="Name" name="name" type="text" {...register('name', { required: "Please enter your name.", maxLength: { value: 20, message: "Please enter a name with fewer than 20 characters." } })} />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="text-center">
                                <input className="form-control" placeholder="Phone Number" name="phone" type="number" {...register('phone', { required: "Please enter your phone number.", minLength: { value: 6, message: "Please enter a valid phone number." } })} />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="text-center">
                                <input className="form-control" placeholder="E-mail" name="email" type="email" {...register('email', { required: "Please enter your e-mail.", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid Email" } })} />
                                <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.subject && errors.subject.message}
                            </span>
                            <div className="text-center"></div>
                            <input className="form-control" placeholder="Subject" name="subject" type="text" {...register('subject', { required: "Please enter the subject of the message.", maxLength: { value: 30, message: "Subject limit of 20 characters reached." } })} />
                            <div className="line"></div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <span className="error-message">
                                {errors.description && errors.description.message}
                            </span>
                            <div className="text-center">
                                <textarea className="form-control" name="description" placeholder="Description" type="text"{...register('description', { required: "Please enter your messsage.", maxLength: { value: 600, message: "Description limit of 600 characters reached." } })}></textarea>
                                <div className="line"></div>
                            </div>
                        </div>
                        <button className='contact-btn' type="submit">Contact Me</button>
                    </div>
                </form>
            </div>
        </div >
    )
};

export default Contacts;
