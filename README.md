# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: Os "atributos" async e defer servem para manipular a forma de carregamento dos recursos de dentro da Tag. O atributo async indica 
para o browser que ele pode carregar paralelamente o arquivo da tag e executar seu código ao junto com o carregamento/análise do arquivo HTML.
Já o atributo defer indica para o browser que ele pode carregar o arquivo paralelamente com o arquivo HTML, entretando, a sua execução só será
realizada após o término do carregamento/análise do arquivo HTML.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: Trata-se de um Callback, ou seja, este parâmetro serve para executar a função especificada (initMap) assim que a API tiver
seu carregamento concluído.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: A função initMap não é executada e, portanto, o componente não é carregado.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: A tag <link> determina que será carregado um Manifesto de Web App, referenciando o arquivo manifest.json. A tag cujo name é "theme-color" serve para alterar a cor
do tema que envolve a aplicação web. A tag cujo name é "apple-mobile-web-app-capable" determina que a aplicação web possa ou não ser executada em modo 
Fullscreen em um dispositivo Apple, dependendo do valor que está no atributo content (como no caso está como Yes, então sim, a aplicação poderá rodar num dispositivo Apple em fullscreen).
Por fim, a tag cujo name é "apple-mobile-web-app-status-bar-style" é responsável por estilizar de forma básica a barra de progresso de uma aplicação web quando
aberta por um dispositivo Apple, como o atributo content foi setado como "black", será atribuído a cor preta no fundo da barra de carregamento.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: A tag <link> determina que será carregado um Manifesto de Web App, referenciando o arquivo manifest.json. A tag cujo name é "theme-color" serve para alterar a cor
do tema que envolve a aplicação web. A tag cujo name é "apple-mobile-web-app-capable" determina que a aplicação web possa ou não ser executada em modo 
Fullscreen em um dispositivo Apple, dependendo do valor que está no atributo content (como no caso está como Yes, então sim, a aplicação poderá rodar num dispositivo Apple em fullscreen).
Por fim, a tag cujo name é "apple-mobile-web-app-status-bar-style" é responsável por estilizar de forma básica a barra de progresso de uma aplicação web quando
aberta por um dispositivo Apple, como o atributo content foi setado como "black", será atribuído a cor preta no fundo da barra de carregamento.


### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: Não, pois, de fato, embora possua alguns conceitos que envolvem a questão do PWA, como dados de manifesto de Web APP que estilizam o aplicativo dando uma boa
usabilidade e o fato de poder ser executado sem a necessidade de uma instação e tudo mais, este aplicativo  fornece apenas um recurso de uso da API do google, 
o que não a completa como uma Web app Progressiva de fato. Seria necessário mais recursos que contemplem melhor as necessidade do usuário, e tudo isso mantendo
a linha de raciocínio desta, que é evitando instalar e utilizar qualquer recurso físico do dispositvo que irá executar esta aplicação.


## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: O método ngOnInit serve para executar um conjunto de comandos determinados pelo programador logo após a detecção de alguma alteração no componente
em questão pela primeira vez. Angular lifecycle hooks são métodos que servem para executar ações determinadas pelo programador de acordo com o que acontece com 
o componente após a sua criação. É como se fossem eventos HTML, mas são poucos, e cujo gatilho é determinado pelo próprio Angular. O diferencial é que estes métodos
são interligados entre si, tendo todo um esquema e ordem de execução entre os métodos, dando realmente uma sensação de ciclo de vida do componente.
Eles são: O próprio ngOnInit(), já citado aqui, o ngOnChanges(), ngDoCheck(), ngAfterContentInit(), ngAfterContentChecked(), ngAfterViewInit(), ngAfterViewChecked()
e o ngOnDestroy().


### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: Web Components é um conjuntos de bibliotecas web que fornecem uma série funcionalidades e recursos para aplicações web. Um dos principais
recursos do Web Components que fornece uma série de vantagens é o Custom Elements, onde você pode criar seus próprios elementos HTML como se fossem classes, possuindo construtores, métodos, atributos
e etc. e utilizar livremente dentro da sua aplicação.


### c) Para que serve a tag ngFor do angular?
R: Serve para acessar e exibir dados em forma de listas e tabelas de componentes Web.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: O código representa a inicialização da variável legends, cujo tipo é um Array de strings, tendo seu conteúdo vazio.

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### f) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:
