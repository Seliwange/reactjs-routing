import './Contacts.css';
import CONTACTS_DATA from './Data';
import Contact from '../Contact/Contact';
import Nav from '../Nav/Nav';
import { useState } from 'react';

export default function Contacts() {

    const [contact, setContact] = useState("");
  
    function getContact(ev){
      setContact(ev.target.value);
    }
  
    return (
        <>
        <Nav />
        <div className="contacts">
            <input 
            className="search-input"
            name="search" 
            type="search" 
            placeholder="Search..." 
            onChange={getContact} 
            />
        {
            CONTACTS_DATA.filter(contacts => {
            if (contact === "") {
                return contacts;
            } else if (contacts.lastName.toLowerCase().includes(contact.toLowerCase())) {
                return contacts;
            } else if (contacts.firstName.toLowerCase().includes(contact.toLowerCase())) {
                return contacts;
            } else if (contacts.phone.includes(contact)) {
                return contacts;
            }
            }).map((contacts) => {
                return <Contact 
                    key={contacts.lastName}
                    firstName={contacts.firstName}
                    lastName={contacts.lastName}
                    phone={contacts.phone}
                    gender={contacts.gender}
                />
            })
        }
        </div>
      </>
    );
  }