// Aula 3- Framework CSS
/*
CSS - Framework
"The Nasa has landed robots on Mars, and here we're still 
struggling to center-align our divs!" DEV desconhecido

O CSS possui uma biblioteca riquissima de comandados. Algumas
empresas e devs criam alguns padroes para facilitar o 
desenvolvimento de certos tipos de paginas e componentes.
 Sao os chamados frameworks

 http://geekflare.com/best-css-frameworks

MAS O QUE E UM FRAMEWORK?

  E uma abstracao que une codigs comuns entre varios projetos de 
software provendo uma funcionalidade genrica. 
  E uma estrutura base, uma plataforma de desenvolvimento, como uma
especie de arcabouco. ele contem ferramentas, guias, sostemas
e componetes que agilizam o processo de desenvolvimento
de solucoes.
 O grande desafio e a solucao de negocio, nao a solucao tecnica.

FRAMEWOEKS MVC: Laravel, Spring, Django, Rails
     
     // What is MVC?
     -Model view Controller
     -Software Architectural Desing Paattern
     -One of the most frequently used patterns
     -Separates application functionality
     -Promotes organized programming
     Some Web frameworks That Use MVC Concepts
     -Ruby on Rails (Ruby)
     -Sinatra(Ruby)
     -Zend(PHP)
     -Express(JS)
     -Backbone(JS)
     -Angular (JS)
     -Django (Python)
     -Flask (Python)

     MODEL
     -Gata related logic
     -INteraction with database (SELECT, INSERT< UPDATE, DELETE)
     -Communicates with controller
     -Can sometimes update the view (Depends on framework)

     VIEW
     -What the end user sees (UI)
     -Usually consists of HTML/CSS
     -Communicates with the controller
     -Can be passed dynamic values from the controller
     Template Engines

     CONTROLLER
     -Receives input (from view, url)
     -Processes requests (GET,POST,PUT, DELETE)
     -Gets data from the model
     -Passes data to the view
       
     


FRAMEWORKS JS: React Native, Angular, Vue
    https://www.youtube.com/watch?v=_P2fGeg9I5o    
    Choosing your JavaScript Framework
    What Do We Look At?
    Scale
    Features
    Supoort
    Longevity
    Performance
    Popularity
    Active Community
    Documentation

    Surveys and Polls
    Surveys Have Tremendous Value

    Dont Make this the only Data you process

    Features: Componets, Performance, Statemanagement, Lazy Loading
    Common Language/Transpilers

    Componet Communication
    -In React is Props
    -In Angular is Inputs
    - In Vue is Props

    Lazy Loading
    -In React is componets
    -In Angular is Sets of Components
    -In Vue is Components

    Common Language / Transpilers
    -In React is JavaScript
    -In Angular is TypeScript // TypeScript is gorwing in each
    -in Vue is Babel
    
    Standout Features
    -In React is Components
    -In Angular is full Framework
    -In Vue is Simplicity
    Features: You can build sucessful apps with each

    Life is an education. It is learned ostly 



FRAMEWORKS MOBILE: React Native, Ionic, Xamarin, Flutter 

    https://www.youtube.com/watch?v=4m7msadL5iA

    Choosing the Best Mobile App Framework
    Considerations: Time to market, development costs, hiring, 
    maintenace costs, app performance, feature availaibillity, 
    3* aprty risks
    FIRST PARTY NATIVE
    apple + xcode
    google + andoridstudio
    -framework owner: apple/google
    -Ui/Ux: native
    -decelopment speed: Slow
    -maintenance cost: High
    -performance: very high
    -proframming language: swift/ java
    -maturity: very mature
    -feature acess: complete 
    -open source: no
    
    PROGRESSIVE WEB APPS/ feature access:
    GOOD: bluetooth, local notifications, touch gestures, 
    geolocation,camera, device motion, offline store, file acess.
    NOTSGOOD: push notifications, battery status, vibration, 
    geofencing, augmented reality, outhers
    
    PROGRESSIVE WEB APPS/ Installing a PWA on mobile
    -does not require app store
    -installs locally to device
    -runs as an installed app

    CROSS-PLATFORM NATIVE APPS/popular frameworks
    -xamarin
    -react native
    -flutter
    -uno
    -kotlin native

    CROSS-PLATFORM NATIVE
    -framework owner: microsoft
    -UI/UX: Native
    -Development Speed: Fast
    -maintenance Cost: Low
    -performance: high
    -programming language: .NET, C#,F#
    -Maturity: Mature
    -Feature Access: Complete
    -Open Source: Yes

    CROSS-PLATFORM NATIVE
    -framework owner: facebook
    -UI/UX: Native
    -Development Speed: Fast
    -maintenance Cost: Low
    -performance: high
    -programming language: JavaScript
    -Maturity: Mature
    -Feature Access: Complete
    -Open Source: Yes
    *facebook + webstorm + visualstudiocode + atom + nuclide
    frameworks: blazor native script, angularJS, react, ionic
    
    CROSS-PLATFORM NATIVE
    -framework owner: Google
    -UI/UX: Bespoke
    -Development Speed: Fast
    -maintenance Cost: Medium
    -performance: High
    -programming language: Dart
    -Maturity: Young
    -Feature Access: Complete*
    -Open Source: Yes
    *updates relased via NPM

    Scenario
    Simple APP
    -Existing website created in AngularJS
    -Enginnering team of web devs
    -Doens`t require many features

    Augmented Reality App
    -Venture Capitol Funding
    -Weary of thirt party frameworks
    -risk adverse

    choose the best framework for your team
APLICADO AO CSS
 A ideia do framework CSS e que voce siga um padrao de 
desenvolvimento sem criar "novas classes" no CSS e sim
apenas especializango alguns estilos para coisas que sao
de sua aplicacao (com cores e tamanhos).
EXEMPLO: E se nosso codigo do menu ja estivesse, pronto
fosse somente necessario importar o CSS e criar um item
<ul> com a classe "navbar"?

FRAMEWORK CSS - CUSTO/BENEFICIO
PROS: 
-padroniza o desenvolvimento
-conhecimento reutilizavel em outro porjeto
que usa mesmo framework
-Aplicativos e sites ficam com a cara do framework ( que pode
combinar com a plataforma do usuario)
- nao precisa de um expert em CSS para fazer algumas telas
(cria custo beneficio que pode valer a pena no mundo do 
desenvolvimento)
- Ganha atualizacoes de forma recorrente

CONTRA:
- Dificulta uma mudanca de framework depois que 
o projeto ja tem alguns anos (amarrando o projeto)
-Nem todo frameworl CSS esta maduro para novas 
tecnologias front-end(React, Angular, etc)
-Todos os sites e aplicativos ficam com a mesma cara, e
isso enche o saco ao longo do tempo

FRAMEWORKS CSS mais populares: Bootstrap, Foudation,
Pure CSS, Semantic UI, Materialize, Bulma, Uikit, Skeleton

BOOTSTRAP
Criado pelo Twitter Inc., bootstrap, e sem duvida o lider de 
todos os frameworks para front-end disponiveis no mercado.

PROS:
- Protipagem rapida. Sistema de colunas sai de fabrica 
funcionando se as classes certas forem aplicadas, deixando
a pagina responsiva.
- Maior rcossistema de todos os frameworks
- Mantido pelo Twitter
-Possui basicamente todos os componentes que voce vai usar
num produto comum

CONTRAS:
- Monotonia de Ux -por ser o framework mais popular, todas
as paginas ficam mais ou menos com a mesma cara.
- Pouca Flexebilidade - Sair da linha e bem dificil
- Pesado (~270KB out-of-the-box)

MATERIALIZE
Materializes e um framework moderno baseado no Material 
Design by Google. O framework e gratuito, mas a equipe 
resposavel pelo projeto tambem oferece temas mais completos
que podem ser comprador por um valor bem razoavel.

PROS:
-Segue o sistema de 12 colunas Bootstrap
-permite um visual clean de largada, aproveitando os 
componetes do Google
- Dispositivo- agnostico (roda bem em mobile, desktop, etc)
- Possui basicamente tosos os componentes que voce vai usar 
num produto comum

CONTRAS: 
- Pouca flexibilidade - Sair da linha e bem dificil - Framework
"opinado"
- Pesado (270KB de largada)
- Nao tem suporte para Flexbox (uma alternativa mais robusta para
  o sistema de 12 colunas)

FONDATION
  Foudation e um framework que se entitula "o framework
  resposivo de front-end mais  avancado do mundo". Normalmente
  adotado como carro chee de developers em alternativa o 
  Bootstrp, e menos opinado e e mantido pela ZURP.
*/