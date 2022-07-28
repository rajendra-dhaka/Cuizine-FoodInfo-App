import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Searched() {
  //STATE
  const [searchedRecipes, setsearchedRecipes] = useState([]);

  //PARAMS
  let params = useParams();

  //DATA FETCH
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setsearchedRecipes(recipes.results);
  };

  //USEEFFECT
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <StyledGrid>
      {searchedRecipes.map((item) => {
        return (
          <StyledCard key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </StyledCard>
        );
      })}
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const StyledCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;
