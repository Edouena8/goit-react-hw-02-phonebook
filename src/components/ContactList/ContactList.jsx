import PropTypes from 'prop-types';
import { 
    ContactWrap, 
    ContactItem, 
    ContactText, 
    DeleteBtn 
} from "./ContactList.styled";

const ContactList = ({options, onDeleteContact}) => (
    <ContactWrap>
        {options.map(({id, name, number}) => (
            <ContactItem key={id}>
                <ContactText>{name}: {number}</ContactText>
                <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
            </ContactItem>
        ))}
    </ContactWrap>
);

ContactList.propTypes = {
    options: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;