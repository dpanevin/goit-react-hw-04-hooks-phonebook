import { nanoid } from 'nanoid';
import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContactsList = JSON.parse(localStorage.getItem('contactsList'));

    if (localContactsList) {
      this.setState({ contacts: localContactsList });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = info => {
    const contact = { ...info, id: nanoid() };
    const contactList = this.state.contacts;
    const contactNames = contactList.map(item => {
      return item.name;
    });

    if (contactNames.includes(contact.name)) {
      toast.error(
        'Такое имя уже есть в списке контактов, придумайте новое имя.',
      );
      return;
    }

    this.setState(() => {
      return {
        contacts: [...contactList, contact],
      };
    });
  };

  onFilterChange = value => {
    this.setState(() => {
      const normalizeValue = value.toLowerCase();
      return {
        filter: normalizeValue,
      };
    });
  };

  onDelete = id => {
    const currentContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: currentContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Section>
        <HeadTitle>Phonebook</HeadTitle>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={this.onFilterChange} />
        <ContactsList
          contacts={contacts}
          filterValue={filter}
          onDelete={this.onDelete}
        />
        <Toaster position="top-right" />
      </Section>
    );
  }
}
