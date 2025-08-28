# Opalbytes Website

## Descrição

Este é o website oficial da Opalbytes, construído com Next.js, TypeScript e Tailwind CSS. O projeto utiliza componentes Shadcn UI para uma interface de usuário moderna e responsiva. O objetivo principal é apresentar informações sobre a Opalbytes, seus serviços e permitir a interação com os visitantes.

## Funcionalidades

- Seção Hero: Destaque inicial com informações importantes.
- Seção Sobre: Detalhes sobre a Opalbytes.
- Seção de Serviços: Descrição dos serviços oferecidos.
- Navegação: Menu de navegação responsivo.
- Rodapé: Informações de contato e links úteis.
- Tema: Suporte a temas (claro/escuro) via `ThemeProvider`.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React para aplicações web com renderização no lado do servidor e geração de sites estáticos.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset tipado de JavaScript que melhora a segurança e a manutenibilidade do código.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Shadcn UI**: Coleção de componentes de UI reutilizáveis e acessíveis, construídos com Radix UI e Tailwind CSS.

## Primeiros Passos

Siga estas instruções para configurar e executar o projeto localmente.

### Pré-requisitos

Certifique-se de ter o Node.js (versão 18 ou superior) e o npm (ou yarn/pnpm) instalados em sua máquina.

### Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd opalbytes
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou yarn install
   # ou pnpm install
   ```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou yarn dev
# ou pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

Para construir a aplicação para produção:

```bash
npm run build
# ou yarn build
# ou pnpm build
```

Para iniciar o servidor de produção:

```bash
npm run start
# ou yarn start
# ou pnpm start
```

## Estrutura do Projeto

```
opalbytes/
├── app/                  # Rotas e layouts principais da aplicação Next.js
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes Shadcn UI
│   └── ...               # Componentes específicos da aplicação (e.g., hero-section)
├── hooks/                # Hooks React personalizados
├── lib/                  # Funções utilitárias e helpers
├── public/               # Ativos estáticos (imagens, ícones)
├── styles/               # Estilos globais e configurações CSS
├── .gitignore            # Arquivos e diretórios a serem ignorados pelo Git
├── components.json       # Configuração do Shadcn UI
├── next.config.mjs       # Configuração do Next.js
├── package.json          # Dependências e scripts do projeto
├── postcss.config.mjs    # Configuração do PostCSS (para Tailwind CSS)
├── tsconfig.json         # Configuração do TypeScript
└── README.md             # Este arquivo
```

## Contribuindo

Contribuições são bem-vindas! Por favor, siga as diretrizes de código e envie pull requests para o branch `main`.

1. Faça um fork do repositório.
2. Crie um novo branch (`git checkout -b feature/sua-feature`).
3. Faça suas alterações e commit (`git commit -m 'feat: Adiciona nova funcionalidade'`).
4. Envie para o branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.
