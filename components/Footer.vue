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
                alt
              />
            </picture>
            <p>
              Nós da CriaçãodeMarcas.com somos especializados em criação de
              marcas para empresas, produtos e serviços. Nosso trabalho é
              proporcionar um serviço de qualidade para impactar e estimular seu
              público alvo na geração de novos negócios.
            </p>
            <n-link to="/fale-com-especialista" class="btn solicite-marca"
              >Solicitar criação de marca</n-link
            >
          </div>
          <div class="cell medium-7 large-7">
            <div class="grid-container full">
              <div class="grid-x grid-padding-x">
                <div class="cell medium-4 large-4">
                  <h3>Navegação</h3>
                  <ul>
                    <li v-if="false">
                      <n-link to="/">Criação de marcas</n-link>
                    </li>
                    <li v-if="false">
                      <n-link to="/cartao-de-visita">Cartão de visita</n-link>
                    </li>
                    <li v-if="false">
                      <n-link to="/servicos-de-papelaria"
                        >Serviços de papelaria</n-link
                      >
                    </li>
                    <li>
                      <n-link to="/contato">Contato</n-link>
                    </li>
                    <li>
                      <a
                        href="https://uweb.app/criacaodemarcas"
                        target="_blank"
                        class="client-area"
                        title="Acompanhe o trabalho de criação em tempo real"
                        >Área do cliente</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="cell medium-4 large-4">
                  <h3>Localização</h3>
                  <p>
                    Av. Presidente Kennedy, 3425
                    <br />Água Verde | Curitiba-PR <br />CEP: 80610-010
                  </p>
                  <h3>Contato</h3>
                  <a
                    href="https://api.whatsapp.com/send?phone=5541988492754"
                    target="_blank"
                  >
                    <span
                      class="iconify"
                      data-icon="mdi:whatsapp"
                      data-inline="false"
                    ></span>
                    41 98849.2754
                  </a>
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
                      alt
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div class="cell large-5" v-if="false">
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
                  alt
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
                  alt
                />
              </picture>
            </div>
          </div>
          <div class="cell medium-7 large-7" v-if="false">
            <div class="box">
              <p>
                Deseja acompanhar o andamento em tempo real dos serviços
                contratados? Baixe nosso App:
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
                      alt
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
                      alt
                    />
                  </picture>
                </a>
              </p>
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
                <span
                  class="iconify"
                  data-icon="icons8:copyright"
                  data-inline="false"
                ></span>
                2020 - Criação de Marcas &nbsp;|&nbsp; Atendemos todo o Brasil
                <span
                  class="iconify"
                  data-icon="twemoji:flag-for-flag-brazil"
                  data-inline="false"
                ></span>
              </li>
              <li v-if="false">
                <a href="#">Termos de Prestação de Serviço</a>
              </li>
              <li v-if="false">
                <a href="#">Termos de Privacidade</a>
              </li>
            </ul>
          </div>
          <div class="cell large-4 text-right social">
            <p v-if="false">
              Siga-nos
              <a href>
                <span
                  class="iconify"
                  data-icon="ant-design:facebook-filled"
                  data-inline="false"
                ></span>
              </a>
              <a href>
                <span
                  class="iconify"
                  data-icon="ant-design:instagram-outlined"
                  data-inline="false"
                ></span>
              </a>
              <a href>
                <span
                  class="iconify"
                  data-icon="ant-design:linkedin-filled"
                  data-inline="false"
                ></span>
              </a>
            </p>
            <a
              href="https://www.evonline.com.br/"
              target="_blank"
              class="evonline"
            >
              Uma empresa do Grupo
              <picture>
                <source
                  srcset="~/assets/img/webp/marca-evonline.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/marca-evonline.png"
                  type="image/png"
                />
                <img loading="lazy" src="~/assets/img/marca-evonline.png" alt />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="whats-float">
      <a
        href="https://api.whatsapp.com/send?phone=5541988492754"
        target="_blank"
      >
        <picture>
          <source srcset="~/assets/img/webp/img-whats.webp" type="image/webp" />
          <source srcset="~/assets/img/img-whats.png" type="image/png" />
          <img loading="lazy" src="~/assets/img/img-whats.png" alt />
        </picture>
      </a>
    </div>
    <div class="float-mobile">
      <div>
        <a href="/fale-com-especialista" class="btn">Solicitar criação de marca</a>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5541988492754"
          target="_blank"
          class="whats-mobile"
        >
          <span
            class="iconify"
            data-icon="mdi:whatsapp"
            data-inline="false"
          ></span>
        </a>
      </div>
    </div>    
  </footer>
</template>

<style lang="scss">
$thin: "Product Sans Thin";
$normal: "Product Sans";
$medium: "Product Sans Medium";
$bold: "Product Sans Bold";

//FOOTER
footer {
  background-image: url("~assets/img/detalhe-footer.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  .footer {
    padding: 95px 0;
  }
  h3 {
    color: #422179;
    font-size: 18px;
    margin-bottom: 15px;
  }
  ul {
    margin: 0;
    li {
      line-height: 27px;
      list-style: none;
      a {
        color: #808080;
        &:hover {
          color: #613aa0;
        }
        &.nuxt-link-exact-active {
          color: #484848;
        }
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
    margin-top: 35px;
    min-height: 75px;
    padding: 10px 15px;
    p {
      font-size: 14px;
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

.whats-float {
  bottom: 50%;
  margin-bottom: -90px;
  position: fixed;
  right: 0;
  z-index: 99;
  text-align: right;
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
      a {
        color: #808080;
        &:hover {
          color: #613aa0;
        }
      }
      &:first-child,
      &:last-child {
        border-right: none;
      }
      &.nuxt-link-exact-active {
        opacity: 0.75;
      }
    }
  }
  .social {
    p {
      color: #422179;
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }
    a {
      font-size: 21px;
      margin: 0 5px;
      &:hover {
        opacity: 0.75;
      }
    }
  }
  .evonline {
    color: #484848;
    font-size: 16px !important;
    img {
      margin-left: 5px;
    }
    &:hover {
      opacity: 1 !important;
    }
  }
}
@media screen and (max-width: 767px) {
  footer {
    text-align: center;
    margin-bottom: 68px;
    .selo {
      display: block;
      .ummense,
      .tratativa {
        margin: 10px 0px;
      }
    }
    .box {
      display: block;
      p {
        width: 100%;
        &:first-child {
          margin-bottom: 15px;
        }
        &:last-child {
          text-align: center;
        }
        a {
          display: block;
          margin-bottom: 15px;
          &:first-child {
            margin-right: 0;
          }
        }
      }
    }
    .cell {
      padding: 15px 0;
    }
    .footer {
      padding: 50px 0;
    }
    .subfooter {
      padding: 25px 0;
      .menu-footer {
        display: flex;
        flex-direction: column;
        li {
          display: block;
          border: 0;
          &:nth-child(1) {
            order: 1;
          }
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
      .social {
        order: -1;
        text-align: center;
      }
    }
  }
  .whats-float {
    display: none;
    img {
      width: 75%;
    }
  }
  .float-mobile {
    background-color: #411e78;
    bottom: 0;
    line-height: 48px;
    position: fixed;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    .btn {
      background: #ffffff;
      border-radius: 6px;
      color: #411e78;
      display: block;      
      margin: 0;
      line-height: 48px;
    }
    .whats-mobile {
      background-color: #56FFC6;
      border-radius: 6px;
      color: #411e78;
      display: block;
      font-size: 27px;
    }
  }
}
@media screen and (min-width: 768px) {
  footer {
    .large-5 {
      max-width: 38.66667%;
    }
    .large-7 {
      min-width: 61.33333%;
    }
    .float-mobile {
      display: none;
    }
  }
}
</style>
