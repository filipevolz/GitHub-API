# GitHub API Project

Este projeto é uma aplicação React construída para consumir e exibir informações da GitHub API. O objetivo é permitir que os usuários busquem repositórios e visualizem perfis de usuários do GitHub diretamente na interface da aplicação. Utilizamos React, TypeScript, Styled Components, Zod, React Hook Form e ZodResolver para garantir uma experiência de usuário eficiente, interativa e responsiva, além de uma validação robusta de formulários.

## Funcionalidades

### 🛠 Busca de Repositórios
O usuário pode buscar repositórios no GitHub fornecendo o nome ou parte do nome do repositório.  
Ao realizar a busca, a aplicação exibe detalhes como nome, descrição, linguagem principal e número de estrelas do repositório, tornando a navegação e busca por informações mais rápidas e simples.

### 👤 Visualização de Perfil de Usuário
O usuário pode visualizar detalhes de qualquer perfil do GitHub, como nome completo, bio, localização, número de repositórios e seguidores.  
Essas informações são obtidas diretamente da GitHub API, permitindo uma experiência dinâmica e em tempo real.

### 📝 Validação de Formulários com Zod e React Hook Form
Zod é usado para garantir que os dados inseridos nos formulários atendam aos critérios esperados (como garantir que o nome do repositório ou o nome de usuário sejam válidos).  
React Hook Form gerencia o estado dos formulários, otimizando o desempenho da aplicação e simplificando a interação do usuário com os campos de entrada.  
A integração entre Zod e React Hook Form é feita com ZodResolver, que valida os dados de forma eficiente e automática no momento do envio do formulário.

### 🎨 Estilo com Styled Components
Styled Components é utilizado para criar uma interface visualmente agradável, modular e reutilizável, com componentes independentes que facilitam a manutenção e escalabilidade do projeto.  
A aplicação é totalmente responsiva, ajustando-se a diferentes tamanhos de tela de maneira fluída e intuitiva.

### 🔄 Navegação Simples e Intuitiva
A navegação entre as páginas é simples e direta. O usuário pode facilmente alternar entre:
- Página de busca de repositórios para explorar repositórios do GitHub.
- Página de perfil de usuário para ver informações detalhadas sobre qualquer usuário no GitHub.

## Tecnologias e Bibliotecas Utilizadas

### ⚛ React e TypeScript
React é utilizado para criar uma interface de usuário interativa, enquanto TypeScript adiciona tipagem estática, ajudando a evitar erros durante o desenvolvimento e garantindo um código mais seguro e previsível.

### 📋 React Hook Form
React Hook Form gerencia o estado dos formulários de maneira simples e eficaz. Ele minimiza o re-render de componentes, otimizando o desempenho da aplicação ao lidar com entradas de usuário.

### 🛡 Zod e ZodResolver
Zod é uma biblioteca de validação que facilita a validação de dados de forma declarativa. No projeto, usamos Zod para validar campos como o nome do usuário ou repositório, garantindo que os dados enviados sejam corretos.  
ZodResolver conecta Zod com React Hook Form, fazendo com que a validação de dados aconteça automaticamente quando o formulário for submetido.

### 🎨 Styled Components
Styled Components permite que os estilos sejam definidos diretamente nos componentes, criando uma arquitetura de design coesa e modular. Isso facilita a reutilização de componentes e melhora a manutenção do código.
Além disso, a abordagem de Styled Components garante que o CSS seja isolado e scoped, evitando colisões de estilo e melhorando a organização do projeto.

### 🌐 GitHub API
A aplicação consome a GitHub API para acessar dados públicos sobre repositórios, usuários e organizações do GitHub. As requisições são feitas de forma assíncrona utilizando fetch ou bibliotecas como axios, garantindo uma comunicação eficiente com a API.