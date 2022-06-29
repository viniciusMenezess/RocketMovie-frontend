import styled from 'styled-components'

export const Container = styled.div`
  width:100%;
  height:100vh;

  display:flex;
  flex-direction:column;

  > main {
    padding: 40px 123px;
    overflow:auto;
  }

`

export const Content = styled.div`
  grid-area: content;
`

export const Controls = styled.div`
    padding: 40px 123px;
    display:flex;
    align-items:center;
    justify-content:space-between;

    h1 {
      font-size:32px;
    }

`

export const Section = styled.section`
  width: 100%;
`