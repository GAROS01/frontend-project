import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { supabase } from "../services/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import { sendTokenToBackend } from "../services/api/apiAuth.js";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw Error("Error logging in with Google");
      setUser(data.user);
      // const token = data.session?.access_token;
      // console.log("token", token);

      // if (token) {
      //   // Send the token to the backend
      //   sendTokenToBackend(token);
      // }
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw Error("Error logging out");
      setUser(null);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("supabase event: ", event);
        if (session == null) {
          navigate("/", { replace: true });
        } else {
          setUser(session?.user.user_metadata);
          const token = session?.access_token;
          console.log("data del usuario", session?.user.user_metadata);
          console.log("token", token);

          if (token) {
            // Send the token to the backend
            sendTokenToBackend(token);
          }
          navigate("/calendar", { replace: true });
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.displayName = "AuthProvider";

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
