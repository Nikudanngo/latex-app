import type { NextPage } from 'next'
import { ServerStyleSheet } from 'styled-components';
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
  padding: 0 2rem;
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
  width: 600px;
  height: 10rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const LaTex: NextPage = () => {
  const sheet = new ServerStyleSheet();
  const [text, setText] = useState<any>('ここに式が表示されます.');
  const quationExample = `
  f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\frac{f^{(3}(0)}{4!}x^4 + \\cdots \\\\

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
        <h1>LaTex数式変換</h1>
        <label>
          <Equation onChange={handleChange} defaultValue={quationExample} />
        </label>
        <div>
          <Latex>{text}</Latex>
        </div>
      </Main>
    </Container>
  );

}

export default LaTex
