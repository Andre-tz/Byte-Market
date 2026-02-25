import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
