const ContactList = ({options}) => (
    <ul>
        {options.map(({id, name, number}) => (
            <li key={id}>{name}: {number}</li>
        ))}
    </ul>
);


export default ContactList;