# Sistema de Gerenciamento de Produtos

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.7-purple)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.5-blue)
![License](https://img.shields.io/badge/license-Private-red)

Um sistema completo de gerenciamento de produtos desenvolvido em React com Vite, utilizando a API RESTful pública para operações CRUD (Create, Read, Update, Delete).

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [API Utilizada](#api-utilizada)
- [Autor](#autor)

## 🎯 Sobre o Projeto

Este projeto é um sistema web para gerenciamento de produtos eletrônicos, permitindo realizar operações completas de CRUD. O sistema possui uma interface intuitiva com formulários dedicados para cada operação e uma tabela para visualização dos dados.

### Principais Características

- ✅ Interface responsiva e moderna
- ✅ Persistência de dados usando LocalStorage
- ✅ Integração com API RESTful externa
- ✅ Navegação entre páginas com React Router
- ✅ Filtros e consultas dinâmicas
- ✅ Validação de formulários
- ✅ Área privada protegida

## 🚀 Funcionalidades

### 1. **Cadastro de Produtos**
- Adicionar novos produtos com informações completas
- Campos: Nome, Ano, Preço, Modelo de CPU, Tamanho do Disco

### 2. **Consulta de Produtos**
- Buscar produto por ID
- Visualizar detalhes em formato JSON
- Consultar todos os produtos

### 3. **Atualização de Produtos**
- Editar informações de produtos existentes
- Atualização em tempo real na tabela

### 4. **Exclusão de Produtos**
- Remover produtos do sistema
- Confirmação automática

### 5. **Filtro de Produtos**
- Página dedicada para filtros
- Busca por nome do produto
- Resultados dinâmicos

### 6. **Área Privada**
- Informações sobre o projeto
- Documentação da API
- Acesso controlado por login simulado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 19.1.1 - Biblioteca JavaScript para interfaces
- **Vite** 7.1.7 - Build tool e dev server
- **React Router DOM** 7.9.5 - Roteamento de páginas
- **Material-UI** 7.3.5 - Componentes de UI (Tabelas)
- **Emotion** - Estilização CSS-in-JS

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e qualidade de código
- **Babel React Compiler** - Otimização de performance
- **React Hooks** - Gerenciamento de estado
- **Context API** - Compartilhamento de estado global

### API
- **RESTful API Dev** - https://api.restful-api.dev/

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 20.19.0 ou superior recomendada)
- [npm](https://www.npmjs.com/) (geralmente vem com Node.js)

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd projeto-final
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 📖 Como Usar

### Página Principal (Main)

1. **Cadastrar Produto**
   - Preencha todos os campos do formulário "Cadastrar Novo Produto"
   - Clique em "Criar Produto"
   - O produto aparecerá na tabela abaixo

2. **Consultar Produto**
   - Digite o ID do produto no formulário "Consultar Produto"
   - Clique em "Consultar Produto"
   - Os detalhes aparecerão em formato JSON

3. **Alterar Produto**
   - Digite o ID do produto que deseja alterar
   - Modifique os campos desejados
   - Clique em "Alterar Produto"

4. **Deletar Produto**
   - Digite o ID do produto
   - Clique em "Deletar Produto"
   - O produto será removido da tabela

### Página de Filtro

1. Navegue até "Filtro" no menu superior
2. Use o campo "Nome" para filtrar produtos
3. Os resultados aparecem em tempo real

### Área Privada

1. Navegue até "Private Area" no menu
2. Clique em "Fazer Login"
3. Acesse informações sobre o projeto

## 📁 Estrutura do Projeto

```
projeto-final/
├── src/
│   ├── components/
│   │   ├── box/              # Componente de tabela
│   │   │   ├── index.jsx
│   │   │   └── box.modules.css
│   │   ├── controller/       # Funções de API
│   │   │   └── index.jsx
│   │   ├── Filter/           # Página de filtros
│   │   │   ├── index.jsx
│   │   │   └── filter.modules.css
│   │   ├── form/             # Componente de formulário
│   │   │   ├── index.jsx
│   │   │   └── form.modules.css
│   │   ├── Input/            # Componente de input
│   │   │   ├── index.jsx
│   │   │   └── input.modules.css
│   │   ├── Menu/             # Menu de navegação
│   │   │   ├── index.jsx
│   │   │   └── menu.modules.css
│   │   ├── Private/          # Área privada
│   │   │   ├── index.jsx
│   │   │   └── private.modules.css
│   │   └── ProductProvider/  # Context API
│   │       └── index.jsx
│   ├── App.jsx               # Componente principal
│   ├── App.css
│   ├── Routes.jsx            # Configuração de rotas
│   ├── main.jsx              # Ponto de entrada
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 API Utilizada

**Base URL:** `https://api.restful-api.dev/objects`

### Endpoints

- **GET** `/objects` - Lista todos os produtos
- **GET** `/objects/{id}` - Busca produto por ID
- **POST** `/objects` - Cria novo produto
- **PUT** `/objects/{id}` - Atualiza produto existente
- **DELETE** `/objects/{id}` - Remove produto

### Estrutura de Dados

```json
{
  "id": "string",
  "name": "string",
  "data": {
    "year": number,
    "price": number,
    "CPU model": "string",
    "Hard disk size": "string"
  },
  "createdAt": "string",
  "updatedAt": "string"
}
```

## 🎨 Características de Design

- **Dark Mode** por padrão
- **Menu fixo** no topo da página
- **Formulários responsivos** que se adaptam a diferentes tamanhos de tela
- **Tabelas estilizadas** com Material-UI
- **Feedback visual** em hover e ações
- **Tipografia moderna** com Franklin Gothic Medium

## 🔐 Persistência de Dados

O projeto utiliza **LocalStorage** para persistir os produtos localmente, permitindo que os dados sejam mantidos mesmo após recarregar a página.

## 📝 Scripts Disponíveis

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Compila para produção
npm run build

# Executa o linting
npm run lint

# Preview da build de produção
npm run preview
```

## 🐛 Solução de Problemas

### Produtos não aparecem após recarregar a página
- Verifique se o LocalStorage está habilitado no navegador
- Limpe o cache do navegador

### Erro ao fazer requisições para API
- Verifique sua conexão com a internet
- A API pode estar temporariamente indisponível

### Estilos não carregam corretamente
- Execute `npm install` novamente
- Limpe o cache do Vite: `npm run dev -- --force`

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e foi desenvolvido para fins educacionais.

## 👨‍💻 Autor

**Thomas Pereira**

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

**Desenvolvido com ❤️ usando React e Vite**