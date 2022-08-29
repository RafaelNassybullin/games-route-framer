import { NextComponentType } from "next";
import Link from "next/link";
import styled from "styled-components";

const genres: string[] = ["survival", "arcade", "racing"];

export const Navigation: NextComponentType = () => {
  return (
    <Nav>
      <div className="container">
        <Wrapper>
          <Link href="/">
            <a>
              <LogoWrapper>
                <Logo>
                  <img
                    src="https://pngimg.com/uploads/gamepad/gamepad_PNG39.png"
                    alt="logo"
                  />
                </Logo>
                <h1>Games</h1>
              </LogoWrapper>
            </a>
          </Link>
          <div>
            <ul>
              {genres.map((genre: string) => (
                <Link key={genre} href={`/category/${genre}`}>
                  <a>
                    <li>{genre}</li>
                  </a>
                </Link>
              ))}
            </ul>
          </div>
        </Wrapper>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #3232323d;
  backdrop-filter: blur(30px);
  z-index: 2;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  width: 100%;
  height: 45px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 35px;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      margin-left: 15px;
      font-size: 20px;
      cursor: pointer;
      text-transform: capitalize;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
