import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

function Veggie() {
  let number;
  //STATE
  const [veggie, setVeggie] = useState([]);

  //USE EFFECT
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    // LOCAL STORAGE TO SAVE NO. OF FETCH REQUEST ON PAGE REFRESH
    // const check = localStorage.getItem("veggie");
    // if (check) {
    //   setVeggie(JSON.parse(check));
    // } else {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    // console.log(data); // data.recipes gives an array of 9 objects
    // localStorage.setItem("veggie", JSON.stringify(data.recipes));
    setVeggie(data.recipes);
    // }
  };

  return (
    <StyledWrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <StyledCard>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <StyledGradient />
                </Link>
              </StyledCard>
            </SplideSlide>
          );
        })}
      </Splide>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin: 1rem 0rem;
  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

const StyledCard = styled.div`
  border-radius: 2rem;
  overflow: hiddden;
  position: relative;
  width: 17.5rem;
  height: 15rem;
  @media (max-width: 1210px) {
    width: 14rem;
    height: 13rem;
  }
  @media (max-width: 970px) {
    width: 10rem;
    height: 9rem;
  }
  @media (max-width: 670px) {
    width: 8rem;
    height: 7rem;
  }
  @media (max-width: 535px) {
    width: 7.3rem;
    height: 6.3rem;
  }
  @media (max-width: 480px) {
    width: 7rem;
    height: 6rem;
  }
  @media (max-width: 375px) {
    width: 5.5rem;
    height: 5rem;
  }

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.9rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      font-size: 0.3rem;
    }
    @media (max-width: 970px) {
      font-size: 0.5rem;
    }
  }
`;

const StyledGradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
