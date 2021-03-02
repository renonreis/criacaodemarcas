<template>
  <footer>
    <div class="footer">
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="cell small-12 medium-5 large-5">
            <a href="/">
              <picture>
                <source
                  srcset="~/assets/img/webp/criacao-de-marcas-grupo-evonline.webp"
                  type="image/webp"
                />
                <source
                  srcset="~/assets/img/criacao-de-marcas-grupo-evonline.png"
                  type="image/png"
                />
                <img
                  class="logo-footer"
                  loading="lazy"
                  src="~/assets/img/criacao-de-marcas-grupo-evonline.png"
                  alt
                />
              </picture>
            </a>
            <p>
              Nós da CriaçãodeMarcas.com somos especializados em criação de
              marcas para empresas, produtos e serviços. Nosso trabalho é
              proporcionar um serviço de qualidade para impactar e estimular seu
              público alvo na geração de novos negócios.
            </p>
            <n-link to="/proposta" class="btn solicite-marca"
            >Receber proposta via WhatsApp</n-link>
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
                      <n-link to="/marcas-de-sucesso" class="contato">Marcas de Sucesso</n-link>
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
                    <li>
                      <n-link to="/contato">Contato</n-link>
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
                    href="tel:30770000"
                    target="_blank"
                  >
                    <span
                      class="iconify"
                      data-icon="clarity:phone-handset-solid"
                      data-inline="false"
                    ></span>
                    41 3077.0000
                  </a><br/>
                  <a
                    href="https://api.whatsapp.com/send?phone=5541988492754"
                    target="_blank"
                  >
                    <span
                      class="iconify"
                      data-icon="clarity:phone-handset-solid"
                      data-inline="false"
                    ></span>
                    41 98849.2754
                  </a>
                </div>
                <div class="cell medium-4 large-4">
                  <h3>Pagamento</h3>
                  <picture>
                    <source
                      srcset="~/assets/img/webp/formas-de-pagamento-para-comprar-logo.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="~/assets/img/formas-de-pagamento-para-comprar-logo.png"
                      type="image/png"
                    />
                    <img
                      loading="lazy"
                      src="~/assets/img/formas-de-pagamento-para-comprar-logo.png"
                      alt
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div class="cell sub-footer">
            <div class="selo">
              <a href="https://www.ummense.com/promo/evonline" target="_blank" class="">
                <picture>
                  <source
                    srcset="~/assets/img/webp/selo-premium-ummense.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/selo-premium-ummense.jpg"
                    type="image/png"
                  />
                  <img
                    class=""
                    loading="lazy"
                    src="~/assets/img/selo-premium-ummense.jpg"
                    alt
                  />
                </picture>
              </a>              
            </div>
            <div class="box">
              <p>
                Baixe o nosso aplicativo em seu celular e acompanhe o andamento dos serviços
              </p>
              <p>
                <a href="https://play.google.com/store/apps/details?id=com.uapp.criacaodemarcas" target="_blank">
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
                <a href="https://apps.apple.com/us/app/cria%C3%A7%C3%A3odemarcas-com/id1553137119" target="_blank">
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
                2021 - Criação de Marcas <span class="divider">&nbsp;|&nbsp;</span> CNPJ: 20.012.672/0001-24 <span class="divider">&nbsp;|&nbsp;</span> Atendemos todo o Brasil
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
            <p>
              Siga-nos
              <a href="https://www.facebook.com/Ummense" target="_blank">
                <span
                  class="iconify"
                  data-icon="ant-design:facebook-filled"
                  data-inline="false"
                ></span>
              </a>
              <a href="https://www.instagram.com/ummense/" target="_blank">
                <span
                  class="iconify"
                  data-icon="ant-design:instagram-outlined"
                  data-inline="false"
                ></span>
              </a>
              <a href="https://br.linkedin.com/company/ummense" target="_blank">
                <span
                  class="iconify"
                  data-icon="ant-design:linkedin-filled"
                  data-inline="false"
                ></span>
              </a>
              <a href="https://www.youtube.com/c/Ummense" target="_blank">
                <span 
                  class="iconify" 
                  data-icon="ant-design:youtube-filled" 
                  data-inline="false"
                ></span>
              </a>
            </p>
            <a
              href="https://www.evonline.com.br/"
              target="_blank"
              class="evonline"
              v-if="false"
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
    <div class="float-mobile" :class="{ activeWhats: scrollPosition > 200 }">
      <div>
        <n-link to="/proposta" class="btn">
          Quer receber proposta
        </n-link>
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
    <CookieControl locale="pt">            
    </CookieControl>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style lang="scss">
$thin: "Product Sans Thin";
$normal: "Product Sans";
$medium: "Product Sans Medium";
$bold: "Product Sans Bold";

//FOOTER
footer {
  
  .footer {
    padding: 95px 0;
    .selo-ummense {
      margin: 60px 0 30px;
    }
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
  .sub-footer {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: block;
      .selo {
        margin-right: 0px;
      }
      .box {
        margin: 35px auto 0 auto;
      }
    }
  }
  .selo {
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
    @media screen and (max-width: 1240px){
      margin-right: 20px;
    } 
    a {
      img {
        box-shadow: 5px 5px 5px 0px #eeeeee;
      }
    }
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
    width: 80%;
    p {
      color: #572b8c;
      font-size: 16px;
      margin: 0;
      padding: 0 15px;
      width: 50%;
      @media screen and (min-width: 1240px){
        width: 65%;
      } 
      &:last-child {
        padding: 0;
        text-align: right;
        @media screen and (min-width: 1240px){
          width: 35%;
        } 
      }
      a:nth-child(1) {
        margin-right: 13px;
      }
    }
  }
}

.whats-float {
  bottom: 0px;
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
    .cell {
      padding: 0 !important;
    }
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
      padding: 50px 0.9375rem;
    }
    .subfooter {
      padding: 15px 0;
      .menu-footer {
        display: flex;
        flex-direction: column;
        li {
          display: block;
          border: 0;
          max-width: 250px;
          margin: 0 auto;
          .divider {
            display: none;
          }
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
    background-color: #ffffff;
    bottom: 0;
    display: none;
    line-height: 48px;
    grid-template-columns: 3fr 1fr;
    grid-gap: 10px;
    padding: 10px;
    position: fixed;
    width: 100%;
    &.activeWhats {
      display: grid;
    }
    .btn {
      background: #411e78;
      border-radius: 6px;
      color: #ffffff;
      display: block;      
      margin: 0;
      line-height: 48px;
      padding: 0 10px;
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
