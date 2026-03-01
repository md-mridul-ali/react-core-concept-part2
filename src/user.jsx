export default function User ({user}){

    // console.log(user);

    const {name, email, phone, website} = user;
    return(
        <div style={{
            border: '2px solid gold',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    )
}