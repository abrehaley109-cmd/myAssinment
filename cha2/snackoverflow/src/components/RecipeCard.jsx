
function RecipeCard({name, minutes, difficulty = "hard", veggie}){
    return(
        <article className="card">
            {veggie && <span className="badge">🌱 veggie</span>}
          <h2>{name}</h2>
          <p>{ minutes <= 20 ? "⚡": "⏳"} {minutes} min - {difficulty}</p>
        </article>
    )
}
export default RecipeCard