import Nav from "../components/Nav.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <h1>Home</h1>
      <p>
        This is the home page. This is where the user will be able to view
        information about the website.
      </p>
      <Footer />
    </div>
  );
}
