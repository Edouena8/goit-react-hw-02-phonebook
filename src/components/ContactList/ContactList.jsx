const ContactList = ({options, onDeleteContact}) => (
    <ul style={{width: '600px'}}>
        {options.map(({id, name, number}) => (
            <li 
                key={id} 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    marginBottom: '10px',
                    border: '1px solid black'
                }}>
                <p>{name}: {number}</p>
                <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        ))}
    </ul>
);


export default ContactList;