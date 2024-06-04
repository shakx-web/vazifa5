import { Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./companents/navbar";

function App() {
  const navigateTo = (path) => {
    return <Navigate to={path} />;
  };

  const refreshPage = () => {
    window.location.reload();
  };

  setTimeout(() => {
    localStorage.removeItem("creatUser");
    refreshPage();
  }, 15000);

  const state = localStorage.getItem("creatUser");

  return (
    <>
      {state === "true" && state !== null ? (
        <header>
          <nav className="max-w-[100%]">
            <Navbar />
          </nav>
        </header>
      ) : (
        navigateTo("/login")
      )}
    </>
  );
}

export default App;
