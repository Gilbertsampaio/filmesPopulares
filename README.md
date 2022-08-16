# Aplicação de teste em ReactJS para consumo de API de filmes do The Movie

## Sobre o projeto

Aplicação lista os filmes mais populares do momento, consumindo a API do [TheMovieDB](https://developers.themoviedb.org/), tela inicial mostrar uma listagem dos filmes mais populares, os mais populares sendo exibidos no topo da lista. Cada filme possui uma página especifica com mais detalhes.
### Requisitos

- Solicitar KEY da API em [TheMovieDB](https://www.themoviedb.org/settings/api)

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/Gilbertsampaio/filmesPopulares.git
```

**Siga os passos abaixo**

```bash
# Instale as dependências
$ yarn

# Faça uma cópia do arquivo '.env.example' para '.env'
$ cp .env.example .env

# Verifique se o arquivo .env possui a variável REACT_APP_API_URL com a url da API
# Insira sua Key na variável REACT_APP_API_KEY
# Caso deseje alterar o tamanho da imagem, altera o valor da  variável REACT_APP_BASE_URL_IMAGEM

# Start
$ yarn start
```