import "../styles/button.css";
import PropTypes from 'prop-types';

function Button(props) {
    const btnName = props.btnName ?? "Unknow";
    const sound = props.src ?? "";
    console.log(sound);

    const playSound =(sound) => {
        const audio = new Audio(sound);
        audio.play()
    }

    return (
        <>
            <div className="btn-container">
                <button 
                className="btn-sound"
                onClick={() => playSound(sound)}
                >
                </button>
                <p>{btnName}</p>
            </div>
        </>
    )
}

Button.propTypes = {
    btnName: PropTypes.string,
    src: PropTypes.string
};

export default Button;