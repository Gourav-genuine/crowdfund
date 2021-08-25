import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Section1 from './components/Section1';
import Backed from "./components/Backed";
import About from "./components/About";
import Modal from "./components/Modal";
import Header2 from "./components/Header2";
const App = () => {
  return (
    <>
      <Header2 />
      <Showcase />
      {/* <Modal /> */}
      <Section1 />
      <Backed />
      <About />
    </>
  );
}

export default App;
