import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notification } from 'components/Notifications';
import { NotificationContainer } from 'react-notifications';

import { Header, SearchForm, SearchField, Button } from './Searchbar.styled';
export const Searchbar = ({ onSubmit }) => {
  const Submit = (value, { resetForm }) => {
    if (!value.search.trim()) {
      console.log('Type something!');
    }
    onSubmit(value);
    resetForm();
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
      <NotificationContainer />
    </Header>
  );
};
