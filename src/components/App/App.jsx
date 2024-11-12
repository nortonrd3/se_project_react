import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Footer />
        <Main />
      </div>
    </div>
  );
}

export default App;
