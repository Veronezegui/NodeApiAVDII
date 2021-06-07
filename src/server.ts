import express from 'express'

import './database'
import { routes } from './routes'

const app = express()
app.use(express.json())

app.use(routes)

app.listen(3333, () => {
  console.log('Servidor rodando!!')
})

/*
Tipos de banco de dados
relacionais - postgres, mysql, sqlserver, oracle, sqlite
não relacionais - mongodb
typeorm (ts) / sequelize (js)

migrations

Clients
id - pk
cliente
telefone
email
created_at
updated_at

tipos de servicos

tabela: services
id: uuid - chave primaria (pk)
servico: varchar
valor: number
created_at
updated_at
*/

/*
Exercício
Crie um novo projeto para um banco de dados SQlite
crie as seguintes tabelas:

Tabela: disciplinas
id
disciplina
periodo
created_at
updated_at

Tabela: professores
id
professor
telefone
email
created_at
updated_at


Tabela: turmas
id
id_disciplina
id_professor
diasemana
horario
periodo
created_at
updated_at
*/

