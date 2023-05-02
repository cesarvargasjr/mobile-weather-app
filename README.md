## Projeto consumindo API de previsão do tempo

### Objetivo do desenvolvimento:

Tem-se por objetivo desenvolver uma aplicação usando React Native, tanto para usuários de smartphones Android quanto IOS, atendendo o layout disponibilizado no [Figma](https://www.figma.com/community/file/1158928016905524023) criado pela [@becabelin](https://www.figma.com/@becabelin). Além disso consumir a API ([Acessar API](https://api.hgbrasil.com/weather)) com a previsão do tempo.

##

### Detalhes do desenvolvimento do projeto:

Antes de iniciar o desenvolvimento de fato, após entender claramente a proposta do teste, criei um roadmap para evoluir as implementações de forma organizada e planejada. Desde o início criando branches para cada feature e realizando mesclagens após a conclusão das etapas para maior segurança na implementação.
Tendo também como princípio três pilares, UI, UX e Código. Como base para proporcionar interfaces interativas e agradáveis para o usuário, experiência intuitiva e performática na utilização do sistema, e é claro, um código bem construído, de forma clean e legível para facilitar o entendimento de qualquer programador que for dar manutenção.

Aprofundando um pouco a parte técnica, para o consumo da API utilizei o Axios. A API disponibilizada exigia uma chave para acessá-la, sendo assim, segui padrões de segurança utilizando um arquivo .env com as credenciais. Não esquecendo de tratar possíveis erros de requisições evitando gerar experiência negativa ao usuário. Além disso, apliquei uma arquitetura organizada conforme a convenção recomenda e componentizando todos os componentes que possam ser reutilizados em outros pontos do sistema, dessa forma, além de ser possível reutilizá-los tornam os códigos implementados mais otimizados e organizados para futuras manutenções.

Alterei a splashscreen e ícones da aplicação para proporcionar uma identidade visual agradável e uma identificação padronizada.

Para finalizar, defini fontes e cores globais que auxiliam e proporcionam um desenvolvimento veloz e garante que os estilos utilizados estão seguindo o padrão pré-definido. Em relação aos testes end-to-end realizei todos no emulador e em meu smarthphone sendo os dois IOS.

##

### Funcionalidades desenvolvidas:

- Tela principal com informações referente a previsão do tempo do dia e dos próximos dias. Não só informando a temperatura mas também a probabilidade de chuvas, percentual de umidade e velocidade do vento;
- Dropdown com opções de cidades para o usuário escolher qual deseja naquele momento visuazar a sua previsão do tempo;
- A cor do background do aplicativo é dinâmica conforme o turno, por exemplo, se o app for acessado durante o dia o background é azul claro, se for a noite é azul escuro;
- O ícone exibido na parte superior, referente a temperatura daquele momento em questão também é dinâmico conforme o turno. Se for durante o dia exibe-se um Sol, se for a noite altera-se para uma Lua;
- Card com a previsão do tempo para os próximos sete dias, exibindo o dia da semana, data em questão e a termperatura mínima e máxima.

##

### Tecnologias utilizadas no desenvolvimento:

- React Native
- Typescript
- JavaScript
- HTML
- CSS (Styled Components)
- Axios

##

### Observações: 

- A API disponibilizada tinha uma limitação de acessos por IP, devido a essa questão, eu tinha duas opções. Fazer um mock de dados ou assinar o plano básico da API para ter um número de acessos mais abrangente. Optei pelo plano de assinatura por que proporciona um formato mais real do cotidiano de um desenvolvedor;
- Não foi desenvolvida a funcionalidade de visualizar a previsão do tempo a cada hora, devido que, o plano de assinatura não cobria o consumo destas informações. Nem mesmo, sem o plano de assinatura com o número de acessos limitados para utilização gratuita da API como demonstração para saber o que ela proporcionava, não eram disponibilizadas estas informações.
- Devido a questão da chave e assinatura para consumir a API sem limitações, inclui no arquivo .env minha chave particular para que o avaliador do repositório não tenha problemas ao executá-lo. Não é uma boa prática mas como é um teste técnico e meu objetivo é ter a garantia da sua análise fiz dessa forma.

##

### Para executar o projeto:

```bash
# Clonar o repositório:
$ git clone https://github.com/cesarvargasjr/mobile-weather-app.git
```

```bash
# Acessar a pasta do projeto via terminal:
$ cd mobile-weather-app
```

```bash
# Instale as dependências:
$ npm i
```

```bash
# Execute a aplicação:
$ expo start
# ou
$ npx expo start
```

```bash
# Instale o EXPO em seu emulador.
```

```bash
# Após realizar os itens acima, em seu terminal digite "A" para executar a aplicação em um emulador Android ou "I" para emulador IOS.
```

##

### Screenshot da aplicação:

<p align="center">
<img width="354" alt="image" src="https://user-images.githubusercontent.com/72532360/235737915-cb562678-d056-42be-a813-3af33acc79eb.png">

<img width="352" alt="image" src="https://user-images.githubusercontent.com/72532360/235738144-c70ae9f6-0b3a-4e2b-9db1-63e90ae4daf4.png">

<img width="349" alt="image" src="https://user-images.githubusercontent.com/72532360/235738455-594176b7-7b5a-4939-8c64-a11b6716753d.png">

<img width="351" alt="image" src="https://user-images.githubusercontent.com/72532360/235738666-b5caa52f-ada0-4051-9dde-4f1f978ca790.png">

</p>
