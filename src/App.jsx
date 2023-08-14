import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { UserContext } from "./providers/UserContexts";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      <GlobalStyle />
      {loading ? (
        <div className="loadingContainer">
          <div className="loading" />
        </div>
      ) : (
        <RoutesMain />
      )}
    </>
  );
}


