import { ContactsListItem, DeleteBtn } from '../Phonebook.styled';

export function ContactsList({ onDelete, contacts, filterValue }) {
  function onClicked(e) {
    onDelete(e.target.id);
  }

  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filterValue);
  });

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ContactsListItem key={id}>
            {name}: {number}
            <DeleteBtn id={id} onClick={onClicked}>
              Удалить
            </DeleteBtn>
          </ContactsListItem>
        );
      })}
    </ul>
  );
}
