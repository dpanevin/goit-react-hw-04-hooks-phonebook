import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  // component did mount
  useEffect(() => {
    const localContactsList = JSON.parse(localStorage.getItem('contactsList'));

    if (localContactsList) {
      setContacts(localContactsList);
    }
    console.log('sfsfsdff');
  }, []);
  //componentdidupdate
  useEffect(() => {
    if (contacts) {
      localStorage.setItem('contactsList', JSON.stringify(contacts));
    }
  }, [contacts]);

  function onSubmit(info) {
    const contact = { ...info, id: nanoid() };
    const contactNames = contacts.map(item => {
      return item.name;
    });

    if (contactNames.includes(contact.name)) {
      toast.error(
        'Такое имя уже есть в списке контактов, придумайте новое имя.',
      );
      return;
    }

    setContacts([...contacts, contact]);
  }

  function onFilterChange(value) {
    const normalizeValue = value.toLowerCase();
    setFilter(normalizeValue);
  }

  function onDelete(id) {
    const currentContacts = contacts.filter(item => item.id !== id);
    setContacts(currentContacts);
  }

  return (
    <Section>
      <HeadTitle>Phonebook</HeadTitle>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter filterValue={filter} onFilterChange={onFilterChange} />
      <ContactsList
        contacts={contacts}
        filterValue={filter}
        onDelete={onDelete}
      />
      <Toaster position="top-right" />
    </Section>
  );
}
