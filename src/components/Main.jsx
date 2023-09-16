import {useState} from 'react'

export default function Main(){
    const [meme, setMeme] = useState({
        upperText : "",
        bottomText : "",
        image : "http://i.imgflip.com/1bij.jpg"
    })

    function updateMeme(event){
        const {name, value} = event.target
        setMeme(prevText => {
            return {
                ...prevText,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div id = "input-container">
                <input
                    type="text"
                    name = "upperText"
                    placeholder="Upper Text"
                    onChange = {updateMeme}
                />
                <input
                    type="text"
                    name = "bottomText"
                    placeholder="Bottom Text"
                    onChange = {updateMeme}
                />
            </div>
            <button
                id = "fetch-button"
            >
                Get a new meme image🖼️
            </button>
            <div id = "meme">
                <img src = "http://i.imgflip.com/1bij.jpg" alt = "meme image" id = "meme-image"/>
                <h1 id = "upperText" className = "top">{meme.upperText}</h1>
                <h1 id = "bottomText" className = "bottom">{meme.bottomText}</h1>
            </div>
        </main>
    )
}