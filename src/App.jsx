import { Article, Client, Contact, Customer, Footer, Header, Hero, Portfolio, Services } from "./modules";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Contact/>
      <Customer/>
      <Portfolio/>
      {/* <Client/> */}
      <Article/>
      <Services/>
      <Footer/>
    </>
  );
}

export default App;
