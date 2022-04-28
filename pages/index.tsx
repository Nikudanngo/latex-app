import type { NextPage } from 'next'
import { ServerStyleSheet } from 'styled-components';
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useState } from "react";
import styles from '../styles/Home.module.css'
import styled from "styled-components"
const title = "LaTex変換";

const Home: NextPage = () => {
  const sheet = new ServerStyleSheet();
  const [text, setText] = useState<any>('ここに式が表示されます.');
  const handleChange = (e: any) => {
    setText(() => "$" + e.target.value + "$")
  }

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

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
  `;


  // console.log(doc);
  return (
    <Container>
      <Main>
        {/* <form> */}
        <Form>
          <h1 className={styles.title}>LaTex変換</h1>
          <label>
            式
            <input type="text" onChange={handleChange} name="name" />
          </label>
        </Form>
        {/* </form> */}
        <div>
          <Latex>{text}</Latex>
        </div>
      </Main>
    </Container>
  );

}

export default Home
