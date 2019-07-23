import React, {useState, useEffect} from 'react'


const EditGroupForm = props => {
    const [groups, setGroups] = useState(props.currentGroup)

    useEffect(
        () => {
            setGroups(props.currentGroup)
        },
        [props]
    )

    const handleInputChange = event => {
        const {name, value} = event.target

        setGroups({...groups, [name]: value})
    }


    return (
        <form onSubmit={event => {
            event.preventDefault()

            props.updateGroup(groups.id, groups)
        }}
        >
            <label>Name</label>
            <input type="text" name="name" value={groups.name} onChange={handleInputChange} />
        
            <button>Update Group</button>
            <button onClick ={() => props.setEditingGroup(false)} className="button muted-button">Cancel</button>



        </form>
    )
}

export default EditGroupForm