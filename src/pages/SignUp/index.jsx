import { useState } from "react" 
import {FiArrowLeft, FiUser, FiMail, FiLock} from 'react-icons/fi'
import {Container, Form, Background} from './styles'
import { Link, useNavigate } from 'react-router-dom'

import {api} from '../../services/api'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos !")
    }

    api.post("/users", {name,email,password})
    .then(() => {
      alert("Cadastro realizado com sucesso !")
      Navigate("/")
    })
    .catch(error => {
      if(error.response) {
        return alert(error.response.data.message)
      }else {
        return alert("Não foi possível realizar o cadastro. Tente novamente !")
      }
    })
  }

  return(
    <Container>
      <Background/>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu cadastro</h2>

        <Input 
        type="text" 
        placeholder="Nome"
        icon={FiUser} 
        onChange = {event => setName(event.target.value)}
        />

        <Input 
        type="email" 
        placeholder="Email"
        icon={FiMail} 
        onChange = {event => setEmail(event.target.value)}
        />

        <Input 
        type="password" 
        placeholder="Senha"
        icon={FiLock} 
        onChange = {event => setPassword(event.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <div className="button">
          <Link to="/">
            <ButtonText title="Voltar para o login" icon={FiArrowLeft}/>
          </Link>
        </div>
        
      </Form>

    </Container>
  )
}