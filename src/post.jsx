export default function Post ({post}){


     const {title, body} = post;
    return(
        <div style={{
            border: '2px solid blue',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
            <h3>Title: {title}</h3>
            <p>{body}</p>
        </div>
    )
}