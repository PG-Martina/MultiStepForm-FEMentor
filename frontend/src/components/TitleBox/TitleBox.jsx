import './_title-box.scss'

function TitleBox({ title, desc }) {
    return(
        <div className="title-box">
            <h2>{title}</h2>
            {desc && <p>{desc}</p>}
        </div>
    )
}

export default TitleBox;