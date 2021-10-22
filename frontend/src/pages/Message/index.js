import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { format, parseISO } from 'date-fns'

import { Container, Title, Content, MessageItem, Description, NotFoundMessage } from './styles';

import api from '~/services/api'

import history from '~/services/history'

function Message() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadMessages() {
      const { data } = await api.get('/message');
      setMessages(data.map(res => {
        return {
          ...res,
          expand: false
        } 
      }))
    }

    loadMessages()
  }, [])

  async function goToDetails(id) {
    let newMessages = messages;

    if(newMessages.filter(res => res.id===id && !res.read).length > 0) {
      await api.post(`message/${id}`)
    }

    history.push(`/details/${id}`)
    history.go(`/details/${id}`)
  }

  return (
    <Container>
      <Title>Lista de mensagens</Title>
      <Link to="/details">Criar nova mensagem</Link>
      <Content>
        {messages.length > 0? messages.map(res => {
          return (
            <MessageItem read={res.read} onClick={() => goToDetails(res.id)}>
              <div>
                <h4 title={res.subject}>{res.subject}</h4>
                {!res.read && (<span />)}
              </div>
              <div className="date">
                {format(parseISO(res.timestamp), 'dd/MM/yyyy HH:mm')}
              </div>
              <Description title={res.detail}>
                {res.detail}
              </Description>
            </MessageItem>
          )
        }): <NotFoundMessage>Nenhuma mensagem encontrada!</NotFoundMessage>}
      </Content>
    </Container>
  );
}

export default Message;