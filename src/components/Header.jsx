import TrollFace from '../assets/TrollFace.svg'
export default function Header(){
    return (
        <div id = "header">
            <div id = "site-name-conatiner">
                <img src={TrollFace} alt="face" className = "troll-face"/>
                <div className = "site-name">Meme Generator</div>
            </div>
            <div>Generate</div>
        </div>
    )
}