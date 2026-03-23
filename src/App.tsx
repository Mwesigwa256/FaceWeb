import { Router, Route } from "@solidjs/router";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ShowsPage from "./pages/ShowsPage"
import ContactPage from "./pages/ContactPage";

function App() {
  return <Router root={MainLayout}>
      <Route path="/" component={() => <HomePage />} />
      <Route path="/about" component={() => <AboutPage />} />
      <Route path="/show" component={()=> <ShowsPage/>} />
      <Route path="/contact" component={()=> <ContactPage/>} />
    </Router>;
}

export default App;