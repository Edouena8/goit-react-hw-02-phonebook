import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [
      // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = data => {
    if(this.duplicateContact(data)){
      return alert(`${data.name} is already in contacts`);
    }

        const contact = {
          id: nanoid(),
          name: data.name,
          number: data.number,
        };
    
        this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  duplicateContact = ({name}) => {
    return this.state.contacts.find(contact => 
      contact.name === name);
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    })
  }

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({name}) => 
      name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }));
  }

  render () {
    const {filter} = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#ffffff'
      }}
    >
      <h1 style={{
        fontSize: '40px',
        textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
      >Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>

      <h2 style={{
        fontSize: '40px',
        textShadow: '4px 4px 2px rgba(0,0,0,0.6)'}}
      >Contacts</h2>

      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactList options={visibleContacts} onDeleteContact={this.deleteContact}/>    
    </div>
  );
  }
};

export default App;