import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    //we put everything from fields in our object
    const onChange = (e) => setContact({...contact,
        [e.target.name]: e.target.value
    })

    const onSubmit = (e) => {
        e.preventDefault();
        //add contact to Contacts
        contactContext.addContact(contact)
        //empty the fields for next contact
        setContact({name: '',
        email: '',
        phone: '',
        type: 'personal'
        })
        console.log("onSubmit works")
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary"> Add contact</h2>
            <input type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={onChange}
            />
            <input type='text'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange}
            />
            <input type='text'
                placeholder='Phone'
                name='phone'
                value={phone}
                onChange={onChange}
            />

            <h5>Contact Type</h5>

            <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange}/>
            Personal{''}

            <input type="radio" name="type" value="prefessional" checked={type === 'prefessional'} onChange={onChange} />
            Professional{''}

            <div>
                <input type="submit" value="add Contact" className="btn btn-primary btn-block" />
            </div>


        </form>
    )
}

export default ContactForm