import { use } from "react"

export default function Users({fetchUsers}){

   const users = use(fetchUsers);

    return(
        <div style={{
            border: '2px solid violet',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}