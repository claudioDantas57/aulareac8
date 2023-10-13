import axios from "axios"
import { useEffect } from "react"
import { Card, CardImg, CardTitle, ContainerCards } from "./style"
import { useState } from "react"

export const MMORPG = () => {

    const [jogos, setJogos] = useState()

    async function buscar_jogos() {
        const {data} = axios.get("http:localhost:3000/mmorpg")
        setJogos(data)
    }

    useEffect(()=> {
        buscar_jogos()
    },[])
    return (
      <>
        <h1>MMORPG</h1>
        <ContainerCards></ContainerCards>
        {jogos && jogos.map((jogo)=> (
            <Card>
                <CardTitle>{jogo.titulo}</CardTitle>
                <CardImg src={jogo.foto}/>
            </Card>
        ))}
        <ContainerCards/>
      </>
        
    );
  }