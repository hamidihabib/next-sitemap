import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function FourHundredFour() {
  const Div = styled.div`
    position: relative;
    top: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    p {
      padding: 10px;
    }
    button {
      color: var(--text-invert);
      background-color: var(--hyperlink);
      padding: 10px 20px;
      border: solid 0px transparent;
      border-radius: 20px;
    }
  `;

  return (
    <Div>
      <a href="/">
        <button>404</button>
      </a>
    </Div>
  );
}
