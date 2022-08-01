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
  padding: 1.5rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 3rem;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    svg {
      font-size: 2rem;
    }
  }
`;

export default App;

// Api-8415a2a7ec0a43c59f00470d59875510  & 82916f17d0da48f5b5bd542b54eab597
