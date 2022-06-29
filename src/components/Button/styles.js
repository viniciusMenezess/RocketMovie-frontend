import styled from "styled-components";

export const Container = styled.button`
  width:100%;
  height: 56px;
  background-color: ${({theme}) => theme.COLORS.PINK};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  font-weight: 700;

  display:flex;
  align-items:center;
  justify-content:center;

  border:0;
  padding:13px 56px;
  border-radius:10px;
  font-weight:500;

  &:disabled {
    opacity: 0.5;
  }

  > svg {
    margin-right:8px;
  }
`