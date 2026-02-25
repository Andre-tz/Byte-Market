import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-orange-500 h-screen">
        <header>
            <Header/>
        </header>
        <main></main>
        <footer>
            <Footer/>
        </footer>
    </div>
  );
};

export default App;
