// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Regulamento Campanha</h1>
      <h3 className='title'>Indique um amigo e ganhe desconto</h3>
      <div className="content">
        <p><strong>Data:</strong> 25.03.2024</p>
        <p><strong>Promoção:</strong> Indique amigo e ganhe desconto em sua mensalidade.</p>
        <p>1- A campanha de indicação só é válida para clientes pessoa física ativos e adimplentes.</p>
        <p>2- A promoção só é válida a partir do dia 01 de abril de 2024, por tempo indeterminado, até que a empresa comunique o encerramento da mesma;</p>
        <p>3- O assinante Oxente.net que indicar um amigo e este aderir aos nossos serviços no prazo de até 30 dias após a indicação, receberá desconto de 50% (o valor do desconto é limitado a R$50,00) do valor da sua mensalidade. O benefício será concedido na primeira mensalidade posterior ao primeiro pagamento feito pelo amigo indicado já como assinante.</p>
        <p>4- O cliente indicado, após aderir aos nossos serviços, receberá um desconto de 50% (limitado a R$50,00) na sua segunda mensalidade.;</p>
        <p>5- O número de indicações é ilimitada, porém os descontos são limitados ao valor concedido por 1 (uma) indicação por mês, com limite de R$50,00;</p>
        <p>6- O desconto gerado é para o titular do contrato, indicado no formulário, não podendo ser transferido para outro cliente;</p>
        <p>7- Não é permitido ressarcimento em valor (dinheiro) ao cliente, o benefício é apenas desconto em mensalidades e limitado ao serviço de conexão à internet;</p>
      </div>
    </div>
  );
}

export default App;
