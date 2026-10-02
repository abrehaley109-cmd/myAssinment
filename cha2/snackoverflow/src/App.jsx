import RecipeCard from "./components/RecipeCard";
import Section from "./components/section";
import { recipes } from "./data/recipes";
function App() {
  const cook = "abiabi";

  return (
    <>
      <header className="header">
        <h1>SnackOverflow {"\u{1f373}"}</h1>
        <p>{cook.toUpperCase()}'s kichen</p>
      </header>

      <mian className="page grid">
        <Section title="tonights options">
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
        </Section>
        <Section title="house rules">
          <p>whoever codes, does not wash up</p>
        </Section>
      </mian>
    </>
  );
}

export default App;
