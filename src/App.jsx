import './App.css'

// Fundo e imagens dos personagens 

import Background from './assets/background.png'
import Alegria from './assets/alegria.png'
import Tistreza from './assets/tristeza.png'
import Raiva from './assets/raiva.png'
import Medo from './assets/medo.png'
import Nojinho from './assets/nojinho.png'
import Ansiedade from './assets/ansiedade.png'
import Inveja from './assets/inveja.png'
import Tedio from './assets/tedio.png'
import Vergonha from './assets/vergonha.png'

import PersonagemCard from './PersonagemCard';

/* 
alegria - rgb(236, 184, 26)
tistreza - rgb(33, 70, 155),
raiva - rgb(165, 21, 8),
medo - rgb(96, 45, 143),
nojinho - rgb(57, 150, 42),
ansiedade - rgb(193, 98, 41),
inveja - rgb(4, 138, 130),
tedio - rgb(64, 57, 177),
vergonha - rgb(206, 44, 138),
*/

function App() { 
  const personagens = [ // Função e variavel para personagens e suas caracteristicas;
    { 
      nome: 'Alegria', 
      imagem: Alegria,
      descricao: 'Voce está alegre. A principal missão da Alegria é deixar Riley contente e realizada, ela é a grande responsável pela menina ler os acontecimentos da sua vida de forma positiva e favorável.', 
      color: {
        r: 236, g: 184, b: 26, // cor de fundo e degrade  do cartão
        light: 32,  
        shadow: 64
      } 
    },
    { 
      nome: 'Tistreza', 
      imagem: Tistreza,
      descricao: 'Você está triste.  A tristeza  ajuda a Riley processar eventos traumáticos, perdas e situações difíceis. Ela nos permite enfrentar e compreender a magnitude de eventos dolorosos em nossas vidas, permitindo que processemos e aceitemos a realidade emocional. ', 
      color: {
        r: 33, g: 70, b: 155, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Raiva', 
      imagem: Raiva,
      descricao: 'Você está com raiva . A raiva se sente muito apaixonada por garantir que as coisas sejam justas para Riley. Ele tem um espírito de fogo e tende a explodir (literalmente) quando as coisas não saem como planejado. Ele é rápido para exagerar e tem pouca paciência para as imperfeições da vida.', 
      color: {
        r: 165, g: 21, b: 8, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Medo', 
      imagem: Medo,
      descricao: 'Você está com medo. O medo de Riley representa o traço de caráter esquizoide e o seu maior medo é o de ser rejeitado. ', 
      color: {
        r: 96, g: 45, b: 143, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Nojinho', 
      imagem: Nojinho,
      descricao: 'Você está com nojinho. A nojinho representa para Riley que  as pessoas são mais atraentes, com as curvas bem distribuídas e harmônicas, mas nunca enxergam a própria', 
      color: {
        r: 57, g: 150, b: 42, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Ansiedade', 
      imagem: Ansiedade, 
      descricao: 'Você está ansioso(a). A ansiedadade mostra a Riley que a ansiedade é um sentimento normal e que pode ter um propósito positivo, desde que não tome conta de nós. No filme, ela assume o controle e é mostrada como uma emoção que ajuda Riley a evitar consequências prejudiciais para seu futuro.', 
      color: {
        r: 193, g: 98, b: 41, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Inveja', 
      imagem: Inveja,
      descricao: 'Você está com inveja.  A inveja surge em Riley como uma oportunidade de explorar temas como autoaceitação, auto-estima e valorização do que se tem.', 
      color: {
        r: 4, g: 138, b: 130, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Tedio', 
      imagem: Tedio,
      descricao: 'Você está com tedio. Mesmo sendo algo desagradável  ele identifica as situações que Riley não tem os estímulos suficientes para sentir alegria e traz reflexões sobre a importância dos momentos de ócio criativo e relaxamento na agitação da vida contemporânea.', 
      color: {
        r: 64, g: 57, b: 177, 
        light: 32, 
        shadow: 32
      } 
    },
    { 
      nome: 'Vergonha', 
      imagem: Vergonha,
      descricao: 'Você está com vergonha. A Vergonha traz a sensação de humilhação e o medo do julgamento, pois está sempre preocupada com que os outros estão pensando sobre Riley.', 
      color: {
        r: 206, g: 44, b: 138, 
        light: 32, 
        shadow: 32
      } 
    },
  ];

  return (
    <div className='conteudo'>
      <img className='fundo borrado' src={Background}/>  

      <div className='titulo-section'>
        <h1 className='titulo'>Como você está se sentindo hoje?</h1>
        <h3>Clique no persongem que mais representa seu sentimento</h3>
      </div>

      <div className='personagens'>
        {
          personagens.map((p) =>  // Criando pra cada personagem um cartão
            <PersonagemCard personagem={p}/>)
        }
      </div>
    </div>

    /****************************** */
    // <div className='conteudo'>
    //   <img className='fundo' src={BackgroundSelection}/>

    //   <div className='titulo-section'>
    //      <h1 className='titulo'>Você está se sentindo</h1>
    //      <h3>Alegre, Com nojo e Entediado</h3>
    //   </div>

    //   <div className='selecionados'>
    //     {
    //       personagens.map((p) => 
    //         <img className='selecionados-image' src={p.imagem}/>)
    //     }
    //   </div>
    // </div>
  )
}

export default App
