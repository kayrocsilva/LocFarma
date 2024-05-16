import React from 'react'

const Home = () => {
  return (
    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
               {/*} <img src= class="d-block w-100" alt="Produto 1"></img>*/}
            </div>
            <div class="carousel-item">
                {/*<img src="../." class="d-block w-100" alt="Produto 2"></img>*/}
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Próximo</span>
        </a>
    </div>
  )
}

export default Home