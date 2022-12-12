import { Formik, FormikHelpers } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import { IProps, IFormValues } from './SearchBar.interface';
import { Header, SearchForm, SearchField, Button } from './Searchbar.styled';

export const Searchbar: React.FC<IProps> = ({ onSubmit }) => {
  const submit = (
    { search }: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    if (!search.trim()) {
      console.log('Type something!');
    }
    onSubmit(search);
    resetForm();
  };
  return (
    <Header>
      <Formik onSubmit={submit} initialValues={{ search: '' }}>
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
