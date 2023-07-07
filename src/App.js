import "./App.css";
import Banner from "./components/Banner";
import Pt2 from "./components/Pt2";
import Pt3 from "./components/Pt3";
import Pt4 from "./components/Pt4";
import Pt5 from "./components/Pt5";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Footer2 from "./components/Foot2";
function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />
      <Pt2 />
      <Pt3 />
      <Pt5 />
      <Pt4 />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
