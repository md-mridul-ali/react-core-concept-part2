import { use } from "react"
import Album from "./album";

export default function Albums ({albumPromise}){

    const albums = use(albumPromise);
    // console.log(albums)

    return(
        <div style={{
            border: '2px solid green',
            borderRadius: '20px',
            marginBottom: '10px',
            padding: '20px'
        }}>
           <h3>Albums: {albums.length}</h3>
           {
            albums.map(album => <Album key={album.id} album={album}></Album>)
           }
        </div>
    )
}