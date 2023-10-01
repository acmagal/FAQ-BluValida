import styled from "styled-components";

export const Root = styled.div`
  background-color: #cccccc;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  font-family: "Figtree", sans-serif;
  overflow: hidden;
  @media (max-width: 1000px) {
    min-width: 100vw;
  }
`;
export const Header = styled.div`
  width: 100vw;
  height: 12vh;
  background-color: #1d2b4e;
  -webkit-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 21px 2px rgba(0, 0, 0, 0.75);
  font-size: 45px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 9px;
  color: white;
  position: fixed;
  z-index: 1;

  img {
    height: 50px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    font-size: 33px;
  }

  @media (max-width: 1200px) {
    font-size: 33px;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 15px;
    padding-top: 20px;
  }

  @media (max-width: 360px) {
    gap: 5px;
    display: flex;
    flex-direction: column;
  }
`;
export const Header2 = styled(Header)`
  position: relative;
  z-index: 0;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    146deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(29, 43, 78, 1) 50%,
    rgba(43, 69, 133, 1) 100%
  );
  height: 30vh;
  margin-top: 100px;
  justify-content: space-around;
  span {
    font-size: 50px;
    color: white;

    @media (max-width: 1200px) {
      padding-top: 40px;
      font-size: 40px;
    }
  }
`;

export const ImgWrapper = styled.div`
  padding-right: 650px;

  @media (max-width: 1200px) {
    padding-right: 0px;
    padding-bottom: 10px;
  }
`;

export const HeaderButtonsdiv = styled.div`
  display: flex;
  gap: 60px;

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 400px) {
    gap: 10px;
    flex-wrap: nowrap;
    align-items: flex-start;
  }
`;

export const Dash = styled.div`
  font-size: 25px;
  font-weight: 500;
  color: white;
`;

export const LoginButton = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const HeaderButton = styled.button`
  border: none;
  background: none;
  color: white;
  font-size: 19px;
  font-weight: 500;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  :active {
    transform: translateY(4px) scale(1.1);
  }

  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const SummaryTitle = styled.div`
  color: #1d2b4e;
  font-size: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  @media (max-width: 1200px) {
    width: 90vw;
  }
`;

export const Footer = styled.div`
  background: #1d2b4e;
  width: 100vw;
  margin-top: 100px;
  padding-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 14px;
  height: 40px;

  a {
    text-decoration: underline;
    cursor: pointer;
    color: white;
    :hover {
      transform: scale(1.1);
    }
    :active {
      transform: translateY(4px) scale(1.1);
    }
    :visited {
      color: white;
    }
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    img {
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
      :active {
        transform: translateY(4px) scale(1.1);
      }
    }
  }

  @media (max-width: 1200px) {
    font-size: 15px;
    flex-direction: column;
    padding-top: 25px;
    height: 20vh;

    p {
      font-size: 14px;
      margin-bottom: 0px;
    }
  }
`;

/**/
export const Container = styled.div`
  display: flex;
  width: 100vw;
`;
export const Entity = styled.div`
  width: 90vw;
  margin-bottom: 10px;
  margin: auto;

  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  font-weight: normal;
  background: white;
  padding: 0.75em 1.12em;
  align-items: center;
  border-radius: 15px;
  font-size: 25px;
  font-weight: 600;
  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.75);
`;
export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  background-color: white;
  border-radius: 15px;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
