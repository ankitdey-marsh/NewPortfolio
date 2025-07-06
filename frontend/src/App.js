import Frontpage from "./components/Frontpage";
import HangingBanner from "./components/HangingBanner";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <HangingBanner />
      <Frontpage />
      <Navbar/>
    </div>
  );
}

export default App;
