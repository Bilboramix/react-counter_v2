import "./App.css";
import AddCounterButton from "./components/AddCounterButton";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStopwatch, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faMinus, faPlus);

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <AddCounterButton />
      </main>
      <Footer />
    </div>
  );
};

export default App;
