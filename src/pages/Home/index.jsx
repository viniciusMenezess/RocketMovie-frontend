import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import { api } from "../../services/api"
import { FiPlus } from 'react-icons/fi'
import { Container, Content, Controls, Section } from './styles'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Note } from '../../components/Note'

export function Home() {
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()
  
  function previewDetails(id) {
    navigate(`/preview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${notes}`)
      setNotes(response.data)
      
    }

    fetchNotes()
  }, [])
  return(
    <Container>
      <Header/>

      <Controls>
        <h1>Meus filmes</h1>

        <div className="button">
          <Link to="/new">
          <Button title="Adicionar filme" icon={FiPlus}/>
          </Link>
        </div>
      </Controls>

      <main>
        <Content>
          
          <Section>
          {
            notes.map(note => (
              <Note
                key={String(note.id)} 
                data={note} 
                onClick={()=>previewDetails(note.id)}
              />
            ))
            }
          </Section>

        </Content>
      </main>

    </Container>
  )
}