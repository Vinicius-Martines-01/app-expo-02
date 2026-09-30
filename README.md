# App de Contatos

Aplicativo mobile para organizar contatos pessoais. O usuário pode criar uma conta, acessar o app com seu token de autenticação e manter sua lista de contatos sincronizada com uma API REST.

## O que o app faz

- Permite cadastrar e autenticar usuários.
- Mantém o token de acesso armazenado com `expo-secure-store`.
- Exibe os contatos em uma lista usando `FlatList`.
- Permite criar, editar, consultar e excluir contatos.
- Permite selecionar uma foto da galeria para usar como imagem do contato.
- Exibe uma imagem padrão quando o contato não possui foto.

## Tecnologias

- React Native e Expo SDK 57
- TypeScript
- Expo Router para navegação baseada em arquivos
- Axios para comunicação com a API
- `expo-secure-store` para persistência da sessão
- `expo-image-picker` para seleção de imagens

## API

O app utiliza a API REST hospedada no Render:

`https://api-contatos-auth-04-09-25.onrender.com`

O token retornado no login é enviado nas requisições protegidas. O upload de imagens é feito antes de salvar o contato, e o identificador retornado pela API é usado para carregar a foto remotamente.

## Executando o projeto

Na raiz do projeto, instale as dependências e inicie o Expo:

```bash
npm install
npx expo start
```

Depois, abra o projeto no Expo Go ou em um emulador Android/iOS. Para executar no navegador:

```bash
npx expo start --web
```

## Organização principal

- `app/`: telas e rotas do Expo Router.
- `components/`: componentes reutilizáveis, como o formulário de contato.
- `lib/api.ts`: cliente Axios e gerenciamento do token de autenticação.
- `types/`: tipos TypeScript do domínio.
- `assets/`: ícones e imagem padrão de perfil.
