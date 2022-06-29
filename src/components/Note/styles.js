import styled from "styled-components" 

export const Container = styled.button`
  width:100%;
  padding:32px;
  background-color: ${({theme}) => theme.COLORS.PINKWO};
  border-radius:16px;
  margin-bottom:24px;
  border:0;
  text-align:left;

  > h1 {
    margin-bottom: 8px;
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size:24px;
  }

  > .stars {
    display:flex;
    gap:6px;

    color:${({theme}) => theme.COLORS.PINK};
    margin-bottom:15px;
  }

  > p {
    height:40px;
    text-overflow:ellipsis;
    overflow:auto;
    text-align: justify;
    margin-bottom:20px;
    color:${({theme}) => theme.COLORS.GRAY_200}
  }
`