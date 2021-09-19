import styled from "styled-components";

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled.div`
  margin-bottom: 1rem;
  font-weight: 400;

  width: 75%;

  h2 {
    padding-bottom: 2rem;
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: -0.91px;
    color: var(--main-text-color);
    margin: 0px;
  }
  h3 {
    margin-top: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    margin-top: 2rem;
    text-align: center;
    padding-right: 0;
    width: 80%;
    p {
      font-size: 1.2rem;
    }
  }
`;

export const Card = styled.div`
  min-height: 7.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  -moz-box-pack: justify;
  justify-content: space-between;

  background-color: rgb(255, 255, 255);
  border-radius: 0.375rem;
  border: 1px solid #9e9e9e33;

  cursor: pointer;
  transition: all 150ms ease-in-out;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    min-height: 1rem;
    width: 85%;
    padding: 0.5rem 1rem 0.5rem 0.375rem;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 16px;
    transform: translateY(-2px);
  }

  p {
    padding: none;
    font-size: 1rem;
  }
`;

export const SvgIcon = styled.img`
  @media (max-width: 576px) {
    margin-right: 0.375rem;
    height: 2rem;
    width: 2rem;
  }
  height: 3rem;
  width: 3rem;
`;

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(170px, 2fr));
  margin-top: 1rem;
`;
