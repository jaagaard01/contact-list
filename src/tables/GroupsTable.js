import React from 'react'

const GroupsTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                {/* <th>Contacts</th> */}
                {/* <th></th> */}
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.groups.length > 0 ? (
                props.groups.map(group => (
                <tr key={group.id}>
                    <td>{group.name}</td>
                    {/* <td>{group.contacts.name}</td>
                    <td>{group.contacts.email}</td> */}
                <td>
                    <button onClick = {() => {props.editRow(group)}}  className ="button muted-button">Edit</button>
                    <button onClick={() => props.deleteClient(group.id)} className="button muted-button">Delete</button>
                </td>
            </tr> 
        )) 
            ) : (
                <tr>
                    <td colSpan={3}>No Users</td>
                </tr>
            )}      
        </tbody>    
    </table>
)

export default GroupsTable