import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import { Form, Input, Textarea } from '@rocketseat/unform'

import { toast } from 'react-toastify'

import { format, parseISO } from 'date-fns'

import { FaPencilAlt, FaTimes } from 'react-icons/fa'

import { Container, Title, Content, ButtonContent } from './styles';

import Load from '~/components/Load'

import api from '~/services/api'

import history from '~/services/history'

function MessageDetailsOrUpdate({ match  }) {
  const [message, setMessage] = useState({
    subject: '',
    detail: '',
    id: null,
    timestamp: null
  });
  const [mode, setMode] = useState('create');
  const [load, setLoad] = useState(true)
 
  useEffect(() => {
    async function loadDetailsMessages() {
      const { data } = await api.get('message/'+match.params.id);
      setMode('view')
      setMessage(data)
      
      setTimeout(() => {
        setLoad(false)
      }, 1000)
    }

    if(!(match.params.id)) {
      setMode('create')
      setLoad(false)
    } else {
      setLoad(true)
      loadDetailsMessages()
    }
  }, [])

  async function updateOrCreateMessage() {
    const { id, subject, detail } = message;

    const edit = mode === 'update'

    try {
      const { data } = await api.post(mode, {
        id, 
        subject, 
        detail
      });

      setMessage(data)
      setMode('view')
      
      toast.success(`Mensagem ${edit?'atualizada':'criada'} com sucesso!`, { className: 'alert_success' })
    } catch (err) {
      toast.error(`Erro ao ${edit?'atualizar':'criar'} mensagem!`, { className: 'alert_error' })
    }
  }

  if(load) {
    return <Load />
  }

  return (
    <Container>
      <Title>{mode === 'view'?
        'Detalhes da mensagem': mode === 'update'?
          'Atualizar mensagem':'Criar nova mensagem'}</Title>
      <Content>
        <ButtonContent>
          {console.log({
            mode
          })}
          {mode ==='update'|| mode ==='view' ? (
            <button 
              onClick={() => setMode(mode === 'view'? 'update': 'view')}
            >
              {mode ==='update'? <FaTimes color="#ffffff" size={24} />: <FaPencilAlt color="#ffffff" size={20} />}
            </button>
          ): null}
        </ButtonContent>
        <Form onSubmit={() => updateOrCreateMessage()}>
          {mode !== 'create' && (
            <div>
              Data e hora de criação: {message.timestamp?
                format(parseISO(message.timestamp), 'dd/MM/yyyy HH:mm'): ''}
            </div>
          )}
          <Input 
            value={message.subject}
            disabled={mode === 'view'}
            name="title"
            placeholder="Titulo da mensagem"
            onChange={(e) => {
              setMessage({
                ...message,
                subject: e.target.value
              })
            }}
          />
          <Textarea 
            value={message.detail} 
            name="description"
            rows={6}
            disabled={mode === 'view'} 
            placeholder="Descrição da mensagem"
            onChange={(e) => {
              setMessage({
                ...message,
                detail: e.target.value
              })
            }}
          />
          {mode !== 'view' && (<button type="submit">{mode ==='update'? 'Atualizar mensagem': 'Criar nova mensagem'}</button>)}
          <Link to="/">Voltar para a lista</Link>
        </Form>
      </Content>
    </Container>
  );
}

export default MessageDetailsOrUpdate;