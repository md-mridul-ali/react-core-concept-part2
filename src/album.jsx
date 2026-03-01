export default function Album ({album}){

    const {userId, title} = album;

    return(
        <div style={{
            border: '2px solid red',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h3>User ID: {userId}</h3>
            <h4>Title: {title}</h4>
        </div>
    )
}