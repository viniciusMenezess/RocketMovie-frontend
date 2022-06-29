import styled from 'styled-components'

export const Container = styled.textarea`
  width:100%;
  height:274px;

  background-color:${({theme}) => theme.COLORS.BACKGROUND_800};
  color:${({theme}) => theme.COLORS.WHITE};

  border:none;
  border-radius:10px;

  padding:19px;

  resize: none;

  overflow-y:auto;

  &::placeholder {
    color:${({theme}) => theme.COLORS.BACKGROUND_700};
    font-weight: 400;
  }
`