import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --plyr-color-main: hotpink;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background:#000;
    color: #fff;
    padding-top:90px;
    font-family:sans-serif;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: crimson;

    &:hover {
      background-color: #FFCC8F;
    }
  }

.main-title {
  margin-left: 40px;
  margin-bottom: 34px;
}
.container {
  max-width: 1300px;
  margin: 0 auto;
}

.wrapper {
  width: 240px;
  height: 340px;
  background: rgb(24, 24, 24);
  border-radius: 20px;
  overflow: hidden;
}
.footer-wrapper{
  height:250px;
  display: grid;
  place-items: center;
  p{
    font-size: 47px;
  }
}
.wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.grid-wrap {
  width: 100%;
  display: grid;
  place-items: center;
  grid-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
}
.wrapper-page {
  width: 100%;
  display: flex;
  margin-top: 5vh;
  overflow: hidden;
}
.wrap {
  width: 50%;
  height: 900px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 34px;
  overflow: hidden;
  border-radius: 25px;
}

.wrapper-page .wrap img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
}

.wrap .title {
  font-size: 70px;
}

.wrap .description {
  font-size: 27px;
}

.overlay {
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}

h4{
  margin-top:70px;
  margin-bottom: 45px;

  font-size:40px;
}
  a {
    text-decoration: none;
    color: inherit;
  }

  #nprogress .bar {
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet) !important;
    height:6px;
  }

  #nprogress .spinner-icon {
    width: 30px;
    height: 30px;
    border-width: 5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: hotpink;
    border-bottom-color: hotpink;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 0 47px;
  position: relative;
  @media (max-width: 530px) {
    max-width: unset;
    width: 100%;
    padding: 0;
  }
`;

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  height: 250px;
  background: #1f1e1e;
`
