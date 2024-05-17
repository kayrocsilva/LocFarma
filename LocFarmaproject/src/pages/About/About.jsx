import React from 'react'

const About = () => {
  return (
    <div class="container mt-4">
        <h1 class="text-center">Sobre Nós</h1>
        <div class="accordion" id="accordion">
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Missão
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordion">
                    <div class="accordion-body">
                        <p>Facilitar a vida da população, especialmente daqueles que enfrentam dificuldades de locomoção e dos menos privilegiados, fornecendo informações sobre a disponibilidade e os preços de medicamentos em diferentes estabelecimentos, por meio de um aplicativo inovador. A missão é promover melhorias no bem-estar social e oferecer uma ferramenta eficaz para melhorar a vida das pessoas, especialmente no acesso a medicamentos escassos.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Visão
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                        <p>Ser uma solução eficiente e prática para a comunidade, eliminando a necessidade de realizar inúmeras chamadas telefônicas na busca de medicamentos escassos. O aplicativo visa otimizar os recursos pessoais e financeiros dos usuários, além de promover a inclusão social ao atender às necessidades daqueles com dificuldades de locomoção. A visão é promover um impacto positivo na qualidade de vida dos usuários, fornecendo informações sobre o custo-benefício dos medicamentos disponíveis em diferentes estabelecimentos.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Valores
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordion">
                    <div class="accordion-body">
                        <p>Compromisso com a sociedade, equidade no acesso a medicamentos, melhoria do bem-estar social, facilidade de acesso à informação, conscientização na tomada de decisões, promoção da inclusão social e valorização dos recursos pessoais e financeiros dos usuários.</p>
                    </div>
                </div>
            </div>
        </div>
        <h2 class="mt-3">Equipe</h2>
        <div class="row">
            <div class="col-sm-3">
                <div class="card my-3">
                    {/*<img class="equipe" src="imgs/equipe/kayro.jpg" alt="Kayro">*/}
                    <div class="card-body">
                        <h5 class="card-title">Kayro César</h5>
                        <p class="card-text">Scrum Master</p>
                    </div>
                </div>
            </div>           
            <div class="col-sm-3">
                <div class="card my-3">
                    {/*<img class="equipe" src="imgs/equipe/paulo.jpg" alt="Paulo">*/}
                    <div class="card-body">
                        <h5 class="card-title">Paulo Selestrino</h5>
                        <p class="card-text">Gestor de Projetos</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card my-3">
                    {/*<img class="equipe" src="imgs/equipe/pedro.jpg" alt="Pedro">*/}
                    <div class="card-body">
                        <h5 class="card-title">Pedro Rodrigues</h5>
                        <p class="card-text">Analista de Qualidade</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About