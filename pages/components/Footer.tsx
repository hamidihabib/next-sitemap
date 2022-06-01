import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.footer`
    font-weight: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: solid 1px var(--border);
    padding: 20px;
    background-color: var(--code-block);
    div {
      width: 90%;
      padding-bottom: 20px;
    }
  `;
  const InfoFooter = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    color: var(--text);
    div {
      display: flex;
      align-items: center;
      flex-grow: 1;
      p {
        padding: 10px;
      }
    }
  `;
  return (
    <Footer>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit
          nesciunt omnis ipsam dicta ducimus, eius autem neque delectus mollitia
          culpa maxime consequuntur. Eos velit nulla labore consequatur dolores
          omnis voluptas, voluptate, autem officia ea maiores error, placeat
          obcaecati minima soluta a voluptatibus sequi rerum! Suscipit
          architecto maxime eos natus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit
          nesciunt omnis ipsam dicta ducimus, eius autem neque delectus mollitia
          culpa maxime consequuntur. Eos velit nulla labore consequatur dolores
          omnis voluptas, voluptate, autem officia ea maiores error, placeat
          obcaecati minima soluta a voluptatibus sequi rerum! Suscipit
          architecto maxime eos natus?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fugit
          nesciunt omnis ipsam dicta ducimus, eius autem neque delectus mollitia
          culpa maxime consequuntur. Eos velit nulla labore consequatur dolores
          omnis voluptas, voluptate, autem officia ea maiores error, placeat
          obcaecati minima soluta a voluptatibus sequi rerum! Suscipit
          architecto maxime eos natus?
        </p>
      </div>
      <InfoFooter>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path>
          </svg>
          <p>English (United States)</p>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span></span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </InfoFooter>
    </Footer>
  );
}
