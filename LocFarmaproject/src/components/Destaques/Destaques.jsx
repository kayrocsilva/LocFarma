import React from 'react';
import nutricoreImage from '../../assets/images/destaques/nutricore.jpg'
import higieImage from '../../assets/images/destaques/higie.jpg';
import propolisImage from '../../assets/images/destaques/propolis.jpg';
import wheyProteinBarImage from '../../assets/images/destaques/whey_protein_bar.jpg';

const Destaques = () => {
    const produtos = [
        { id: 1, nome: 'NutriCore Zen', preco: 'R$ 30,00', img: nutricoreImage },
        { id: 2, nome: 'Higie+', preco: 'R$ 20,00', img: higieImage },
        { id: 3, nome: 'Propolis', preco: 'R$ 10,00', img: propolisImage },
        { id: 4, nome: 'Whey Protein Bar', preco: 'R$ 80,00', img: wheyProteinBarImage }
      ];

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        <h2>Destaques</h2>
      </div>
      <div className="row">
        {produtos.map(produto => (
          <div className="col-sm-3" key={produto.id}>
            <div className="card my-3">
              <img src={produto.img} alt={`Produto ${produto.id}`} />
              <div className="card-body">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text">{produto.preco}</p>
                <a href="produto.html" className="btn btn-primary">Ver Detalhes</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destaques;
