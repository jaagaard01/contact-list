import React, {useState, useEffect} from 'react'


const EditClientForm = props => {
    const [client, setClient] = useState(props.currentClient)

    useEffect(
        () => {
            setClient(props.currentClient)
        },
        [props]
    )

    const handleInputChange = event => {
        const {name, value} = event.target

        setClient({...client, [name]: value})
    }
    const groupItems = props.groups.map((group) => 
    <option key={group.id}>{group.name}</option>)

    console.log(client.group)


    return (
        <form onSubmit={event => {
            event.preventDefault()

            props.updateClient(client.id, client)
        }}
        >
            <label>Name</label>
            <input type="text" name="name" value={client.name} onChange={handleInputChange} />
            <label>email</label>
            <input type="text" name="email" value={client.email} onChange={handleInputChange} />
            <label>Group</label>
            <select value={props.groups.name}  onChange={e =>{const newGroup = e.target.value; setClient(prevState => {
                return {...client, group: newGroup }
            })} }>
                <option>{client.group}</option>
                {groupItems}

            </select>
            <button>Update Client</button>
            <button onClick ={() => props.setEditing(false)} className="button muted-button">Cancel</button>



        </form>
    )
}

export default EditClientForm