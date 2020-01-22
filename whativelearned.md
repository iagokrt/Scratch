# Nesse arquivo vou traduzir trechos de código para reforçar conceitos, ou melhor, exemplos importantes de como devemos prosseguir caso queiramos fazer algo específicamente importante com o framework Phaser na sua versão utilizada no projeto (v3.15.1).

  

1.0 Estrutura básica. - nível 0 de conhecimento Phaser.

  

Para começo, Baixa-lo de alguma forma no site oficial do framework.
http://phaser.io/download <- Página de Download

Estrutura padrão do projeto - *Considerando o uso da Extensão do Visual Studio Code -> Live Server* - ~~assim não precisamos configurar Apache nem nada parecido.~~

 
projetoGame
-assets[Diretório/Subdiretórios]
-game.js (configurações básicas)
-index.html (HTML5 Básico)
-phaser.min.js (Framework Minificado)
-Scene1.js (Cenas)
-Scene2.js (Cenas)

**index.html**
Estrutura padrão HTML5, apenas importar os scripts do framework, cenas e game Configs.
**POR ÚLTIMO** o que configura o canvas e settings do jogo. (game.js).
essa ordem:

-phaser.min.js
-cenas.js
-game.js

**game.js**
A física default que será passada pode ser por princípio de 3 tipos:

.
Usaremos o tipo arcade.
.

.

  

## Cena1 (Scene1.js)

  

Criar uma classe que extende Scene.

No método preload dessa primeira cena. 
Carregar os spritesheets, tiles, images, ..

>Carregar Imagens no preload:

**this.load.image("background1", "assets/plx/plx-1.png");**

>Carregar Spritesheets no preload:

**this.load.spritesheet("player", "assets/adventurerSheet.png", {
frameWidth: 50,
frameHeight: 37
});**
<hr>

Dentro do método create da primeira Cena.
  
>Criar Animações para os spritesheets. 

Animação 'única':
**this.anims.create({
key: "skeleton_anim",
frames: this.anims.generateFrameNumbers("skeleton"),
frameRate: 20,
repeat: -1
});**

>Animação de determinada ação:

**this.anims.create({
key: "jump",
frames: this.anims.generateFrameNumbers("player", {
start: 14,
end: 23
}),
frameRate: 20,
repeat: -1
});**


Nota: As animações de Background (Parallax) não são feitas aqui.
  <hr>

## Cena2 (Scene2.js)
Mesmo padrão de criar classe..

  

Método, create() {} // vai criar elementos na Cena.
neste caso adicionaremos os backgrounds parallax aqui mas como tileSprites.


# Seguindo...

  

## this.physics.world.setBoundsCollision();

  

Adiciona Colisão no Limite da Tela, digamos assim.

mexendo na fisica do world faz sentido até..

  

Para adicionar physics a algum inimigo, ou player ou objeto, item, báu, estrela, espinho, etc, é um GameObject, aparentemente...

enfim.. Adiciona-los num grupo

  

Ex. :

inside create Method:

  

## this.enemies = this.physics.add.group();

  

Isso cria um grupo com física com o nome de enemies;

  

## this.enemies.add(this.enemyName);

  

Isso adiciona um personagem, ou item, etc. (deve ter sido criado antes. através de um sprite);

  

Preciso ver oque é isso exatamente.. mas é importante..

  

## this.skeleton1.setInteractive();

  

this.personagem.play('animação');

Assim chamamos a animação criada na cena 1 no método create.

outros exemplos:

this.warrior.play('attack');

this.enemySkeleton.play('dead');

  
  

Adicionando character na cena, ou item, ou qualquer coisa que seja 'interativo':

this.skeleton1 = this.add.sprite(

config.width / 2 - 50,

config.height / 1.2,

"skeleton"

);

  

Chamando sua animação (caso tenha):

Nota: neste caso a animação rodará indeterminadamente, é mais específico.

this.skeleton1.play("skeleton_anim");

  

Essa simples linha permite usar o teclado para jogar..

## this.cursorKeys = this.input.keyboard.createCursorKeys();

Depois devemos criar uma função que lide com a entrada de inputs,se o jogador aperta espaço ou enter, seta pra baixo, esquerda, etc

  

Antes setamos a colisão para as laterais do World. agora vamos habilitar isso para nosso player

## this.player.setCollideWorldBounds(true);

  
  

Método Update.

Aqui sim faz-se a animação para o parallax.

em:

  

## this.background1.tilePositionX += 5;

## this.backgroundMaisLonge.tilePositionX += 3;

## this.backgroundMaisLongeAinda.tilePositionX += 1;

  

Basicamente é isso. no exemplo 3 imagens em velocidades diferentes, que causam um efeito de 3d para jogos 2d. é bem legal e deixa tudo mais interessante..bora!

  

Dentro do update() {

// Aqui

}

  

podemos também chamar outras funções que criarmos, caso elas precisem ser 'revistas' mais vezes, por exemplo chamar dentro do update a função:

  

## this.movePlayerManager();

que lida com o tocar das teclas do teclado, ou movimento do mouse e clique por exemplo.

Chamar a função não fará com que ela esteja funcionando, precisamos cria-la, fora do update de preferência.