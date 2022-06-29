import {useState} from "react"
import {Container, Content} from './styles'
import {FiArrowLeft} from 'react-icons/fi'
import {Link, useNavigate} from 'react-router-dom'
import { api } from '../../services/api'
import {Header} from '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {MovieItem} from '../../components/MovieItem'
import {Button} from '../../components/Button'
import {ButtonDelete} from '../../components/ButtonDelete'

export function New() {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [description, setDescription] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleAddNewNote() {
    if(!title) {
      return alert("O título é obrigatório !")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar. Clique em adicionar ou deixe o campo vazio !")
    }

    if(!tags) {
      return alert("É obrigatório digitar a tag para pesquisa !")
    }


    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    })

    alert("Nota criada com sucesso !")
    navigate("/")
  }


  return(
    <Container>
      <Header />

      <main>
        <Content>
          <Link to="/">
            <ButtonText title="Voltar" icon={FiArrowLeft} />
          </Link>

          <h1>Novo filme</h1>

          <div>
            <Input 
              type="text" 
              placeholder="Título" 
              onChange={event => setTitle(event.target.value)}
            />
            
            <Input 
              type="number" 
              placeholder="Sua nota (de 0 a 5)" 
              onChange={event => setRating(event.target.value)}
            />
          </div>

          <Textarea 
            placeholder="Observações"
            onChange={event => setDescription(event.target.value)} 
            />

          <h2> Marcadores </h2>

          <div className="tags">
            {
              tags.map((tag, index) =>(
                <MovieItem 
                  key= {String(index)}
                  value={tag}
                  onClick={()=> {handleRemoveTag(tag)}}
                />
              ))
            }

            <MovieItem 
              isNew 
              placeholder="Novo Marcador"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
            <Button title="Salvar alterações" onClick={handleAddNewNote} />
        </Content>
      </main>
    </Container>
  )
}