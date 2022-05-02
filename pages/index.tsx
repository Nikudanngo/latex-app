import type { NextPage } from 'next'
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";
import styled from "styled-components"
import Link from 'next/link';

const Container = styled.div`
  padding: 0 2rem;
  background: #ccc5b9;
`;
const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  font-weight: bold;
  color: #403d39;
  margin: 0;
  padding: 1rem 0;
`;
const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Equation = styled.textarea`
  font-size: 0.9rem;
  font-family: "kosugi Maru";
  width: 100%;
  height: 10rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Render = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  background: #fafafa;
  color: inherit;
  text-decoration: none;
  border: 2px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 1000px;
`;
const Sp = styled.span`
  display: inline-block;
`;
const Hober = styled.a`
    color: #351431;
    text-decoration: none;
    cursor: pointer;
    &:hover ,
    &:focus {
        color: palevioletred;
    }
    &:active {
        color: red;
    }
`;


const LaTex: NextPage = () => {
  const [text, setText] = useState<any>('ここに式が表示されます.');
  const quationExample = `
  f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\frac{f^{(3)}(0)}{4!}x^4 + \\cdots \\\\

  \\hspace{8mm} = \\sum\\limits_{ k = 0 }^ { \\infty }f ^ {(k)}(0) \\frac{ x ^ k } { k! }

  \\\\ Press enter to convert.
  `;
  const handleChange = (e: any) => {
    setText(() => "$" + e.target.value + "$")
  }

  // console.log(doc);
  return (
    <Container>
      <Main>
        <Title><Sp>LaTex</Sp><Sp>数式<Sp>変換</Sp></Sp></Title>
        <Equation onChange={handleChange} defaultValue={quationExample} />
        <Render>
          <Latex>{text}</Latex>
        </Render>
        <p>
          <Link href="/home">
            <Hober>このサイトについて</Hober>
          </Link>
        </p>
      </Main>
    </Container>
  );

}

export default LaTex
