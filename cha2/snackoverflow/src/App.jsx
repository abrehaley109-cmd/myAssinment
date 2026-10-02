import RecipeCard from "./components/RecipeCard";
import Section from "./components/section";
import { recipes } from "./data/recipes";
function App() {
  const cook = "Aspiring react developer";

  return (
    <>
      <header className="header">
        <h1>Abiabi Mengsteab {"\u{1f373}"}</h1>
        <p>{cook}</p>
      </header>

      <mian className="page grid">
        <section title="about me">
          <div className="grid">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                name={recipe.name}
                minutes={recipe.minutes}
                difficulty={recipe.difficulty}
                veggie={recipe.veggie}
              />
            ))}
          </div>
        </section>
        <Section title="house rules">
          <p>whoever codes, does not wash up</p>
        </Section>
      </mian>
    </>
  );
}

export default App;
