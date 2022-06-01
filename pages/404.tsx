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
  `;

  return (
    <Div>
      <h1>404</h1>
    </Div>
  );
}
