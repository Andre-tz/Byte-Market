import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
