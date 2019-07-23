import React, {useState} from 'react'



const AddClientForm = props => {
    const initialFormState = {id:null, name:"", email:"", group:<option default>111</option>}

    const [client, setClient] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target
        setClient({...client, [name]:value})
        console.log(client)
     
       
}


const groupItems = props.groups.map((group) => 
    <option key={group.id}>{group.name}</option>)


    return(
        <form 
            onSubmit={event => {
                event.preventDefault()
                if(!client.name || !client.email) return
                props.addClient(client)
                setClient(initialFormState)
                console.log(props.groups)
            }}
            >
            <label>Name</label>
            <input type="text" name="name" value={client.name} onChange={handleInputChange}/>
            <label>Email</label>
            <input type="text" name="email" value={client.email} onChange={handleInputChange} />
            <label>Group</label>
            <select value={props.groups.name}  onChange={handleInputChange}>
                <option default>Select</option>
                {groupItems}
            </select>
            
            

            <button>Add New Client</button>

        </form>
    )
}

export default AddClientForm