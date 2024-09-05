import Routes from "./routes/routes";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </>
  );
}
