export default function Travel(country) {
    return (
        <article className="Travel">
        <img className="place" src={country.img} alt="place-image"></img>
        <div className="place-info">
            <h2>{country.country}</h2>
            <p className="country-info">{country.description}</p>
            <a href={country.wiki}>Learn more</a>
        </div>
        </article>
    )
}