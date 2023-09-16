import {useState, useEffect} from 'react'

export default function Main(){
    const [meme, setMeme] = useState({
        upperText : "",
        bottomText : "",
        image : "http://i.imgflip.com/1bij.jpg"
    })

    const [memeArray, setMemeArray] = useState([])
    function updateMeme(event){
        const {name, value} = event.target
        setMeme(prevText => {
            return {
                ...prevText,
                [name] : value
            }
        })
    }

    function updateMeme(event){
        const {name, value} = event.target
        setMeme(prevText => {
            return {
                ...prevText,
                [name] : value
            }
        })
    }

    function fetchImage(){
        const index = parseInt(Math.random() * memeArray.length)
        setMeme(prev => {
            return {
                ...prev, 
                image : memeArray[index].url
            }
        })
    }

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setMemeArray(data.data.memes))
    }, [])

    return (
        <main>
            <div id = "input-container">
                <input
                    type="text"
                    name = "upperText"
                    placeholder="Upper Text"
                    value = {meme.upperText}
                    onChange = {updateMeme}
                />
                <input
                    type="text"
                    name = "bottomText"
                    placeholder="Bottom Text"
                    value = {meme.bottomTextText}
                    onChange = {updateMeme}
                />
            </div>
            <button
                id = "fetch-button"
                onClick = {fetchImage}
            >
                Get a new meme image🖼️
            </button>
            <div id = "meme">
                <img src = {meme.image} alt = "meme image" id = "meme-image"/>
                <h1 id = "upperText" className = "top">{meme.upperText}</h1>
                <h1 id = "bottomText" className = "bottom">{meme.bottomText}</h1>
            </div>
        </main>
    )
}