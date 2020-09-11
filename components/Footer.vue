<template>
  <footer>
    <div class="footer">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 medium-5 large-5">
            <picture>
              <source
                srcset="~/assets/img/webp/logo-criacao-marcas-default.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/logo-criacao-marcas-default.png"
                type="image/png"
              />
              <img
                class="logo-footer"
                loading="lazy"
                src="~/assets/img/logo-criacao-marcas-default.png"
                alt=""
              />
            </picture>
            <p>
              Texto sobre a empresa. Nunca é demais lembrar o peso e o
              significado destes problemas, uma vez que o acompanhamento das
              preferências de consumo. Pensando mais a longo prazo, a expansão
              dos mercados mundiais representa uma abertura para a melhoria da
              gestão inovadora da qual fazemos parte.
            </p>
            <div class="selo">
              <picture>
                <source
                  srcset="~/assets/img/webp/selo-ummense.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/selo-ummense.png"
                  type="image/png"
                />
                <img
                  class="ummense"
                  loading="lazy"
                  src="~/assets/img/selo-ummense.png"
                  alt=""
                />
              </picture>
              <picture>
                <source
                  srcset="~/assets/img/webp/selo-tratativa.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/selo-tratativa.png"
                  type="image/png"
                />
                <img
                  class="tratativa"
                  loading="lazy"
                  src="~/assets/img/selo-tratativa.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <div class="cell medium-7 large-7">
            <div class="grid-container full">
              <div class="grid-x grid-padding-x">
                <div class="cell medium-4 large-4">
                  <h3>Navegação</h3>
                  <ul>
                    <li><a href="#">Criação de Marcas</a></li>
                    <li><a href="#">Cartão de visita</a></li>
                    <li><a href="#">Criação de nomes</a></li>
                    <li><a href="#">Papelaria</a></li>
                    <li><a href="#">Área do cliente</a></li>
                    <li><a href="#">Fale conosco</a></li>
                  </ul>
                </div>
                <div class="cell medium-4 large-4">
                  <h3>Localização</h3>
                  <p>
                    Rua Augusto de Mari, 3400 <br />
                    Portão | Curitiba-PR <br />
                    CEP: 80630-010
                  </p>
                  <h3>Contato</h3>
                  <a href="#"
                    ><span
                      class="iconify"
                      data-icon="mdi:whatsapp"
                      data-inline="false"
                    ></span>
                    41 99999.9999</a
                  >
                </div>
                <div class="cell medium-4 large-4">
                  <h3>Pagamento</h3>
                  <picture>
                    <source
                      srcset="~/assets/img/webp/img-pagamentos.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="~/assets/img/img-pagamentos.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="~/assets/img/img-pagamentos.png"
                      alt=""
                    />
                  </picture>
                </div>
                <div class="cell medium-12 large-12">
                  <div class="box">
                    <p>
                      Baixe o nosso App para acompanhar o andamento dos serviços
                      de criação:
                    </p>
                    <p>
                      <a href="#">
                        <picture>
                          <source
                            srcset="~/assets/img/webp/apple-store.webp"
                            type="image/webp"
                          />
                          <source
                            srcset="~/assets/img/apple-store.png"
                            type="image/png"
                          />
                          <img
                            loading="lazy"
                            src="~/assets/img/apple-store.png"
                            alt=""
                          />
                        </picture>
                      </a>
                      <a href="#">
                        <picture>
                          <source
                            srcset="~/assets/img/webp/google-play.webp"
                            type="image/webp"
                          />
                          <source
                            srcset="~/assets/img/google-play.png"
                            type="image/png"
                          />
                          <img
                            loading="lazy"
                            src="~/assets/img/google-play.png"
                            alt=""
                          />
                        </picture>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="subfooter">
      <div class="grid-container">
        <div class="grid-x align-middle">
          <div class="cell large-8">
            <ul class="menu-footer">
              <li>
                <a href="#">Termos de uso</a>
              </li>
              <li>
                <a href="#">Políticas de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de uso dos aplicativos</a>
              </li>
              <li>
                <span
                  class="iconify"
                  data-icon="icons8:copyright"
                  data-inline="false"
                ></span>
                2020 - Criação de Marcas
              </li>
            </ul>
          </div>
          <div class="cell large-4 text-right social">
            <p>
              Siga-nos
              <a href=""
                ><span
                  class="iconify"
                  data-icon="ant-design:facebook-filled"
                  data-inline="false"
                ></span
              ></a>
              <a href=""
                ><span
                  class="iconify"
                  data-icon="ant-design:instagram-outlined"
                  data-inline="false"
                ></span
              ></a>
              <a href=""
                ><span
                  class="iconify"
                  data-icon="ant-design:linkedin-filled"
                  data-inline="false"
                ></span
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
//FOOTER
footer {
  .footer {
    padding: 95px 0;
  }
  h3 {
    color: #422179;
    font-size: 18px;
  }
  ul {
    margin: 0;
    li {
      line-height: 27px;
      list-style: none;
      a {
        color: #484848;
      }
    }
  }
  svg {
    vertical-align: -3px;
  }
  picture {
    display: inline-block;
  }
  .logo-footer {
    margin-bottom: 15px;
  }
  .selo {
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
    .ummense {
      margin-right: 20px;
    }
    .tratativa {
      margin-right: 0px;
    }
  }
  .box {
    align-items: center;
    background-color: #f1eedd;
    border-radius: 6px;
    display: flex;
    margin-top: 25px;
    min-height: 75px;
    padding: 10px 15px;
    p {
      margin: 0;
      padding: 0 15px;
      width: 50%;
      &:last-child {
        padding: 0;
        text-align: right;
      }
      a:nth-child(1) {
        margin-right: 13px;
      }
    }
  }
}
.subfooter {
  background-color: #fbf8f1;
  .grid-x {
    min-height: 115px;
  }
  .menu-footer {
    li {
      display: inline-block;
      border-right: 1px solid;
      padding: 0 10px;
      &:last-child() {
        border-right: none;
      }
    }
  }
  .social {
    color: #422179;
    font-size: 18px;
    font-weight: 700;
    p {
      margin: 0;
    }
    a {
      font-size: 21px;
      margin: 0 5px;
    }
  }
}
@media screen and (min-width: 768px) {
  footer {
    .large-5 {
      max-width: 38.66667%;
      p {
        max-width: 400px;
      }
    }
    .large-7 {
      min-width: 61.33333%;
    }
  }
}
</style>
