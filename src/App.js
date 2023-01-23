import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import TopMenu from "./components/header/topMenu/topMenu";
import Main from "./components/main/main";


function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
