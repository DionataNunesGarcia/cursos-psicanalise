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

Os comandos estão localizados em:

.ddev/commands/web/

Eles automatizam tarefas comuns do projeto e devem ser utilizados no dia a dia.

---

## 🔄 ddev local-update

Comando principal do projeto.

Executa um fluxo completo de atualização do ambiente local, incluindo:

- Verificação de mudanças no composer.lock  
- Instalação de dependências  
- Execução de updates do banco de dados  
- Importação de configuração (config sync)  
- Build do frontend (quando disponível)  
- Limpeza de cache  
- Geração de link de login automático  

Deve ser executado sempre após:

- git pull  
- mudança de branch  
- atualização de configuração  
- setup inicial  

---

## 🎨 ddev theme-build

Responsável por gerar o build de produção do frontend.

Executa:

- Compilação de assets  
- Otimização de CSS/JS  
- Preparação para ambiente produtivo  

---

## 🧑‍💻 ddev theme-dev

Executa o build em modo desenvolvimento.

Permite:

- Debug mais fácil  
- Build mais rápido  
- Sem otimizações pesadas  

---

## 👀 ddev theme-watch

Modo de desenvolvimento contínuo.

Executa:

- Observação de arquivos do tema  
- Rebuild automático ao salvar alterações  
- Ideal para desenvolvimento frontend  

---

# 📦 Módulos principais

Instalação:
ddev composer require drupal/pathauto drupal/token drupal/paragraphs drupal/admin_toolbar

Ativação:
ddev drush en pathauto token paragraphs admin_toolbar -y

---

# 🌍 Tradução PT-BR

ddev drush en language locale content_translation config_translation -y
ddev drush language:add pt-br
ddev drush locale:update
ddev drush cset system.site default_langcode pt-br -y
ddev drush cr

---

# 🧠 Arquitetura do Projeto

## Content Types

### Cursos
- Dados estruturados de cursos  
- Datas, descrição, valor  
- Relacionamento com taxonomia  

### Conteúdos
- Blog / artigos  
- Classificação por categoria  

### Equipe
- Perfis públicos  
- Relacionamento opcional com usuários  

---

## Taxonomias

- Categoria de Conteúdo  
- Categoria de Curso  
- Cargo de Equipe  

Usadas para:

- Filtros em Views  
- Organização  
- URLs amigáveis  

---

## Usuários

- Usados apenas para autenticação  
- Relacionados com equipe quando necessário  
- Base para Fase 2 (alunos)  

---

## Paragraphs

Utilizado para construção de páginas dinâmicas:

- Hero  
- Blocos de texto  
- Seções institucionais  
- CTA  

Evitar uso para:

- Dados estruturados (curso, usuário, etc.)  

---

## Views

Responsáveis por:

- Listagem de cursos  
- Listagem de conteúdos  
- Página de equipe  
- Blocos da home  
- Painéis administrativos (Fase 2)  

---

# 🧱 Blueprint (Arquitetura escalável)

Separação clara de responsabilidades:

- Content Type → dados estruturados  
- Taxonomia → classificação  
- Paragraphs → layout  
- Views → listagem  
- User → autenticação  

Isso permite:

- Escalar o projeto  
- Evitar retrabalho  
- Facilitar manutenção  

---

# 🤖 Uso com IA (Claude / ChatGPT)

Este projeto foi estruturado para ser utilizado com IA no desenvolvimento.

## 📘 Prompt recomendado

Use prompts como:

- "Crie um content type no Drupal com base nesse requisito"  
- "Monte uma view com filtros expostos para cursos"  
- "Crie estrutura de paragraphs para uma home institucional"  
- "Gerar twig para exibir esse campo"  
- "Melhorar arquitetura Drupal desse projeto"  

---

## 🧠 Boas práticas com IA

- Sempre informar contexto (Drupal 10/11)  
- Informar nome dos campos  
- Informar objetivo (frontend, admin, etc.)  
- Pedir saída estruturada  

---

## ⚙️ Automação possível

Com IA você pode gerar:

- YAML de configuração  
- Estrutura de fields  
- Views export  
- Código Twig  
- Scripts Drush  

---

# 🚀 Roadmap

## Fase 1
- Site institucional  
- Cursos  
- Conteúdos  
- Equipe  

## Fase 2
- Cadastro de alunos  
- Pagamentos  
- Certificados  
- Dashboard administrativo  

---

# 🆘 Troubleshooting

## Limpar cache
ddev drush cr

## Reinstalar dependências
ddev composer install

## Rodar tudo novamente
ddev local-update

---

# 👨‍💻 Boas práticas gerais

- Sempre rodar local-update após atualizar o projeto  
- Nunca alterar config diretamente em produção  
- Usar config export/import corretamente  
- Evitar lógica no Twig (manter no backend)  
- Usar taxonomia ao invés de texto livre  
- Manter consistência nos nomes de campos  

---

# 📁 Estrutura do Projeto

.ddev/
web/
  modules/
  themes/
    custom/front_theme/
config/
composer.json

---

# 🧠 Filosofia do projeto

Este projeto foi pensado para:

- Ser escalável  
- Ser reutilizável  
- Facilitar manutenção  
- Integrar com automação e IA  
- Seguir boas práticas de Drupal  
