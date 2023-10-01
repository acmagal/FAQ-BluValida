import logo from "../assets/logoheader.svg";
import React from "react";
import questions from "../Faq.json";
import questions2 from "../Faq2.json";
import Banner from "../Banner";
import playStoreFooter from "../assets/playstoreFooter.svg";
import appleFooter from "../assets/appleStoreFooter.svg";

import {
  Header,
  HeaderButtonsdiv,
  HeaderButton,
  Dash,
  ImgWrapper,
  LoginButton,
  Root,
  Header2,
  Footer,
  SummaryWrapper,
  SummaryTitle,
} from "./Home.jsx";
function Home() {
  return (
    <Root>
      <Header>
        <ImgWrapper>
          <img
            src={logo}
            alt="logo Blu"
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
          />
        </ImgWrapper>

        <HeaderButtonsdiv>
          <HeaderButton
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0",
                "__blank"
              )
            }
            className="Go"
          >
            Contato
          </HeaderButton>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            Página Inicial
          </HeaderButton>
          <Dash>|</Dash>
          <HeaderButton
            onClick={() => window.open("https://bluvalida.com.br/", "__blank")}
            className="Go"
          >
            <LoginButton>Login</LoginButton>
          </HeaderButton>
        </HeaderButtonsdiv>
      </Header>

      <Header2>
        <span>Dúvidas?</span>
        <span>Nós respondemos!</span>
      </Header2>
      <SummaryWrapper>
        <SummaryTitle>Sobre minha conta BluValida:</SummaryTitle>
      </SummaryWrapper>

      <Banner>
        {questions.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
      </Banner>

      <SummaryWrapper>
        <SummaryTitle>Comunicação com o banco:</SummaryTitle>
      </SummaryWrapper>

      <Banner>
        {questions2.map((question) => (
          <Banner.Entity key={question.id}>
            <Banner.Question>{question.question}</Banner.Question>
            <Banner.Text>{question.answer}</Banner.Text>
          </Banner.Entity>
        ))}
      </Banner>

      <Footer>
        Blu Valida 2022. Todos os direitos reservados.
        <p>Precisa de mais ajuda?</p>
        <p>
          Entre em contato com nosso canal de{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=558597230019&text&type=phone_number&app_absent=0"
            target="__blank"
          >
            Suporte
          </a>
          !
        </p>
        <div>
          Download:
          <a
            target="__blank"
            href="https://play.google.com/store/apps/details?id=com.blu.bluvalida"
          >
            <img src={playStoreFooter} alt="googleFooter" />
          </a>
          <img src={appleFooter} alt="appleFooter" />
        </div>
      </Footer>
    </Root>
  );
}

export default Home;
