import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > main {
    padding:40px 123px;
    overflow-y:auto;
  }
`

export const Content = styled.div`
  >header {
    display:flex;
    align-items:center;
    gap: 19px;

    h1 {
      margin:24px 0;
      font-size:36px;
    }

    .stars {
      color:${({theme}) => theme.COLORS.PINK};
      font-size:20px;
      display:flex;
      gap:6px;
      margin-top:3px;
    }
  }

  p {
    font-size:16px;
    margin-top:40px;
    margin-bottom:40px;
    text-align:justify;
    line-height:21.1px;
  }

`

export const Datas = styled.div`
  display:flex;
  align-items:center;
  gap:8px;
  margin-bottom:40px;
  
  .do-by {
    display:flex;
    align-items:center;
    gap:8px;

    img {
      width:16px;
      height:16px;
      border-radius:50%;
    }
  }

  .datetime {
    display:flex;
    align-items: center;
    gap:8px;

    svg {
      color:${({theme}) => theme.COLORS.PINK}
    }
  }

  
`

export const Section = styled.div`
`