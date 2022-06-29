import styled from "styled-components";

export const Container = styled.header`
  width:100%;
  height:116px;

  display:flex;
  justify-content:space-between;
  align-items:center;

  padding: 30px 123px;
  gap:64px;

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.COLORS.GRAY_300};
  border-bottom-style:solid;

  h1 {
    font-size:24px;
    color: ${({theme}) => theme.COLORS.PINK}
  }
`
export const Profile = styled.div`
  display:flex;
  align-items:center;
  min-width:200px;
  gap:12px;

  > div {
    display:flex;
    flex-direction:column;
    line-height: 150%;

    strong {
      font-size:14px;
      color: ${({theme}) => theme.COLORS.WHITE}
    }

    button {
      border: none;
      background:none;
      text-align:right;
      color: ${({theme}) => theme.COLORS.BACKGROUND_700};
      font-size:14px;
    }
  }
  
    img {
    width:56px;
    height:56px;

    border-radius:50%;
  }
`