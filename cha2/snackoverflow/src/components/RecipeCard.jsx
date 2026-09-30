
function RecipeCard({name, minutes, difficulty = "hard"}){
    return(
        <article className="card">
          <h2>{name}</h2>
          <p>{ minutes} minn - {difficulty}</p>
        </article>
    )
}
export default RecipeCard