import React from 'react';

const MemoryHelp = props => {
  return (
    <div id="memory-help">
      <h1>Help</h1>
      <ul>
        <li><a href="#how">How to play Memory</a></li>
        <li>Create a custom game</li>
        <li>Launch a game</li>
        <li>Edit a game</li>
        <li>Delete a game</li>
      </ul>
      <h3 id="how">How to play Memory</h3>
      <p>{`Memory is a really simple game. A series of cards are placed face down.  The player
      turns over two cards at a time, attemping to match identical cards.  If the two cards
      do not match, they are turned faced down and the player tries again.  If the two cards
      do match, they are removed from the game.  The goal is to remove all matched cards from the game.
      When there are no more cards to match, the game is over.`}</p>
      <p>{`In the case of Movie Memory, you are trying to match movie posters from your favorite movies.
      Movie Memory keeps a running score for you.  Each match counts 25 points.  Each consecutive match
      multiplies that score by the number consecutive matches. Movie Memory also tracks the number
      of attempts it takes for you the complete the game. Upon completion, the game will display a
      "Memory Index".  The Memory Index is simply your final score, divided by total attempts.`}</p>
      <p>{`Movie Memory allows you three free guesses to start the game. This gives you a starting point
      to begin the game.`}</p>
      <p>{`When your three guesses are up, click Start Game to begin play.`}</p>
      <p>{`Click Restart Game at any time to start over. This will reschuffle the movie posters
      in a new, random order.`}</p>
      <p>{`Click I'm Done to go back to your game list.`}</p>
      <h3>Create a custom game</h3>
      <p>{`Click Create Game to build your own custom Movie Memory game`}</p>
      <p>{`Enter a movie title into the search field. Click the magnifying glass. Your search will
        bring back a list of matching movie titles`}</p>
      <p>{`Click the plus botton next to the movie title you wish to add. You should see a listing of
        movie posters as you compile your game.`}</p>
      <p>{`If needed, click the minus sign below the movie poster to remove a movie from your game.`}</p>
      <p>{`Click Load Game to save our new, awesome game. This will take you right into game play.`}</p>
      <p>{`Click Nevermind to cancel your pending game. Your game will not be saved.`}</p>
    </div>
  )
}

export default MemoryHelp;
