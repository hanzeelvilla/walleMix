import "../styles/button.css";
import { useState } from "react";

const [audioInstance, setAudioInstance] = useState(null);

const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
    setAudioInstance(audio)
}

const stopSound = () => {
    if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
    }
}

function Button(props) {
    const btnName = props.btnName ?? "Unknow";
    const sound = props.src ?? "";

    return (
        <>
            <div className="btn-container">
                <button 
                className="btn-sound"
                onMouseDown={playSound(sound)}  // PC
                onMouseUp={stopSound}           // PC
                onTouchStart={playSound(sound)} // Mobile
                onTouchEnd={stopSound}          // Mobile
                >
                </button>
                <p>{btnName}</p>
            </div>
        </>
    )
}

export default Button;