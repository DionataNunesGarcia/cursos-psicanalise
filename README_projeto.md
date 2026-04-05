# 🧠 Psicanálise Preta – Projeto Drupal

Projeto institucional desenvolvido em Drupal com foco em conteúdo, cursos e gestão de alunos. A arquitetura foi planejada para ser escalável, modular e preparada para evolução futura (Fase 2 com alunos, pagamentos e certificados).

---

# 🚀 Setup do Projeto

## 📦 Clonar repositório
```bash
git clone <repo-url>
cd psicanalise-preta
```

## 🐳 Subir ambiente
```bash
ddev start
```

## 📥 Instalar dependências
```bash
ddev composer install
```

## ⚙️ Instalar Drupal (caso necessário)
```bash
ddev drush site:install standard -y
```

## 🔄 Rodar instalão do tema
```bash
ddev theme-install
```

## 🔄 Rodar setup completo
```bash
ddev local-update
```

## 🔐 Acessar o sistema
```bash
ddev drush uli
```

ou

```bash
ddev launch
```

---

# 🧩 Estrutura do Projeto

## Backend (Drupal)
- Drupal 10/11  
- Drush  
- Config Sync (CIM/CEX)  
- Tradução (PT-BR)  
- Content Types estruturados  
- Taxonomias para classificação  
- Views para listagens dinâmicas  

## Frontend
- Tema custom: `front_theme`  
- Build com Node/NPM  
- Arquitetura baseada em componentes (Paragraphs)  

---

# 🛠️ Comandos customizados (DDEV)

Localizados em `.ddev/commands/web/`.

### ddev local-update
Executa:
- Instala dependências
- Atualiza banco (drush updb)
- Importa configurações (drush cim)
- Build do frontend
- Limpa cache
- Gera login automático

### ddev theme-build
Executa build de produção do frontend.

### ddev theme-dev
Executa build em modo desenvolvimento.

### ddev theme-watch
Executa modo watch com rebuild automático.

---

# 📦 Módulos principais

Instalação:
```bash
ddev composer require drupal/pathauto drupal/token drupal/paragraphs drupal/admin_toolbar
```

Ativação:
```bash
ddev drush en pathauto token paragraphs admin_toolbar -y
```

---

# 🌍 Tradução PT-BR

```bash
ddev drush en language locale content_translation config_translation -y
ddev drush language:add pt-br
ddev drush locale:update
ddev drush cset system.site default_langcode pt-br -y
ddev drush cr
```

---

# 🧠 Arquitetura do Projeto

## Content Types
- Cursos
- Conteúdos
- Equipe

## Taxonomias
- Categoria de Conteúdo
- Categoria de Curso
- Cargo de Equipe

## Usuários
- Autenticação
- Base para Fase 2

## Paragraphs
- Hero
- Texto
- Seções
- CTA

## Views
- Listagens
- Filtros
- Blocos

---

# 🧱 Blueprint

Separação:
- Content Type → dados
- Taxonomia → classificação
- Paragraphs → layout
- Views → listagem
- User → autenticação

---

# 🤖 Uso com IA

Sugestões:
- Criar content types
- Criar views
- Gerar twig
- Melhorar arquitetura

---

# 🚀 Roadmap

## Fase 1
- Site institucional
- Cursos
- Conteúdos
- Equipe

## Fase 2
- Alunos
- Pagamentos
- Certificados
- Dashboard

---

# 🆘 Troubleshooting

```bash
ddev drush cr
ddev composer install
ddev local-update
```

---

# 📁 Estrutura

.ddev/
web/
themes/custom/front_theme/
config/
composer.json

---

# 🧠 Filosofia

- Escalável
- Modular
- Preparado para IA
