<template>
  <main>
    <Header />
    <div class="home-banner">
      <div class="grid-container">
        <div class="grid-x align-bottom text-center">
          <div class="cell large-12" style>
            <h1>Criação de marcas</h1>
            <h2>
              A criação da sua marca elaborada por especialistas. Oferecemos o
              melhor custo benefício do mercado
            </h2>
            <n-link to="/fale-com-especialista" class="btn solicite-marca"
              >Fale com nosso especialista</n-link
            >
            <p>Entre em contato e fale com nossa equipe</p>
            <ul class="items">
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-1.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-1.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-1.png"
                    alt
                  />
                </picture>
                Ajustes ilimitados
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-7.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-7.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-7.png"
                    alt
                  />
                </picture>
                Versões ilimitadas
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-2.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-2.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-2.png"
                    alt
                  />
                </picture>
                Entrega rápida 72 horas
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-3.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-3.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-3.png"
                    alt
                  /> </picture
                >Inclui Manual de marca
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-4.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-4.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-4.png"
                    alt
                  /> </picture
                >Design 100% exclusivo
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-5.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-5.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-5.png"
                    alt
                  /> </picture
                >Formatos em Alta resolução
              </li>
              <li>
                <picture>
                  <source
                    srcset="~/assets/img/webp/icon-banner-6.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/icon-banner-6.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/icon-banner-6.png"
                    alt
                  /> </picture
                >Profissionais especialistas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container content-empresa">
      <div class="grid-x align-middle">
        <div class="cell large-6 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-criacao-marcas-1.webp"
              type="image/webp"
            />
            <source
              srcset="~/assets/img/img-criacao-marcas-1.jpg"
              type="image/jpg"
            />
            <img
              loading="lazy"
              src="~/assets/img/img-criacao-marcas-1.jpg"
              alt
            />
          </picture>
        </div>
        <div class="cell large-6">
          <h2>
            Sua empresa precisa de uma marca profissional
          </h2>
          <p>
            Uma marca profissional adequada a sua área de atuação e público alvo
            amplia sua probabilidade de fechamento de negócios. A imagem da sua
            empresa, produtos e serviços é fortalecido gerando menor custo na
            aquisição de novos negócios e fidelização de clientes.
          </p>
          <p>
            Uma logo criativa e memorável também aumenta o valor da sua empresa
            e transmite profissionalismo e motivação para toda sua equipe. Conte
            com nossa equipe para elaborar ou atualizar a marca da sua empresa,
            produtos e serviços.
          </p>
        </div>
      </div>
    </div>
    <div class="portfolio">
      <div class="new-grid">
        <div class="grid-x">
          <div class="cell text-center">
            <h2>
              Conheça o potencial da nossa equipe através do nosso portfólio
            </h2>
            <p>
              Materiais de qualidade e design diferenciado para aumentar suas
              vendas
            </p>
          </div>
          <div class="cell">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
    <div class="new-grid">
      <div class="grid-x align-middle">
        <div
          class="cell large-12 text-center"
          style="padding: 0 0.9375rem 40px"
        >
          <h2>Ter uma marca profissional faz toda a diferença</h2>
          <p>
            Sua marca revela ao consumidor o padrão de qualidade dos seus
            produtos e serviços.
            <br />Quando criada com critério sua marca proporciona grandes
            benefícios para seu negócio.
          </p>
        </div>
        <div class="cell large-3 box-vantagens mobile">
          <picture>
            <source
              srcset="~/assets/img/webp/img-diferenciais-mobile.webp"
              type="image/webp"
            />
            <source
              srcset="~/assets/img/img-diferenciais-mobile.jpg"
              type="image/jpg"
            />
            <img
              loading="lazy"
              src="~/assets/img/img-diferenciais-mobile.jpg"
              alt
            />
          </picture>
        </div>
        <div class="cell large-3 box-vantagens">
          <div class="box-after">
            <picture>
              <source
                srcset="~/assets/img/webp/img-antes-1.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-antes-1.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-antes-1.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-antes-1.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-antes-1.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-antes-1.png" alt />
              </picture>
              <h3>
                <span>Baixo</span>
                extímulo de compra
              </h3>
            </div>
          </div>
          <div class="box-before">
            <picture>
              <source
                srcset="~/assets/img/webp/img-depois-1.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-depois-1.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-depois-1.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-depois-1.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-depois-1.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-depois-1.png" alt />
              </picture>
              <h3>
                <span>alto</span>
                extímulo de compra
              </h3>
            </div>
          </div>
        </div>
        <div class="cell small-12 large-3 box-vantagens">
          <div class="box-after">
            <picture>
              <source
                srcset="~/assets/img/webp/img-antes-2.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-antes-2.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-antes-2.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-antes-2.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-antes-2.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-antes-2.png" alt />
              </picture>
              <h3>
                <span>Menor</span>
                margem de lucro
              </h3>
            </div>
          </div>
          <div class="box-before">
            <picture>
              <source
                srcset="~/assets/img/webp/img-depois-2.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-depois-2.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-depois-2.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-depois-2.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-depois-2.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-depois-2.png" alt />
              </picture>
              <h3>
                <span>Maior</span>
                margem de lucro
              </h3>
            </div>
          </div>
        </div>
        <div class="cell large-3 box-vantagens">
          <div class="box-after">
            <picture>
              <source
                srcset="~/assets/img/webp/img-antes-3.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-antes-3.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-antes-3.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-antes-3.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-antes-3.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-antes-3.png" alt />
              </picture>
              <h3>
                <span>CUSTO ELEVADO</span>
                em marketing
              </h3>
            </div>
          </div>
          <div class="box-before">
            <picture>
              <source
                srcset="~/assets/img/webp/img-depois-3.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-depois-3.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-depois-3.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-depois-3.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-depois-3.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-depois-3.png" alt />
              </picture>
              <h3>
                <span>Menor investimento</span>
                em marketing
              </h3>
            </div>
          </div>
        </div>
        <div class="cell large-3 box-vantagens">
          <div class="box-after">
            <picture>
              <source
                srcset="~/assets/img/webp/img-antes-4.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-antes-4.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-antes-4.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-antes-4.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-antes-4.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-antes-4.png" alt />
              </picture>
              <h3>
                Revela ao consumidor
                <span>Baixa qualidade</span>
              </h3>
            </div>
          </div>
          <div class="box-before">
            <picture>
              <source
                srcset="~/assets/img/webp/img-depois-4.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-depois-4.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-depois-4.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-depois-4.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-depois-4.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-depois-4.png" alt />
              </picture>
              <h3>
                Revela ao consumidor
                <span>profissionalismo</span>
              </h3>
            </div>
          </div>
        </div>
        <div class="cell large-3 box-vantagens">
          <div class="box-after">
            <picture>
              <source
                srcset="~/assets/img/webp/img-antes-5.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-antes-5.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-antes-5.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-antes-5.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-antes-5.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-antes-5.png" alt />
              </picture>
              <h3>
                <span>Menor</span>
                fidelização dos clientes
              </h3>
            </div>
          </div>
          <div class="box-before">
            <picture>
              <source
                srcset="~/assets/img/webp/img-depois-5.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/img-depois-5.jpg" type="image/jpg" />
              <img loading="lazy" src="~/assets/img/img-depois-5.jpg" alt />
            </picture>
            <div class="box-over">
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-depois-5.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-depois-5.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/icon-depois-5.png" alt />
              </picture>
              <h3>
                <span>Maior</span>
                fidelização dos clientes
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="purple-bg">
      <div class="grid-container">
        <div class="grid-x">
          <div class="cell text-center files">
            <h2 class="white">Receba sua marca nos principais formatos</h2>
            <p>
              Sua marca entregue pronta para ser usada em alta resolução para
              impressão e para utilização nos meios digitais.
            </p>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-jpg.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-jpg.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-jpg.png" alt />
            </picture>
            <h3 class="white">Imagem</h3>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-png.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-png.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-png.png" alt />
            </picture>
            <h3 class="white">Fundo transparente</h3>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-cdr.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-cdr.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-cdr.png" alt />
            </picture>
            <h3 class="white">CorelDraw</h3>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-ai.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-ai.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-ai.png" alt />
            </picture>
            <h3 class="white">Illustrator</h3>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-pdf.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-pdf.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-pdf.png" alt />
            </picture>
            <h3 class="white">Apresentação</h3>
          </div>
          <div class="cell small-6 medium-2 large-2 text-center">
            <picture>
              <source
                srcset="~/assets/img/webp/icon-eps.webp"
                type="image/webp"
              />
              <source srcset="~/assets/img/icon-eps.png" type="image/png" />
              <img loading="lazy" src="~/assets/img/icon-eps.png" alt />
            </picture>
            <h3 class="white">Vetor</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container servicos">
      <div class="grid-x grid-padding-x align-middle">
        <div class="cell text-center titles">
          <h2 class="nomargin">Serviço completo</h2>
          <p>
            Receba também sua marca pronta para usar nas medidas exigidas pelos
            principais meios de comunicação.
          </p>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-facebook.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-facebook.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-facebook.png" alt />
          </picture>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-instagram.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-instagram.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-instagram.png" alt />
          </picture>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-whatsapp.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-whatsapp.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-whatsapp.png" alt />
          </picture>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-linkedin.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-linkedin.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-linkedin.png" alt />
          </picture>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-twitter.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-twitter.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-twitter.png" alt />
          </picture>
        </div>
        <div class="cell small-6 medium-2 large-2 text-center">
          <picture>
            <source
              srcset="~/assets/img/webp/img-youtube.webp"
              type="image/webp"
            />
            <source srcset="~/assets/img/img-youtube.png" type="image/png" />
            <img loading="lazy" src="~/assets/img/img-youtube.png" alt />
          </picture>
        </div>
      </div>
    </div>
    <div class="yellow-bg">
      <div class="grid-container">
        <div class="grid-x align-middle text-center">
          <div class="cell files">
            <h2 class="nomargin">Como trabalhamos</h2>
            <p>
              Nosso processo criativo é eficiente e isso nos possibilita criar
              sua marca com agilidade e profissionalismo. Nosso compromisso é
              apresentar sua marca em até 72 horas úteis, caso aprovado faremos
              os fechamentos dos arquivos para entrega em até 48 horas úteis.
            </p>
          </div>
          <div class="cell">
            <ul class="steps hide-for-small-only">
              <li>
                <span>Conhecer sua empresa</span>
              </li>
              <li>
                <span>Entender seu público</span>
              </li>
              <li>
                <span>Analisar sua concorrência</span>
              </li>
              <li>
                <span>Levantar ideias</span>
              </li>
              <li>
                <span>Criar marca</span>
              </li>
              <li>
                <span>Apresentar</span>
              </li>
              <li>
                <span>Ajustar</span>
              </li>
              <li>
                <span>Fechar arquivos</span>
              </li>
              <li>
                <span>Entregar</span>
              </li>
            </ul>
          </div>
          <div class="cell">
            <n-link to="/fale-com-especialista" class="btn solicite-marca"
              >Fale com nosso especialista</n-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container diferenca">
      <div class="grid-x grid-padding-x">
        <div class="cell text-center">
          <h2 class="nomargin">
            Elementos e conceitos para impactar seus clientes
          </h2>
          <p>
            Ao criar a marca da sua empresa ou do seu produto cuidamos de cada
            detalhe para gerar um impacto positivo em seus clientes e equipe.
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-tipografia.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-tipografia.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-tipografia.png"
                alt
              />
            </picture>
            Tipografia
          </h3>
          <p>
            A tipografia merece cuidado especial pois é o principal elemento de
            uma marca
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-cor.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-cor.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-cor.png"
                alt
              />
            </picture>
            Cor
          </h3>
          <p>
            É preciso escolher cores adequadas para produzir estímulos corretos
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-formas.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-formas.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-formas.png"
                alt
              />
            </picture>
            Formas
          </h3>
          <p>O zelo com as formas é fundamental para a composição gráfica</p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-simbolo.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-simbolo.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-simbolo.png"
                alt
              />
            </picture>
            Símbolo
          </h3>
          <p>
            O símbolo é uma representação gráfica para facilitar a identificação
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-espacamentos.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-espacamentos.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-espacamentos.png"
                alt
              />
            </picture>
            Espaçamentos
          </h3>
          <p>
            O cuidado com os espaçamentos é essencial para comunicar
            corretamente
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-tamanho.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-tamanho.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-tamanho.png"
                alt
              />
            </picture>
            Tamanho
          </h3>
          <p>O tamanho e espessura de cada elemento devem ser proporcionais</p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-textura.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-textura.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-textura.png"
                alt
              />
            </picture>
            Textura
          </h3>
          <p>
            A textura é um ótimo recurso quando utilizado com cautela e
            criatividade
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-harmonia.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-harmonia.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-harmonia.png"
                alt
              />
            </picture>
            Harmonia
          </h3>
          <p>
            A harmonia entre os elementos é fundamental para demonstrar
            profissionalismo.
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-personalidade.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-personalidade.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-personalidade.png"
                alt
              />
            </picture>
            Personalidade
          </h3>
          <p>
            Uma marca precisa de uma personalidade forte para se diferenciar
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-exclusividade.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-exclusividade.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-exclusividade.png"
                alt
              />
            </picture>
            Exclusividade
          </h3>
          <p>
            É preciso de criatividade e autenticidade para diferenciar da
            concorrência
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-legibilidade.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-legibilidade.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-legibilidade.png"
                alt
              />
            </picture>
            Legibilidade
          </h3>
          <p>
            Os elementos precisam ser simples e objetivos para oferecer clareza
            na leitura
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-publico.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-publico.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-publico.png"
                alt
              />
            </picture>
            Adequado ao Público
          </h3>
          <p>
            Para alcançar ótimos resultados a marca precisa impactar seu público
            alvo
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-memorizacao.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-memorizacao.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-memorizacao.png"
                alt
              />
            </picture>
            Memorização
          </h3>
          <p>
            Uma marca forte elaborada com critérios favorece a conexão com o
            consumidor
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-contraste.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-contraste.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-contraste.png"
                alt
              />
            </picture>
            Contraste
          </h3>
          <p>
            O contraste ajuda destacar informações importantes e facilitar
            leitura
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-alinhamento.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-alinhamento.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-alinhamento.png"
                alt
              />
            </picture>
            Alinhamento
          </h3>
          <p>
            Alinhar corretamente os elementos melhora a percepção do consumidor
          </p>
        </div>
        <div class="cell large-3">
          <h3>
            <picture>
              <source
                srcset="~/assets/img/webp/icon-diferenciais-equilibrio.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/icon-diferenciais-equilibrio.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/icon-diferenciais-equilibrio.png"
                alt
              />
            </picture>
            Equilíbrio
          </h3>
          <p>
            Equilibrar o peso das informações é chave para representar
            estabilidade
          </p>
        </div>
      </div>
    </div>
    <div class="duvidas">
      <div class="grid-container">
        <div class="grid-x grid-padding-x align-middle">
          <div class="cell text-center title">
            <h2 class="nomargin">Dúvidas frequentes</h2>
          </div>
          <div class="cell large-7">
            <Accordion />
          </div>
          <div class="cell large-5">
            <picture>
              <source
                srcset="~/assets/img/webp/img-criacao-marcas-2.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/img-criacao-marcas-2.png"
                type="image/png"
              />
              <img
                loading="lazy"
                src="~/assets/img/img-criacao-marcas-2.png"
                alt
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container investimento">
      <div class="grid-x text-center">
        <div class="cell">
          <h2 class="nomargin">Qual o valor do investimento?</h2>
          <p>
            Neste período de Pandemia estamos oferecendo um preço diferenciado
            para ajudar as empresas que desejam criar ou reformular sua marca.
          </p>
        </div>
        <div class="cell condicao">
          <h2>
            Entre em contato e solicite uma proposta agora mesmo.<br />
            Temos uma condição especial para você!
          </h2>
          <n-link to="/fale-com-especialista" class="btn solicite-marca"
            >Fale com nosso especialista</n-link
          >
          <p>Entre em contato e fale com nossa equipe</p>
          <ul class="items">
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-1.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-1.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-1.png"
                  alt
                />
              </picture>
              Ajustes ilimitados
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-7.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-7.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-7.png"
                  alt
                />
              </picture>
              Versões ilimitadas
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-2.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-2.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-2.png"
                  alt
                />
              </picture>
              Entrega rápida 72 horas
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-3.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-3.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-3.png"
                  alt
                /> </picture
              >Inclui Manual de marca
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-4.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-4.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-4.png"
                  alt
                /> </picture
              >Design 100% exclusivo
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-5.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-5.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-5.png"
                  alt
                /> </picture
              >Formatos em Alta resolução
            </li>
            <li>
              <picture>
                <source
                  srcset="~/assets/img/webp/icon-condicao-6.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/icon-condicao-6.png"
                  type="image/png"
                />
                <img
                  loading="lazy"
                  src="~/assets/img/icon-condicao-6.png"
                  alt
                /> </picture
              >Profissionais especialistas
            </li>
          </ul>
        </div>
        <div class="cell cw">
          <a href="https://www.coachingwalking.com.br/" target="_blank">
            <div class="box">
              <p class="nomargin">
                <span>Ganhe um bônus:</span> Ao adquirir a criação da sua marca,
                você terá acesso completo ao
                <span class="textcw">Treinamento Coaching Walking</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </main>
</template>

<script>
</script>

<style lang="scss">
$thin: "Product Sans Thin";
$normal: "Product Sans";
$bold: "Product Sans Bold";

main {
  .home-banner {
    background-color: #401e78;
    .grid-x {
      min-height: 538px;
      padding: 80px 0;
      color: #ffffff;
    }
  }
}
.home-banner {
  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 65px;
    margin: 0px;
  }
  h2 {
    font-family: $normal;
    font-size: 17px;
    letter-spacing: 0;
    line-height: 36px;
    span {
      color: #e4d3ff;
    }
    .price {
      color: #55ffc5;
      font-size: 30px;
      font-weight: 700;
      vertical-align: sub;
    }
  }
  .btn {
    background-color: #55ffc5;
    color: #43237a;
    &:hover {
      background-color: #ffffff;
      color: #43237a;
    }
  }
  p {
    color: #ffffff;
    opacity: 0.35;
    font-size: 16px;
  }
}

.content-empresa {
  .grid-x {
    margin: 20px 0 60px;
  }
  h2 {
    max-width: 450px;
  }
}

.box-before {
  position: relative;
  opacity: 1;
  transition: all 0.3s;
  &:after {
    background-image: url("~assets/img/icon-triangule.png");
    background-position: center -3px;
    background-repeat: no-repeat;
    border-top: 4px solid #ffffff;
    content: "";
    height: 17px;
    left: 0;
    position: absolute;
    text-align: center;
    transition: all 0.3s;
    width: 100%;
  }
}

.box-before,
.box-after {
  margin: 0 auto;
  max-width: 336px;
  position: relative;
  .box-over {
    background-color: rgba(255, 78, 111, 0.92);
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.3s;
    width: 100%;
    h3 {
      color: #ffffff;
      font-family: $normal;
      font-size: 23px;
      font-weight: 400;
      span {
        display: block;
        text-align: center;
        text-transform: uppercase;
      }
    }
    img {
      margin-bottom: 10px;
    }
  }
}
.box-before {
  .box-over {
    background-color: rgba(53, 213, 158, 0.92);
    img {
      margin-bottom: 10px;
    }
  }
}

.box-vantagens {
  position: relative;
  opacity: 1;
  &:hover {
    .box-before,
    .box-after {
      .box-over {
        opacity: 0;
        transition: all 0.3s;
      }
    }
    .box-before {
      &:after {
        opacity: 1;
        transition: all 0.3s;
      }
    }
  }
}

.items {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 25px 0 0;
  li {
    border-right: 1px solid rgba(230, 225, 239, 0.2);
    color: #e4d3ff;
    font-size: 13px;
    line-height: 16px;
    max-width: 125px;
    padding: 0 20px;
    text-align: center;
    img {
      display: block;
      margin: 0 auto 5px;
    }
    &:last-child {
      border: 0;
    }
  }
}

.portfolio {
  background-color: #fbf8f1;
  .grid-x {
    padding: 90px 0;
  }
  h2 {
    max-width: 570px;
    margin: 0 auto 0.5rem;
  }
}

.purple-bg {
  background-color: #422179;
  .grid-x {
    color: #cbb9e8;
    padding: 120px 0;
    h2 {
      margin: 0;
    }
    h3 {
      font-family: $normal;
      font-size: 18px;
      margin-top: 10px;
      letter-spacing: 0;
    }
  }
  .files {
    margin-bottom: 50px;
  }
}

.servicos {
  .grid-x {
    padding: 150px 0;
  }
  .titles {
    margin-bottom: 20px;
  }
}

.yellow-bg {
  background-color: #fbf8f1;
  position: relative;
  &:before {
    content: url("~assets/img/webp/img-stars-1.webp");
    pointer-events: none;
    position: absolute;
    text-align: center;
    top: -75px;
    transform: rotateX(180deg);
    width: 100%;
  }
  &:after {
    bottom: -75px;
    content: url("~assets/img/webp/img-stars-1.webp");
    pointer-events: none;
    position: absolute;
    text-align: center;
    width: 100%;
  }
  .grid-x {
    padding: 100px 0;
  }
  .btn {
    background-color: #572b8c;
    color: #ffffff;
    min-width: 235px;
    &:hover {
      background-color: #55ffc5;
      color: #43237a;
    }
  }
  .steps {
    display: flex;
    list-style: none;
    margin: 50px 0;
    justify-content: center;
    position: relative;
    &:after {
      bottom: 27px;
      content: "";
      border-bottom: 1px solid #000000;
      display: block;
      width: 90%;
      position: absolute;
    }
    li {
      align-self: flex-end;
      display: flex;
      font-size: 16px;
      flex-direction: column;
      width: 12%;
      text-align: center;
      span {
        max-width: 100px;
        margin: 0 auto;
      }
      &:after {
        content: url("~assets/img/webp/icon-arrow.webp");
        display: block;
        margin-top: 10px;
        z-index: 1;
      }
    }
  }
}

.diferenca {
  .grid-x {
    padding: 140px 0 80px;
    .cell {
      margin-bottom: 20px;
      h3 {
        color: #572b8c;
        font-size: 18px;
        picture {
          display: inline-block;
          vertical-align: text-bottom;
        }
      }
      p {
        line-height: 27px;
      }
    }
  }
}

.duvidas {
  background-color: #fbf8f1;
  .grid-x {
    padding: 90px 0;
  }
  .title {
    padding-bottom: 50px;
  }
  .accordion {
    li {
      &.is-active {
        a {
          color: #422179;
        }
      }
    }
    .accordion-content {
      border-top: 0;
      padding: 0 1rem 1rem;
      font-size: 14px;
      p {
        border-left: 2px solid #f1eedd;
        padding-left: 20px;
        margin: 0;
      }
    }
  }
}

.investimento {
  .grid-x {
    padding: 90px 0;
  }
  .items {
    li {
      margin-top: 20px;
      color: #653c95;
    }
  }
  .condicao {
    margin-top: 20px;
    h2 {
      font-family: $normal;
      font-size: 18px;
      letter-spacing: 0;
      span {
        color: #653c95;
      }
      .price {
        color: #653c95;
        font-size: 35px;
        font-weight: 700;
        vertical-align: sub;
      }
    }
    p {
      font-size: 13px;
    }
    .btn {
      background-color: #55ffc5;
      color: #43237a;
      &:hover {
        background-color: #613aa0;
        color: #ffffff;
      }
    }
  }
  .cw {
    .box {
      align-items: center;
      background-color: #fbf8f1;
      border: 2px dashed #f1eedd;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      max-width: 925px;
      margin: 0 auto;
      min-height: 55px;
      padding: 10px 15px;
      transition: all 0.3s linear;
    }
    a {
      &:hover {
        .box {
          opacity: 0.75;
        }
      }
    }
    p {
      color: #484848;
    }
    span {
      font-size: 18px;
      font-family: $bold;
      color: #613aa0;
    }
    .textcw {
      font-family: $normal;
    }
    font-size: 16px;
    margin-top: 50px;
  }
}
@media screen and (max-width: 767px) {
  .home-banner {
    .items {
      flex-wrap: wrap;
      li {
        border: 0;
        margin-bottom: 20px;
      }
    }
  }
  .purple-bg,
  .servicos,
  .yellow-bg,
  .diferenca,
  .duvidas,
  .investimento {
    .grid-x {
      padding: 50px 0;
    }
    .files {
      margin-bottom: 35px;
    }
  }
  .new-grid {
    .box-vantagens {
      display: none;
      &.mobile {
        display: block;
      }
    }
  }
  .diferenca {
    h3,
    p {
      text-align: center;
    }
  }
  .yellow-bg {
    &:before,
    &:after {
      display: none;
    }
    .steps {
      flex-wrap: wrap;
    }
  }
  .investimento {
    .items {
      flex-wrap: wrap;
      li {
        border-right: 0;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  main {
    .home-banner {
      background-image: url("~assets/img/banner-cria-logos.jpg");
      background-position: top center;
      background-repeat: no-repeat;
    }
  }
  .new-grid {
    max-width: 1680px;
    margin: 0 auto;
    .grid-x {
      padding: 100px 0;
    }
    .cell.large-3 {
      width: 20%;
    }
    .box-vantagens {
      &.mobile {
        display: none;
      }
    }
  }
}
</style>
