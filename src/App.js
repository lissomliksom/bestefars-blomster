import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="bg-gray-200 px-2 md:px-8 py-4 md:py-12 min-h-screen">
      <Header />
      <Gallery />
    </div>
  );
};

export default App;
