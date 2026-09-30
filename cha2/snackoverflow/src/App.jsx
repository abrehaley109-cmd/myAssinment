import RecipeCard from "./components/RecipeCard";

function App() {
  const cook = "abiabi";


  return (
    <>
      <header className="header">
        <h1>SnackOverflow {"\u{1f373}"}</h1>
        <p>{cook.toUpperCase()}'s kichen</p>
      </header>

      <mian className="page grid">
       <RecipeCard name="midnight toastie" minutes={15}/>
       <RecipeCard name="noodles" minutes={20} difficulty="easy"/>
       <RecipeCard name="shiro" minutes={30} difficulty="medium"/>
      </mian>
    </>
  );
}

export default App;
