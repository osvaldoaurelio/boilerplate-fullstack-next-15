# Boilerplate Fullstack Next 15

> Um ponto de partida completo para o desenvolvimento de uma aplicação fullstack.

Este repositório fornece um boilerplate básico para aplicações fullstack, com as principais bibliotecas e configurações iniciais prontas para uso.

## Sumário

- [Tecnologias](#tecnologias)
- [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Extras](#extras)
  - [Fontes](#fontes)
  - [Oh My Zsh](#oh-my-zsh)
  - [Alias](#alias)
  - [Comandos Úteis](#comandos-úteis)
- [Contatos](#contatos)

## Tecnologias

Principais tecnologias utilizadas:

- **[Node.js](https://nodejs.org/)**
- **[Next.js](https://nextjs.org/)**
- **[shadcn/ui](https://ui.shadcn.com/)**
- **[Auth.js](https://auth.js.org/)**
- **[Prisma](https://www.prisma.io/)**
- **[Zod](https://zod.dev/)**

## Ambiente de Desenvolvimento

> Usuários windows:
>
>- Instalar o [WSL- Windows Subsystem for Linux](https://learn.microsoft.com/pt-br/windows/wsl/install)
>- Instalar o [Docker Desktop](https://docs.docker.com/.desktop/install/windows-install/) (opcional).
>
>---
>
>*Importante: Após instalar uma distro no WSL e antes de qualquer instalação, atualize o sistema.*
>
>*Por exemplo, no [Ubuntu](https://ubuntu.com/desktop/wsl), use o comando: `sudo apt update && sudo apt upgrade`.*

1. Editor de código:

    - Instale o [Visual Studio Code](https://code.visualstudio.com/).
    - Extensões recomendadas:
        - [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
        - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
        - [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
        - [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
        - [Dracula Theme Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)
        - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
        - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
        - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
        - [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
        - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
        - [Portugues (Brazil) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-pt-BR)
        - [Postman](https://marketplace.visualstudio.com/items?itemName=postman.postman-for-vscode)
        - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
        - [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
        - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

2. Instalar Git:
    - Instale o [Git](https://git-scm.com/downloads) com o comando: `sudo apt install git`.

3. Instalar Node.js:

    - Instale o Node.js com [NVM](https://github.com/nvm-sh/nvm/) para melhor gerenciamento de versões.
    - Instale também o [PNPM](https://pnpm.io/installation) para gerenciamento de pacotes.

## Instalação

Para instalar e configurar o projeto:

1. Clone o repositório:

    ```bash
    git clone https://github.com/osvaldoaurelio/boilerplate-fullstack-next-15.git
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd boilerplate-fullstack-next-15
    ```

3. Instale as dependências:

    ```bash
    pnpm install
    ```

4. Configure as variáveis de ambiente:
    - Duplique o arquivo `.env.example` e renomeie para `.env`.
    - Ajuste os valores das variáveis de ambiente conforme necessário.

5. Execute as migrações do Prisma:

    ```bash
    pnpm dlx prisma migrate dev
    ```

6. Inicie o servidor de desenvolvimento:

    ```bash
    pnpm dev
    ```

## Estrutura do Projeto

```plaintext
boilerplate-fullstack-next-15/
├── prisma/             # Pasta do Prisma (esquema e migrações)
│   └── schema.prisma   # Arquivo de definição de esquema do Prisma
├── public/             # Arquivos públicos (imagens estáticas, favicon, etc.)
├── src/                # Código-fonte principal do projeto
│   ├── actions/        # Server actions (funções de servidor em Next.js)
│   ├── app/            # Páginas do Next.js
│   ├── assets/         # Recursos estáticos (imagens, fontes, etc.)
│   ├── components/     # Componentes reutilizáveis
│   │   └── ui/         # Componentes do shadcn/ui
│   ├── constants/      # Constantes globais
│   ├── hooks/          # Hooks personalizados
│   ├── lib/            # Configurações e bibliotecas
│   ├── middleware/     # Middlewares do Next.js
│   ├── styles/         # Estilos globais e CSS personalizados
│   └── types/          # Tipos e interfaces personalizados
├── .env.example        # Arquivo de exemplo para variáveis de ambiente
└── README.md           # Documentação do projeto
```

## Extras

> Configurações e ajustes opcionais para melhorar a experiência de desenvolvimento.

*Usuários Windows: exceto as fontes, que devem ser instaladas diretamente no Windows, todas as outras configurações devem ser feitas no WSL.*

### Fontes

Para uma melhor visualizaçãoo do código, instale a fonte [Fira Code](https://github.com/tonsky/FiraCode), que supoorta [ligaduras](https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions) e [glyphs](https://github.com/tonsky/FiraCode/wiki/Github-Glyphs).

### Oh My Zsh

Para personalizar seu terminal com [Oh My Zsh](https://ohmyz.sh/), instale o [ZSH](https://ohmyz.sh/) com:

```bash
sudo apt install zsh
```

Em seguida, instale o Oh My Zsh com:

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### Alias

Configure atalhos (aliases) no seu ambiente de desenvolvimento adicionando os comandos abaixo ao seu `~/.zshrc` ou `~/.bashrc`:

```bash

alias c='clear'
alias l='c && ls -AFGhl --color=auto --show-control-chars --group-directories-first && echo "\ncurrent dictory => $PWD 🫠💻"'

alias pa='pnpm add'
alias pi='pnpm install'
alias pr='pnpm remove'
alias pu='pnpm update'
alias pv='pnpm dev'
alias px='pnpm dlx'
```

### Comandos úteis

Alguns comandos úteis para acelerar o desenvolvimento:

```bash
############################### NVM ###############################
nvm install --lts            # Instalar a última versão LTS do node
nvm use --lts                # Usar a última versão LTS do node
nvm current                  # Mostrar a versão do node atual

############################## SHADCN ##############################
pnpm dlx shadcn@latest add   # Adicionar componentes do shadcn

############################## PRISMA ##############################
pnpm dlx prisma generate     # Gerar os arquivos do Prisma Client
pnpm dlx prisma migrate dev  # Criar as migrações do Prisma
pnpm dlx prisma studio       # Iniciar o studio do prisma
```

### Contatos

Para entrar em contato comigo, siga-me nas redes:

- [Linkedin](https://linkedin.com/in/osvaldo-aurelio)
- [GitHub](https://github.com/osvaldoaurelio)
- [YouTube](https://youtube.com/@osvaldoaurelio)
- [Instagram](https://instagram.com/osvaldo.aureliors)

---

## Construindo o projeto


```bash
px create-next-app@latest . --ts --tailwind --eslint --app --src-dir --turbopack --use-pnpm --skip-install --no-import-alias
```

*Cria um projeto Next.js com TypeScript, Tailwind CSS, ESLint, App Routes, diretório src, turbopack para modo development, pnpm como gerenciador de pacotes, sem instalar dependências e sem personalizar o alias de importação.*

---

```bash
px shadcn@latest init -d
```

*Configura o shadcn/ui no projeto com style New York, cor Zinc e utiliza variáveis CSS para cores.*

---

```bash
pa @prisma/client @auth/prisma-adapter bcryptjs next-auth@beta next-intl next-themes zod
```

*Instala as dependências necessárias para o projeto.*

---

```bash
pa @types/bcryptjs prisma -D
```

*Instala as dependências de desenvolvimento.*

---

```bash
px prisma init --datasource-provider sqlite --preview-feature prismaSchemaFolder --preview-feature multiSchema
```

*Inicializa o Prisma com o provedor SQLite, habilita recursos de primaSchemaFolder e multiSchema.*

---

