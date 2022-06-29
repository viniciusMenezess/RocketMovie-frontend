import {useState, useEffect} from "react"
import {useParams, useNavigate} from "react-router-dom"
import {api} from "../../services/api"
import {useAuth} from "../../hooks/auth"
import { IoStarSharp, IoStarHalf} from 'react-icons/io5'
import {Container, Content, Datas, Section} from './styles'
import {FiArrowLeft, FiClock} from 'react-icons/fi'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import { TagPreview } from '../../components/TagPreview'
import {ButtonDelete} from "../../components/ButtonDelete"

export function Preview() {
  const { user } = useAuth()
  const [data, setData] = useState(null);

  async function handleRemoveNote() {
    const confirm = window.confirm("Deseja realmente remover a nota ?")

    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate("/")
    }
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate("/")
  }

  useEffect(()=> {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  },[])

  return(
    <Container>
      <Header /> 

      {
        data &&
        <main>
        <Content>
          <ButtonText title="Voltar" icon={FiArrowLeft} onClick={handleBack}  />

          <header>
            <h1>{data.title}</h1>

            <div className="stars">
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarSharp/>
                <IoStarHalf/>
              </div>

          </header>

          <Datas>   
            <div className="do-by">
              <img src={avatarURL} alt={`Imagem do ${user.name}`} />
              <span>Por {user.name}</span>
            </div>

            <div className="datetime">
                <FiClock/>
                <span>{user.created_at}</span>
            </div>
          </Datas>

          {
            data.tags &&
            <Section title="Marcadores"> 
            {
              data.tags.map(tag => (
              <TagPreview key ={String(tag.id)}
              title={tag.name}
              />
              ))
            }
          </Section>
          }

          <p> {data.description}</p>
        </Content>

        <div className="buttonDelete">
          <ButtonDelete title="Excluir filme" onClick={handleRemoveNote}/> 
        </div>

        </main>
      } 
      

    </Container>
  )
}