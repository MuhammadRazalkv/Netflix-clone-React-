// src/assets/cards/Cards_data.d.ts
declare module './Cards_data' {
    interface Card {
      image: string; // Path to the image
      name: string; // Name of the card
    }
  
    const cardsData: Card[]; // Array of Card objects
    export default cardsData; // Exporting the cardsData
  }
  