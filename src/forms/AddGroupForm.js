import React, {useState} from 'react'



const AddGroupForm = props => {
    const initialFormState = {id:null, name:"", }

    const [groups, setGroups] = useState(initialFormState)

    const handleInputChange = event => {
        const {name, value} = event.target
        setGroups({...groups, [name]:value})
       
     
       
}





    return(
        <form 
            onSubmit={event => {
                event.preventDefault()
                // if(!groups.name || !groups.id) return
                props.addGroup(groups)
                setGroups(initialFormState)
                
            }}
            >
            <label>Name</label>
            <input type="text" name="name" value={groups.name} onChange={handleInputChange}/>
            {/* <label>Email</label>
            <input type="text" name="email" value={client.email} onChange={handleInputChange} />
            <label>Group</label>
            <select value={props.groups.name}  onChange={handleInputChange}>
                <option default>Select</option>
                {groupItems}
            </select> */}
            
            

            <button>Add New Group</button>

        </form>
    )
}

export default AddGroupForm