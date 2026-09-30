function App() {
  const cook = "abiabi";
  const photoUrl =
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800";

  return (
    <>
      <header className="header">
        <h1>SnackOverflow {"\u{1f373}"}</h1>
        <p>{cook.toUpperCase()}'s kichen</p>
      </header>

      <mian className="page">
        <img className="hero" src={photoUrl} alt={`${cook}'s kitchen`} />

        <p>tonight's special: whatever compliets.</p>
      </mian>
    </>
  );
}

export default App;
