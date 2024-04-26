import { Footer, Header, Home, Info, News } from "./components";

const App = () => {
  return (
    <div className="w-screen" id="app">
      <Header />
      <Home />
      <Info />
      <News />
      <Footer />
    </div>
  )
};

export default App;
