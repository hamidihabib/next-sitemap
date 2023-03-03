import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Container = styled.div`
  display: flex;
  border-bottom: solid 1px var(--border);
  align-items: center;
  justify-content: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 90%;
`;
const Logo = styled.div`
  display: flex;
  cursor: pointer;
  flex-grow: 1;
`;
const Menu = styled.menu`
  display: flex;
  flex-grow: 5;
  ul {
    display: flex;
    li {
      list-style: none;
      a {
        display: flex;
        span {
          padding: 10px;
          border-top: 3px solid transparent;
          border-bottom: solid 3px transparent;
          font-weight: 100;
        }
      }
      a:hover span {
        opacity: 0.5;
      }
    }
  }
`;
const Space = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    display: flex;
    padding: 10px 5px;
    font-weight: 100;
    svg {
      color: var(--text);
    }
  }
`;
const Login = styled.nav`
  display: flex;
  a {
    display: flex;
    span {
      padding: 10px;
      font-weight: 100;
    }
  }
`;

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const menu = [
    { title: "Home", url: "/" },
    { title: "Contact", url: "/contact" },
    { title: "About", url: "/about" },
    { title: "News", url: "/news" },
  ];

  const path = useRouter().asPath;

  return (
    <Container>
      <Nav>
        <Logo>
          <Link href="/">
            <h3>Logo</h3>
          </Link>
        </Logo>
        <Menu>
          <ul>
            {menu.map((i) => (
              <li key={menu.indexOf(i)}>
                <Link href={i.url}>
                  <a>
                    <span
                      style={
                        path == i.url
                          ? {
                              borderBottomColor: "var(--primary-base)",
                              color: "var(--hyperlink)",
                            }
                          : {}
                      }
                    >
                      {i.title}
                    </span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Menu>
        <Space />
        <Switch onClick={() => setTheme(theme == "light" ? "dark" : "light")}>
          <span>Theme</span>
          <span>
            <svg
              style={{ display: theme == "dark" ? "block" : "none" }}
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              style={{ display: theme == "dark" ? "none" : "block" }}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.742,13.045c-0.677,0.18-1.376,0.271-2.077,0.271c-2.135,0-4.14-0.83-5.646-2.336c-2.008-2.008-2.799-4.967-2.064-7.723 c0.092-0.345-0.007-0.713-0.259-0.965C10.444,2.04,10.077,1.938,9.73,2.034C8.028,2.489,6.476,3.382,5.241,4.616 c-3.898,3.898-3.898,10.243,0,14.143c1.889,1.889,4.401,2.93,7.072,2.93c2.671,0,5.182-1.04,7.07-2.929 c1.236-1.237,2.13-2.791,2.583-4.491c0.092-0.345-0.008-0.713-0.26-0.965C21.454,13.051,21.085,12.951,20.742,13.045z M17.97,17.346c-1.511,1.511-3.52,2.343-5.656,2.343c-2.137,0-4.146-0.833-5.658-2.344c-3.118-3.119-3.118-8.195,0-11.314 c0.602-0.602,1.298-1.102,2.06-1.483c-0.222,2.885,0.814,5.772,2.89,7.848c2.068,2.069,4.927,3.12,7.848,2.891 C19.072,16.046,18.571,16.743,17.97,17.346z"></path>
            </svg>
          </span>
        </Switch>
        <Login>
          <Link href="/login">
            <a>
              <span>Login</span>
            </a>
          </Link>
        </Login>
      </Nav>
    </Container>
  );
}
