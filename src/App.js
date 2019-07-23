import React, {useState} from 'react';
import ContactTable from './tables/ContactsTable'
import AddClientForm from './forms/AddClientForm'
import EditClientForm from './forms/EditClientForm'
import GroupsTable from './tables/GroupsTable'


function App() {
// client data 
  const clientData = [
    {id:1, name: "John Aagaard", email: "j_aagaard@yahoo.com", group:{name:"favorites", id:1}},
    {id:2, name: "Steve Aagaard", email: "t_aagaard@yahoo.com",group: ""},
    {id:3, name: "Santa Aagaard", email: "z_aagaard@yahoo.com",group: ""}
  ]  

  const initialFormState = {id: null, name:"", email: "", group:""}


  const [clients, setClients] = useState(clientData)
  const [editing, setEditing] = useState(false)


  // CRUD for Contacts
  const addClient = client => {
    client.id = clients.length + 1
    setClients([...clients, client])
  }

  const deleteClient = id => {
    setClients(clients.filter(client => client.id !== id))
  }

  const [currentClient, setCurrentClient] = useState(initialFormState)

  const editRow = client => {
    setEditing(true)
    setCurrentClient({id: client.id, name: client.name, email: client.email, group: groups.name})
  }
  
  const updateClient = (id, updatedClient) => {
    setEditing(false)
    setClients(clients.map(client => (client.id ===id ? updatedClient : client)))
  }



  // group data 
  const groupData = [
    {id:1, name:"favorites",}
  ]

  const initialFormGroupState = {id: null, name:""}

  const [groups, setGroups] = useState(groupData)
  const [editingGroup, setEditingGroup] = useState(false)




  // CRUD for Groups 
const addGroup = group => {
  group.id = groups.length + 1 
  setGroups([...groups, group])
}

const deleteGroup = id => {
  setGroups(groups.filter(group => group.id !== id))
}

const [currentGroup, setCurrentGroup] = useState(initialFormGroupState)

const editGroup = group => {
  setEditingGroup(true)
  setCurrentGroup({id: group.id, name: group.name})
}

const updateGroup = (id, updatedGroup) => {
  setEditingGroup(false)
  setGroups(groups.map(group=>(group.id === id ? updatedGroup: group )))
}
  



  return (
      <div className="container">
        <h1>Contact's List</h1>
        <div className="flex-row">
        <div className="flex-large">
            {editing ? (
              <div>
              <h2>Edit user</h2>
              <EditClientForm
                editing={editing}
                setEditing={setEditing}
            currentClient={currentClient}
            updateClient={updateClient}
              />
           </div>
      ) : (
        <div>
          <h2>Add user</h2>
          <AddClientForm addClient={addClient} groups={groups} />
        </div>
      )}
     
</div>

          <div className="flex-large">
            <h2>View Contacts</h2>
            <ContactTable clients={clients} deleteClient={deleteClient} editRow={editRow} groups={groups}></ContactTable>
          </div>
          
          
        </div>

                  {/*  groups part below  */}
        <h1>Groups</h1>
        <div className="flex-row">
        <div className="flex-large">
            {editing ? (
              <div>
              <h2>Edit Group</h2>
              <EditClientForm
                editing={editing}
                setEditing={setEditing}
            currentClient={currentClient}
            updateClient={updateClient}
              />
           </div>
      ) : (
        <div>
          <h2>Add Group</h2>
          <AddClientForm addClient={addClient} groups={groups}/>
        </div>
      )}
     
</div>

          <div className="flex-large">
            <h2>View Groups</h2>
            <GroupsTable groups={groups} deleteClient={deleteClient} editRow={editRow}></GroupsTable>
          </div>
          
          
        </div>
      </div>
  );
}

export default App;
