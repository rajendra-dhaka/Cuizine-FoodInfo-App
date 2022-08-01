import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

//STATE
function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  //PARAMS
  let params = useParams();

  //DATA FETCH
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  //USEEFFECT
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <StyledGrid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
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

const StyledGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
  @media (max-width: 560px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 0.5rem;
  }
  @media (max-width: 435px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 0.3rem;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 18rem));
    grid-gap: 0.3rem;
  }
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
    padding: 1rem 1rem;
    @media (max-width: 400px) {
      font-size: 0.7rem;
      padding: 0.5rem 0.5rem;
    }
  }
`;

export default Cuisine;
