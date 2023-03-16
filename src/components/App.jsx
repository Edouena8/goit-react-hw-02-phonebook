import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Filter from "./Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  formSubmitHandler = info => {
    const contact = {
      id: nanoid(),
      name: info.name,
      number: info.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    })
  }

  getVisibleContacts = () => {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

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
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.formSubmitHandler}/>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
      <ContactList options={visibleContacts}/>
      
    </div>
  );
  }
};

export default App;