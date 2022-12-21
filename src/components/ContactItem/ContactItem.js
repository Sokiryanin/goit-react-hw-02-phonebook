import { Item, Text, DeleteBtn } from './ContactItem.styled';

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
