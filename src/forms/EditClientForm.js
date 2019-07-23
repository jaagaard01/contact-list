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
            <button>Update Client</button>
            <button onClick ={() => props.setEditing(false)} className="button muted-button">Cancel</button>



        </form>
    )
}

export default EditClientForm