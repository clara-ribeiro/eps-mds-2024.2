import styles from "./App.module.css";
import  {Navbar}  from "./componentes/Navbar/Navbar";
import  {Apresentacao}  from "./componentes/Apresentacao/Apresentacao";
import  {Sobre}  from "./componentes/Sobre/Sobre";
import  {Experiencia}  from "./componentes/Experiencia/Experiencia";



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Apresentacao />
      <Sobre />
      <Experiencia />
    
    </div>
  );
}

export default App;
