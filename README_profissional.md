# 🧠 Psicanálise Preta – Projeto Drupal

Projeto institucional em Drupal com foco em conteúdo, cursos e futura gestão de alunos (pagamentos e certificados). Arquitetura escalável, modular e preparada para automação.

---

# 🚀 Setup do Projeto

## Clonar repositório
```bash
git clone <repo-url>
cd psicanalise-preta
```

## Subir ambiente
```bash
ddev start
```

## Instalar dependências
```bash
ddev composer install
```

## Instalar Drupal (se necessário)
```bash
ddev drush si standard -y
```

## 🔄 Rodar instalão do tema
```bash
ddev theme-install
```

## Rodar setup completo
```bash
ddev local-update
```

## Acesso
```bash
ddev drush uli
```

---

# 🧩 Arquitetura

## Backend
- Drupal 10/11
- Drush
- Config Sync (CIM/CEX)
- Estrutura orientada a conteúdo

## Frontend
- Tema custom (front_theme)
- Build com Node/NPM
- Componentização com Paragraphs

---

# 🛠️ Comandos DDEV

Local: `.ddev/commands/web/`

### local-update
- composer install
- drush updb
- drush cim
- build frontend
- drush cr
- drush uli

### theme-build
Build produção
```bash
ddev theme-build
```

### theme-dev
Build dev
```bash
ddev theme-dev
```

### theme-watch
Watch automático
```bash
ddev theme-watch
```

---

# 📦 Stack Drupal

- Pathauto + Token → URLs
- Paragraphs → Layout
- Views → Listagens
- Taxonomy → Classificação
- Config Sync → Deploy

---

# 🌍 Tradução

```bash
ddev drush en language locale content_translation config_translation -y
ddev drush language:add pt-br
ddev drush locale:update
```

---

# 🧠 Modelagem

## Content Types
- Curso
- Conteúdo
- Equipe

## Taxonomias
- Categoria
- Cargo

## Usuários
- Autenticação
- Base futura (alunos)

---

# 🧱 Padrões Drupal

- Prefixo de campos: field_
- Prefixo de taxonomia: vocab_
- Evitar lógica no Twig
- Usar Services para regras de negócio
- Config sempre via export (drush cex)

---

# 🔀 Git Flow

## Branches
- main → produção
- develop → integração
- feature/* → novas features
- hotfix/* → correções urgentes

## Fluxo
1. Criar branch a partir de develop
2. Desenvolver
3. Rodar local-update
4. Commit + PR
5. Merge em develop
6. Deploy

---

# 🚀 Deploy

## Checklist
- drush cex antes de subir
- composer install em produção
- drush cim
- drush updb
- drush cr

## Exemplo
```bash
composer install --no-dev
drush cim -y
drush updb -y
drush cr
```

---

# ⚙️ CI/CD (Sugestão)

## Pipeline básico

1. Install
```bash
composer install
```

2. Lint
```bash
phpcs
```

3. Build frontend
```bash
npm run build
```

4. Testes (se houver)

5. Deploy

---

# 🧪 Qualidade

- PHP CodeSniffer (Drupal standard)
- Revisão de PR obrigatória
- Testar config sync antes de subir

---

# 🤖 Uso com IA

Use prompts como:
- Criar content type
- Criar view
- Gerar twig
- Melhorar arquitetura

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
config/
composer.json

---

# 🧠 Filosofia

- Escalável
- Modular
- Automatizado
- IA-ready
