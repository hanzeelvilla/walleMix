import "../styles/button.css";

function Button(props) {
    const btnName = props.btnName ?? "Unknow";
    return (
        <>
            <div className="btn-container">
                <button className="btn-sound"></button>
                <p>{btnName}</p>
            </div>
        </>
    )
}

export default Button;