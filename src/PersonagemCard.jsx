

import { useState } from 'react';
import './App.css'


const PersonagemCard = ({personagem}) => {
// Se não  tiver um personagem ele retorna vazio    
if (personagem === null)
       return;
    
    const color = personagem.color;

    const [selected, setSelected] = useState(true);

// Cor dos cartoes
    const cardStyle = {
        background: `linear-gradient(to bottom, 
            rgb(${color.r}, ${color.g}, ${color.b}),
            rgb(${color.r - color.shadow}, ${color.g - color.shadow}, ${color.b - color.shadow}) 80%,
            rgb(${color.r + color.light}, ${color.g + color.light}, ${color.b + color.light}))`,
    };
// Evento do click do cartão 
    const onClickCard = (event) => {
        // Salva o estado do cartão selecionado
         setSelected(!selected);

        let cardImage = event.currentTarget;

        // Se ele for selecionado ele adiciona uma classe de CSS 
        if (selected) {
            cardImage.classList.add('selected');
        } 
        // Se não for selecionado ele remove
        else {
            cardImage.classList.remove('selected');
        }
        
        
    };

    // Html do cartão
    return (
        <div className='card-personagem'>
            <div className='card-image' style={cardStyle} onClick={onClickCard}>
                <img src={personagem.imagem}></img>
                <p className='card-description'>{personagem.descricao}</p>
            </div>
            <h2 className='card-name'>{personagem.nome}</h2>
            
        </div>
    )
};

export default PersonagemCard;