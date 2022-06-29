import { Container } from './styles'
import { IoStarSharp, IoStarHalf} from 'react-icons/io5'
import {Tag} from "../Tag"

export function Note({data, ...rest}) {
  return(
    <Container {...rest}>
      <h1> {data.title}</h1>

      <div className="stars">
        <IoStarSharp/>
        <IoStarSharp/>
        <IoStarSharp/>
        <IoStarSharp/>
        <IoStarHalf/>
      </div>

      <p> {data.description} </p>
      
      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key = {tag.id} title={tag.name} /> )
          }
        </footer>
      }
    </Container>
  )
}