import {api} from "../../services/api"
import {useAuth} from '../../hooks/auth'
import { Container, Profile } from './styles'
import { Link } from 'react-router-dom'
import { Input } from '../Input'
export function Header() {

  const { signOut, user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  return(
    <Container>
      
      <h1>RocketMovies</h1>


      <Input placeholder="Pesquise pelo título" />

      <Profile>
        <div>
          <Link to="/profile">
          <strong>{user.name}</strong>
          </Link>
          <button onClick={signOut}>Sair</button>
        </div>

        <Link to="/profile">
          <img src={avatarURL} alt={`Imagem de ${avatarURL}`} />
        </Link>
      </Profile>
    </Container>
  )
}