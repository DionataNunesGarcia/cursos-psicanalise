# 🧠 User Stories – Psicanálise Preta

---

# 📦 EPIC 1 – Estrutura de Páginas (Page Builder)

## 🎯 Objetivo
Permitir que administradores criem páginas flexíveis usando seções reutilizáveis.

---

### 🧾 US01 – Criar páginas dinâmicas com seções

**Como** administrador  
**Quero** montar páginas utilizando diferentes tipos de seções  
**Para** criar conteúdos institucionais sem depender de desenvolvedor  

**Critérios de aceite:**
- Deve ser possível adicionar múltiplas seções
- Deve ser possível reordenar seções (drag and drop)
- Cada seção deve ser editável individualmente
- A página deve renderizar corretamente no frontend

---

### 🧾 US02 – Utilizar seção de Banner

**Como** administrador  
**Quero** adicionar um banner com título, descrição e botões  
**Para** destacar conteúdos importantes  

**Critérios de aceite:**
- Deve permitir título, subtítulo e descrição
- Deve permitir CTA primário e secundário
- Deve permitir imagem opcional
- Deve suportar variações (hero / simples)

---

### 🧾 US03 – Utilizar seção de Carousel

**Como** administrador  
**Quero** adicionar carousels de conteúdo  
**Para** destacar múltiplos itens em pouco espaço  

**Critérios de aceite:**
- Deve suportar cards
- Deve permitir navegação horizontal
- Deve ser responsivo

---

### 🧾 US04 – Utilizar seção de equipe

**Como** administrador  
**Quero** exibir membros da equipe em formato de carousel  
**Para** apresentar os profissionais do projeto  

**Critérios de aceite:**
- Deve consumir dados do content type Equipe
- Deve ser exibido em formato de carousel
- Deve atualizar automaticamente ao cadastrar novos membros

---

### 🧾 US05 – Utilizar seção de colunas

**Como** administrador  
**Quero** criar blocos com múltiplas colunas  
**Para** exibir informações institucionais  

**Critérios de aceite:**
- Deve permitir entre 3 e 6 colunas
- Cada coluna deve conter título e texto

---

### 🧾 US06 – Utilizar seção de galeria

**Como** administrador  
**Quero** adicionar galerias de imagens  
**Para** enriquecer o conteúdo visual  

**Critérios de aceite:**
- Deve permitir múltiplas imagens
- Deve exibir em grid responsivo

---

### 🧾 US07 – Utilizar seção imagem + texto

**Como** administrador  
**Quero** exibir conteúdo com imagem lateral  
**Para** melhorar a apresentação visual  

**Critérios de aceite:**
- Deve permitir inverter posição da imagem
- Deve permitir título, texto e link

---

### 🧾 US08 – Utilizar seção FAQ

**Como** administrador  
**Quero** adicionar perguntas e respostas  
**Para** esclarecer dúvidas do usuário  

**Critérios de aceite:**
- Deve permitir múltiplas perguntas
- Deve permitir imagem opcional
- Deve permitir layout configurável

---

### 🧾 US09 – Utilizar seção de testemunhos

**Como** administrador  
**Quero** exibir depoimentos  
**Para** gerar prova social  

**Critérios de aceite:**
- Deve permitir múltiplos testemunhos
- Deve permitir categorização por tema

---

### 🧾 US10 – Utilizar seção de conteúdo HTML

**Como** administrador  
**Quero** inserir conteúdo livre  
**Para** ter flexibilidade máxima  

**Critérios de aceite:**
- Deve usar editor WYSIWYG (CKEditor)
- Deve permitir HTML estruturado

---

# 📦 EPIC 2 – Gestão de Conteúdos

## 🎯 Objetivo
Permitir criação e organização de conteúdos editoriais.

---

### 🧾 US11 – Criar conteúdo (blog/artigo)

**Como** administrador  
**Quero** cadastrar conteúdos  
**Para** alimentar o site com informações relevantes  

**Critérios de aceite:**
- Deve permitir título, corpo e resumo
- Deve permitir imagem destacada
- Deve permitir categorias e tags

---

### 🧾 US12 – Filtrar conteúdos por categoria

**Como** usuário  
**Quero** filtrar conteúdos por categoria  
**Para** encontrar temas de interesse  

**Critérios de aceite:**
- Deve existir filtro por categoria
- Deve listar conteúdos relacionados

---

### 🧾 US13 – Exibir conteúdos em páginas

**Como** administrador  
**Quero** exibir conteúdos em seções  
**Para** integrar blog com páginas institucionais  

**Critérios de aceite:**
- Deve listar últimos conteúdos
- Deve permitir filtro por categoria

---

# 📦 EPIC 3 – Gestão de Cursos

## 🎯 Objetivo
Gerenciar cursos e exibição no site.

---

### 🧾 US14 – Cadastrar curso

**Como** administrador  
**Quero** cadastrar cursos  
**Para** disponibilizar informações aos usuários  

**Critérios de aceite:**
- Deve permitir título, descrição e imagem
- Deve permitir datas
- Deve permitir valor
- Deve permitir categoria

---

### 🧾 US15 – Exibir cursos em lista

**Como** usuário  
**Quero** visualizar cursos disponíveis  
**Para** conhecer as opções  

**Critérios de aceite:**
- Deve listar cursos
- Deve exibir imagem e informações principais

---

### 🧾 US16 – Exibir cursos em destaque

**Como** administrador  
**Quero** destacar cursos  
**Para** aumentar conversão  

**Critérios de aceite:**
- Deve permitir marcar curso como destaque
- Deve aparecer em seção específica

---

# 📦 EPIC 4 – Gestão de Equipe

## 🎯 Objetivo
Gerenciar profissionais da plataforma.

---

### 🧾 US17 – Cadastrar membro da equipe

**Como** administrador  
**Quero** cadastrar membros  
**Para** apresentar os profissionais  

**Critérios de aceite:**
- Deve permitir nome, bio e imagem
- Deve permitir cargo (taxonomia)
- Deve permitir vínculo com usuário

---

### 🧾 US18 – Exibir equipe no site

**Como** usuário  
**Quero** visualizar a equipe  
**Para** conhecer os profissionais  

**Critérios de aceite:**
- Deve listar membros
- Deve permitir exibição em carousel

---

# 📦 EPIC 5 – Experiência do Usuário

## 🎯 Objetivo
Garantir navegação fluida e responsiva.

---

### 🧾 US19 – Navegação responsiva

**Como** usuário  
**Quero** acessar o site em qualquer dispositivo  
**Para** ter uma boa experiência  

**Critérios de aceite:**
- Deve funcionar em mobile, tablet e desktop
- Layout adaptativo

---

### 🧾 US20 – Performance do site

**Como** usuário  
**Quero** carregamento rápido  
**Para** não abandonar o site  

**Critérios de aceite:**
- Tempo de carregamento otimizado
- Imagens otimizadas

---

# 📦 EPIC 6 – SEO e Estrutura

## 🎯 Objetivo
Melhorar indexação e visibilidade.

---

### 🧾 US21 – URLs amigáveis

**Como** administrador  
**Quero** URLs automáticas  
**Para** melhorar SEO  

**Critérios de aceite:**
- Deve usar Pathauto
- Deve usar categoria + título

---

### 🧾 US22 – Meta informações

**Como** administrador  
**Quero** configurar SEO  
**Para** melhorar ranking  

**Critérios de aceite:**
- Deve permitir meta title e description
- Deve permitir Open Graph

---

# 🚀 Evolução futura (Fase 2)

- Cadastro de alunos  
- Pagamentos  
- Certificados  
- Área logada  

---