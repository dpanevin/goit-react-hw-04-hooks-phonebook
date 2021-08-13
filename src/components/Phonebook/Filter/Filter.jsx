import { FormInput } from '../Phonebook.styled';

export function Filter({ onFilterChange, filterValue }) {
  function hendleChange(e) {
    onFilterChange(e.target.value);
  }

  return (
    <label>
      Поиск по списку контактов:
      <FormInput
        onChange={hendleChange}
        value={filterValue}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Фильтр"
        required
      />
    </label>
  );
}
