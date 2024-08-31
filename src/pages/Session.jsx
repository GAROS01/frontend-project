import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Session() {
  return (
    <div>
      <Nav />
      <Header />
      <h1>Session</h1>
      <p>
        This is the session page. This is where the user will be able to log in
        and out of their account.
      </p>
      <Footer />
    </div>
  );
}
