import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
