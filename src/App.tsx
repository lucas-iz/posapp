import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1>Hello</h1>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  } as React.CSSProperties,
};

export default App;
