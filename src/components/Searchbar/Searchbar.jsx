import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Header, SearchForm, SearchField, Button } from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  const Submit = (value, { resetForm }) => {
    if (value.search.trim()) {
      onSubmit(value);
      resetForm();
      return;
    }
    console.log('Type something!');
  };
  return (
    <Header>
      <Formik onSubmit={Submit} initialValues={{ search: '' }}>
        <SearchForm>
          <SearchField name="search" />
          <Button type="submit">
            <AiOutlineSearch />
          </Button>
        </SearchForm>
      </Formik>
    </Header>
  );
};
