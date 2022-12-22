import { Item, Text, DeleteBtn } from './ContactItem.styled';
import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <Item>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
