export function Card(backgroundColor, card, container){
    card.style.width = '200px';
    card.style.height = '200px';
    card.style.backgroundColor = backgroundColor;
    container.appendChild(card);
}