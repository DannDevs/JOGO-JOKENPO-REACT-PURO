import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [Escolhamaq, setEscolhamaq] = useState('');
  const [Escolha, setEscolha] = useState('');
  const [Resultado, setResultado] = useState('');
  const [PontosMaquina, setPontosMaquina] = useState(0);
  const [PontosJogador, setPontosJogador] = useState(0);
  const [PontosEmpate, setEmpate] = useState(0);
  const [jogadorSelecionou, setJogadorSelecionou] = useState(false);

  const handleButtonClick = () => {
    const options = ['Pedra', 'Papel', 'Tesoura'];
    const escolhaall = Math.floor(Math.random() * options.length);
    const escolhaal = options[escolhaall];
    setEscolhamaq(escolhaal);
  };

  const handleSelect = (event) => {
    setEscolha(event.target.value);
    setJogadorSelecionou(true);
  };

  const handleReset = () => {
    setEscolhamaq('');
    setEscolha('');
    setResultado('');
    setJogadorSelecionou(false);
  };

  const pointreset = () => {
    setEscolhamaq('');
    setEscolha('');
    setResultado('');
    setPontosJogador('');
    setPontosMaquina('');
    setEmpate('');
    setJogadorSelecionou(false);
  };

  useEffect(() => {
    if (Escolhamaq !== '' && Escolha !== '') {
      if (Escolhamaq === Escolha) {
        setResultado('Empate!');
        setEmpate(PontosEmpate + 1);
      } else if (
        (Escolhamaq === 'Pedra' && Escolha === 'Tesoura') ||
        (Escolhamaq === 'Tesoura' && Escolha === 'Papeal') ||
        (Escolhamaq === 'Papel' && Escolha === 'Pedraa')
      ) {
        setResultado('Máquina ganhou! 👑 ');
        setPontosMaquina(PontosMaquina + 1);
      } else {
        setResultado('Você ganhou! 👑');
        setPontosJogador(PontosJogador + 1);
      }
    }
  }, [Escolhamaq, Escolha]);

  return (
    <>
      <div className='conteudo'>
        <div className='card'>
          <div className="resultados">
            <h1>Escolhas</h1>
            <h4>Escolha: <strong className='escolha3'>{Escolha}</strong></h4>
            <h4>Escolha Maquina: <strong className='escolha1'>{Escolhamaq}</strong></h4>
            <h4>Resultado: <strong className='escolha2'>{Resultado}</strong></h4>
            <br />
            <h2>Reinicie o Jogo <br /> Apos o Resultado</h2>
            <br />
            <br />
            <button onClick={handleReset}>REINICIAR 🔁</button>
          </div>
        </div>
        <div className='card'>
          <div className="dropdown">
            <h1>Escolha Sua Opção</h1>
            <ul className="dropdown-options">
              <li>
                <button value="Pedra" onClick={handleSelect} disabled={jogadorSelecionou}>Pedra 🗿</button>
              </li>
              <li>
                <button value="Papel" onClick={handleSelect} disabled={jogadorSelecionou}>Papel 📃</button>
              </li>
              <li>
                <button value="Tesoura" onClick={handleSelect} disabled={jogadorSelecionou}>Tesoura ✂️</button>
              </li>
            </ul>
          </div>

          <h1>CLIQUE EM JOGAR</h1>
          <div id="divcima">
            <button onClick={handleButtonClick}>JOGAR 🕹️</button>
          </div>
        </div>
        <div className='card'>
          <h1>Pontuação</h1>
          <h4>Pontos Maquina: <strong className='point1'>{PontosMaquina}</strong> </h4>
        <h4>Pontos Jogador: <strong className='point2'>{PontosJogador}</strong> </h4>
        <h4>Empates: <strong className='point3'>{PontosEmpate}</strong> </h4>
        <br />
        <h2>Reinicie Os Pontos <br /> Do jogo</h2>
        <br />
        <br />
        <br />
      
       <button onClick={pointreset}>REINICIAR 🔁</button>
    </div>
  </div>  

    </>
  
  );
}

export default App;
