import { getImageUrl } from "./utils.js"

export default function News({title, description, image, link}){
    const imageURL = getImageUrl(image);
    return <div className = "container">
        <div className = "image">
            <img src = {imageURL}></img>
        </div>
        <div className = "content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => window.open(link, '_blank')} >Read More</button>
        </div>
    </div>
}
