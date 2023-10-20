## Sobre o projeto
Esse repositório possui a junção das tecnologias NodeJs e TypeScript numa arquitetura direta, robusta e autoexplicativa. Trata-se de um microframework construído para possuir essas caractéristicas, enquanto, paralelamente,
é escalavel e resistente à falhas. 

## Contribuições
Para contribuir com o projeto, me contate através do <a href="https://www.linkedin.com/in/silassantosdasilva/"> meu LinkedIn </a>, ou crie uma PR diretamente para o repositório.

## Estrutura de arquivos

├── app.yaml <br>
├── nodemon.json <br>
├── package-lock.json <br>
├── package.json <br>
├── src <br>
│   ├── Servidor.ts <br>
│   ├── config <br>
│   │   └── ConectarComMongoDb.ts <br>
│   ├── core <br>
│   │   ├── Controladores <br>
│   │   │   └── ControladorDeCrud.ts <br>
│   │   ├── Entidades <br>
│   │   │   └── IEntidade.ts <br>
│   │   ├── Modelos <br>
│   │   │   └── Modelo.ts <br>
│   │   └── Repositorio <br>
│   │       ├── IRepositorio.ts <br>
│   │       └── Repositorio.ts <br>
│   └── domain <br>
│       └── SolicitacaoDeCredito <br>
│           ├── ControladorCrudDeSolicitacaoDeCredito.ts <br>
│           ├── IEntidadeDeSolicitacaoDeCredito.ts <br>
│           ├── ModeloDeSolicitacaoDeCredito.ts <br>
│           ├── RepositorioDeSolicitacaoDeCredito.ts <br>
│           ├── RoteadorDeSolicitacaoDeCredito.ts <br>
│           └── ServicosParaSolicitacaoDeCredito.ts <br>
└── tsconfig.json
