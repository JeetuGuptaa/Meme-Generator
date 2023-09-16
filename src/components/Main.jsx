export default function Main(){
    
    return (
        <main>
            <div id = "input-container">
                <input
                    type="text"
                    name = "upperText"
                    placeholder="Upper Text"
                />
                <input
                    type="text"
                    name = "bottomText"
                    placeholder="Bottom Text"
                />
            </div>
            <button
                id = "fetch-button"
            >
                Get a new meme image🖼️
            </button>
            <div id = "meme">
                <img src = "http://i.imgflip.com/1bij.jpg" alt = "meme image" id = "meme-image"/>
                <h1 id = "upperText" className = "top">Upper Text</h1>
                <h1 id = "bottomText" className = "bottom">Bottom Text</h1>
            </div>
        </main>
    )
}