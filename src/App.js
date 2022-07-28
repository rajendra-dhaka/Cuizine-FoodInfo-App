import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StyledNav>
          <GiKnifeFork />
          <StyledLogo to={"/"}>Cuizine</StyledLogo>
        </StyledNav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const StyledLogo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const StyledNav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export default App;
