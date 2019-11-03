import React, {Component} from "react";
import "./Hangman.css";
import img0 from "./pics/0.jpg";
import img1 from "./pics/1.jpg";
import img2 from "./pics/2.jpg";
import img3 from "./pics/3.jpg";
import img4 from "./pics/4.jpg";
import img5 from "./pics/5.jpg";
import img6 from "./pics/6.jpg";
import {randomWord} from "./words";

class Hangman extends Component {
    static defaultProps = {
        imgs: [img0, img1, img2, img3, img4, img5, img6],
        maxWrong: 6
    }
    constructor(props){
        super(props);
        this.state = {
            img: this.props.imgs[0],
            nWrong: 0,
            answer: randomWord(),
            guessed: new Set(),
        }
        console.log(this.state.answer)
       this.guessedWord = this.guessedWord.bind(this);
       this.generateButtons = this.generateButtons.bind(this);
       this.handleGuess = this.handleGuess.bind(this);
       this.reset = this.reset.bind(this)
    }

    reset(){
        this.setState({
            nWrong: 0,
            answer: randomWord(),
            guessed: new Set(),
            img: this.props.imgs[0],
        })
    }

    guessedWord(){
       return this.state.answer.split("")
       .map(ltr =>(this.state.guessed.has(ltr)? ltr : "_"))
    } 


    handleGuess(evt){
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (this.state.answer.includes(ltr) ? 0 : 1)
        }))
    }

   generateButtons(){
       return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => 
        <button 
        value={ltr}
        key={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        >
        {ltr}
        </button>
        )
   }
    render(){
        const isWinner = this.guessedWord().join("") === this.state.answer;
        const gameOver = this.state.nWrong >= 6;
        const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
        let gameState = this.generateButtons();
        if (isWinner) gameState = "You Win!";
        if (gameOver) gameState = "You Lose!";
        return(
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.imgs[this.state.nWrong]} alt={altText}/>
                <p>Number of Wrong Guesses: {this.state.nWrong}</p>
                <p className='Hangman-word'>{!gameOver ? this.guessedWord() : this.state.answer }</p>
                <p className='Hangman-btns'>{gameState}</p>
                <button id='reset' onClick={this.reset} >Reset</button>
            </div>
        )
    }
}
export default Hangman;