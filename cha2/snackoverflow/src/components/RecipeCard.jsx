
function RecipeCard(props){
    return(
        <article className="card">
          <h2>{props.name}</h2>
          <p>{ props.minutes} minn - {props.difficulty}</p>
        </article>
    )
}
export default RecipeCard