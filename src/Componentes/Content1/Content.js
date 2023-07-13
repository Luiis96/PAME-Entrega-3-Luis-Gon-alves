import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="Fundo">
      <div className="CaixaMenor">Produtos mais procurados</div>
      <div className="Caixas">
        <div className="Produto">
          <div className="Nome">Air Fryer</div>
          <img
            src="https://www.pngmart.com/files/15/Air-Fryer-PNG-Photos.png"
            alt=""
          ></img>
          <div className="Preço">R$ 499,90</div>
          <div className="Categoria">Eletrodomésticos</div>
        </div>
        <div className="Produto">
          <div className="Nome">Box Harry Potter</div>
          <img
            src="https://cdn10.bigcommerce.com/s-uocl08iaab/products/548/images/845/Box_Harry_Potter_-_Srie_Completa__69948.1616064208.500.750.png?c=2"
            alt=""
          ></img>
          <div className="Preço">R$ 450,00</div>
          <div className="Categoria">Livros</div>
        </div>
        <div className="Produto">
          <div className="Nome">Tênis All Star</div>
          <img
            src="https://images.tcdn.com.br/img/img_prod/604308/180_tenis_converse_all_star_flat_form_salto_3_5_cm_ct049500_preto_7217_1_5d66ccbc65a2cd360c8849127d654994.png"
            alt=""
          ></img>
          <div className="Preço">R$ 329,90</div>
          <div className="Categoria">Calçados</div>
        </div>
        <div className="Produto">
          <div className="Nome">Escova de dentes Bianco (3x1)</div>
          <img
            src="https://biancooralcare.com.br/wp-content/uploads/2021/01/produtos-escova-coral-care.png"
            alt=""
          ></img>
          <div className="Preço">R$ 29,90</div>
          <div className="Categoria">Higiene</div>
        </div>
        <div className="Produto">
          <div className="Nome">Frigideira Tramontina</div>
          <img
            src="https://cdn.leroymerlin.com.br/products/frigideira_antiaderente_funda_24_cm_2_2_l_paris_vermelho_tram_1570232558_cf26_600x600.png"
            alt=""
          ></img>
          <div className="Preço">R$ 91,20</div>
          <div className="Categoria">Utilidades domésticas</div>
        </div>
        <div className="Produto">
          <div className="Nome">Desodorante Rexona</div>
          <img
            src="https://ibassets.com.br/ib.item.image.big/b-1aaa83b696364354b39d2ba1b4a82b8e.png"
            alt=""
          ></img>
          <div className="Preço">R$ 14,99</div>
          <div className="Categoria">Higiene</div>
        </div>
      </div>
      <div className="Caixas">
        <div className="Produto">
          <div className="Nome">Relógio de pulso Casio</div>
          <img
            src="https://static.rockcity.com.br/public/rockcity/imagens/produtos/relogio-de-pulso-casio-g-shock-preto-6455576d2fdd9.png"
            alt=""
          ></img>
          <div className="Preço">R$ 290,00</div>
          <div className="Categoria">Acessórios</div>
        </div>
        <div className="Produto">
          <div className="Nome">Regata Chicago Bulls</div>
          <img
            src="https://d3ugyf2ht6aenh.cloudfront.net/stores/002/118/686/products/regata-michael-jordan-chicago-bulls-association-edition-swingman-masculina-ao2916-100-11-18ea94b337b15851fd16512724995483-640-0.png"
            alt=""
          ></img>
          <div className="Preço">R$ 360,00</div>
          <div className="Categoria">Roupas</div>
        </div>
        <div className="Produto">
          <div className="Nome">Whey Protein Gold Standart</div>
          <img
            src="https://www.musclebox.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/e/f/efwwsgvbed.png"
            alt=""
          ></img>
          <div className="Preço">R$ 369,99</div>
          <div className="Categoria">Esportes</div>
        </div>
        <div className="Produto">
          <div className="Nome">Mochila Samsonite</div>
          <img
            src="https://samsonite.com.br/cdn/shop/files/1e2c587aa38bbda14dc3b95bb7aa4b323d974178698f7bafd6f8441d3cde3b5c.png?v=1687885027&width=533"
            alt=""
          ></img>
          <div className="Preço">R$ 499,90</div>
          <div className="Categoria">Acessórios</div>
        </div>
        <div className="Produto">
          <div className="Nome">Capa Galaxy S22</div>
          <img
            src="https://fabricadeinformatica.com.br/wp-content/uploads/2022/09/ab54c1a8946547a7bcc11bc2d1bae138-removebg-preview.png"
            alt=""
          ></img>
          <div className="Preço">R$ 4,99</div>
          <div className="Categoria">Acessórios</div>
        </div>
        <div className="Produto">
          <div className="Nome">Tênis Nike</div>
          <img
            src="https://dw0jruhdg6fis.cloudfront.net/producao/30167280/G/da1349_600_phcfh001_2000.png"
            alt=""
          ></img>
          <div className="Preço">R$ 450,00</div>
          <div className="Categoria">Calçados</div>
        </div>
      </div>
    </div>
  );
}

export default Content;
