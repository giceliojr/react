import "./Card.css"

export default props => {
const cardStyle = {
    backgroundColor : props.color || "red",
    borderColor : props.color || "red",
}

    return (
        <div className="Card" style={cardStyle}>
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo">{props.children}</div>
        </div>
    )
}