import RecipeCard from "./components/RecipeCard";
import Section from "./components/section";
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
          <RecipeCard name="midnight toastie" minutes={15} />
          <RecipeCard name="noodles" minutes={20} difficulty="easy" />
          <RecipeCard name="shiro" minutes={30} difficulty="medium" />
        </Section>
        <Section title="house rules">
          <p>whoever codes, does not wash up</p>
        </Section>
      </mian>
    </>
  );
}

export default App;
