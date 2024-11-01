import "./App.css";
import Home from "./pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Consultify - Your Tech Partners</title>
        <meta
           name="description"
           content="Specializing in web development, design, SEO, and social media marketing, we empower businesses with digital strategies that boost brand visibility and drive growth."
         />
         <meta
           name="keywords"
           content="web development services, website design agency, SEO optimization, social media marketing, digital marketing strategy, user experience design, custom website solutions"
         />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
