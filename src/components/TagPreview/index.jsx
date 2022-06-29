import {Container} from './styles'

export function TagPreview({title,...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}