import React from 'react'
import GroupsTable from './GroupsTable';

const ContactTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
                <th>Group</th>
                
            </tr>
        </thead>
        <tbody>
            {props.clients.length > 0 ? (
                props.clients.map(client => (
                <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                <td>
                    <button onClick = {() => {props.editRow(client)}}  className ="button muted-button">Edit</button>
                    <button onClick={() => props.deleteClient(client.id)} className="button muted-button">Delete</button>
                </td>
                <td>
                    {props.groups.name}
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

export default ContactTable