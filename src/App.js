import { GlobalStyles } from "./global.styles";
import NavigationBar from "./components/NavBar/NavigationBar";
import MainHeader from "./components/LandingPage/MainHeader";
import MainContainer from "./components/UrlShorrtening/MainContainer";
import Statistics from "./components/AdvancedStatistics/Statistics";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <GlobalStyles />
      <NavigationBar />
      <MainHeader />
      <MainContainer />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
