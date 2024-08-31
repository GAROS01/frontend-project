import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Calendar() {
  return (
    <div>
      <Nav />
      <Header />
      <h1>Calendar</h1>
      <p>
        This is the calendar page. This is where the user will be able to view
        their calendar.
      </p>
      <Footer />
    </div>
  );
}
