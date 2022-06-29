import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > main {
    padding:40px 123px;
    overflow:hidden;
  }
`

export const Content = styled.div`
  > h1 {
    font-size:36px;
    margin-top:24px;
    margin-bottom:40px;

    font-weight: 400;
  }

  > div {
    display:flex;
    gap:40px;

    margin-bottom: 40px;
  }

  > h2 {
    font-size:20px;
    color:${({theme}) =>theme.COLORS.GRAY_200};
    margin-top:40px;
    margin-bottom:24px;

    font-weight: 400;
  }

  .tags {
    width:100%;
    height:88px;

    padding:16px;

    background-color:${({theme}) =>theme.COLORS.BLACK};
    border-radius:10px;
  }

`