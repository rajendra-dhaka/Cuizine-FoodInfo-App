import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  //STATE
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  //PARAMS
  let params = useParams();

  const fetchDetails = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  //USEEFFECT
  useEffect(() => {
    fetchDetails(params.id);
  }, [params.id]);

  return (
    <StyledDetailWrapper>
      <div className="img-div">
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <StyledInfo>
        <StyledButton
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </StyledButton>
        <StyledButton
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </StyledButton>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((Ingredient) => {
              return <li key={Ingredient.id}>{Ingredient.original}</li>;
            })}
          </ul>
        )}
      </StyledInfo>
    </StyledDetailWrapper>
  );
}

const StyledDetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  .img-div {
    flex: 1;
  }
  img {
    width: 25rem;
    border: 0.5px solid lightgray;
    border-radius: 2rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    font-size: 0.8rem;
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background: #fff;
  border: 1px solid black;
  margin-right: 2rem;
  font-weight: 500;
  margin-top: 1rem;
`;

const StyledInfo = styled.div`
  flex: 2;
  margin-left: 2rem;
  @media (max-width: 629px) {
    margin-left: 1rem;
  }
`;

export default Recipe;
