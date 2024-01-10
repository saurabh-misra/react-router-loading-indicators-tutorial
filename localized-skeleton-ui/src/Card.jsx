export default function Card({ photo, title, text, link }) {
    return (
        <div className="card actual" style={{ width: "300px" }}>
            <img src={photo} className="card-img-top" alt="" />

            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={link} className="btn btn-primary stretched-link" target="_blank" rel="noreferrer">Know More</a>
            </div>
        </div>
    );
}