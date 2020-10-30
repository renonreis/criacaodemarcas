<template>
  <header>
    <div class="topbar hide-for-small-only">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-middle">
          <div class="cell small-12 medium-8 large-8">
            <p>
              Serviço especializado de Criação de Marcas | Uma empresa do Grupo
              <a
                href="https://www.evonline.com.br/"
                target="_blank"
                class="evonline"
                >Evonline</a
              >
              | Atendemos todo o Brasil
              <span
                class="iconify"
                data-icon="twemoji:flag-for-flag-brazil"
                data-inline="false"
              ></span>
            </p>
          </div>
          <div class="cell small-12 medium-4 large-4 text-right">
            <p>
              Fale com nossa equipe:
              <a href="https://api.whatsapp.com/send?phone=5541988492754">
                <span
                  class="iconify"
                  data-icon="mdi:whatsapp"
                  data-inline="false"
                ></span>
                41 98849.2754
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky" :class="{ active: scrollPosition > 90 }">
      <div data-sticky data-margin-top="0">
        <div class="grid-container">
          <div class="grid-x align-middle">
            <div class="cell small-12 medium-6 large-3">
              <a href="/">
                <picture>
                  <source
                    srcset="~/assets/img/webp/logo-criacao-marcas.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="~/assets/img/logo-criacao-marcas.png"
                    type="image/png"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/logo-criacao-marcas.png"
                    alt
                  />
                </picture>
              </a>
            </div>
            <div
              class="cell small-4 medium-6 large-3 text-right hide-for-large"
              v-if="false"
            >
              <button
                type="button"
                class="button"
                data-toggle="offCanvasRightPush"
              >
                MENU
              </button>
            </div>
            <div class="cell medium-8 large-9 show-for-large">
              <nav>
                <ul class="menu dropdown align-right" data-dropdown-menu>
                  <li class="mega-menu">
                    <n-link to="#" class="servicos">Serviços de Marketing Digital <span class="iconify" data-icon="dashicons:arrow-down-alt2" data-inline="false" style="vertical-align: middle;"></span></n-link>
                    <ul class="menu boxMegamenu">
                      <li class="">
                        <div class="grid-x text-left">
                          <div class="cell large-12 text-center">
                            <h2>
                              Confira outros serviços prestados pelo Grupo
                              <picture>
                              <source
                                srcset="~/assets/img/webp/marca-evonline.webp"
                                type="image/webp"
                              />
                              <source
                                srcset="~/assets/img/marca-evonline.png"
                                type="image/png"
                              />
                              <img loading="lazy" src="~/assets/img/marca-evonline.png" style="vertical-align: unset;"/>
                            </picture>
                            </h2>
                          </div>
                          <div class="cell large-4">
                            <a
                              href="https://www.evonline.com.br/criacao-de-websites/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-criacao-sites.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-criacao-sites.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-criacao-sites.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="criacaoSites"
                                  >Criação de Sites</span
                                >
                                <br />
                                Sua presença digital
                              </p>
                            </a>
                            <a
                              href="https://www.evonline.com.br/criacao-de-loja-virtual/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-criacao-lojas.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-criacao-lojas.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-criacao-lojas.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="criacaoLojas">Lojas Virtuais</span>
                                <br />
                                Compra e venda virtual
                              </p>
                            </a>
                            <a href="/">
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-criacao-marcas.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-criacao-marcas.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-criacao-marcas.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="criacaoMarcas"
                                  >Criação de Marcas</span
                                >
                                <br />
                                Produção de logotipo
                              </p>
                            </a>
                          </div>
                          <div class="cell large-4 menuCenter">
                            <a
                              href="https://www.evonline.com.br/design-grafico/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-design-grafico.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-design-grafico.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-design-grafico.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="designGrafico"
                                  >Design Gráfico</span
                                >
                                <br />
                                Identidade visual
                              </p>
                            </a>
                            <a href="/" target="_blank">
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-criacao-nomes.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-criacao-nomes.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-criacao-nomes.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="criacaoNomes"
                                  >Criação de Nomes</span
                                >
                                <br />
                                Nomes para empresas
                              </p>
                            </a>
                            <a
                              href="https://www.evonline.com.br/links-patrocinados-adwords/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-ads.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-ads.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-ads.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="googleAnuncio">Google Ads</span>
                                <br />
                                Campanhas estratégicas
                              </p>
                            </a>
                          </div>
                          <div class="cell large-4 menuEnd">
                            <a
                              href="https://www.evonline.com.br/otimizacao-de-sites-seo/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-seo.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-seo.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-seo.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="seoSites"
                                  >Otimização de Sites</span
                                >
                                <br />
                                SEO para posicionamento
                              </p>
                            </a>
                            <a
                              href="https://www.evonline.com.br/criacao-de-conteudo/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-criacao-conteudo.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-criacao-conteudo.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-criacao-conteudo.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="criacaoConteudo"
                                  >Criação de Conteúdo</span
                                >
                                <br />
                                Comunique sua estratégia
                              </p>
                            </a>
                            <a
                              href="https://www.evonline.com.br/gerenciamento-de-midias-sociais/"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-midias-sociais.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-midias-sociais.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-midias-sociais.png"
                                  alt=""
                                />
                              </picture>
                              <p>
                                <span class="redesSociais">Mídias Sociais</span>
                                <br />
                                Presença nas redes sociais
                              </p>
                            </a>
                          </div>
                          <div class="cell large-12">
                            <a
                              href="#"
                              class="CTAmarketingDigital"
                              target="_blank"
                            >
                              <picture>
                                <source
                                  srcset="
                                    ~/assets/img/evonline/webp/megamenu-marketing-digital.webp
                                  "
                                  type="image/webp"
                                />
                                <source
                                  srcset="
                                    ~/assets/img/evonline/megamenu-marketing-digital.png
                                  "
                                  type="image/png"
                                />
                                <img
                                  src="~/assets/img/evonline/megamenu-marketing-digital.png"
                                  alt=""
                                />
                              </picture>
                              <p style="margin-bottom: 0">
                                <span class="marketingDigital"
                                  >Marketing Digital</span
                                ><br />
                                Potencialize o seu Negócio
                              </p>
                              <p class="content">
                                Gerenciamos todo o marketing digital da sua
                                empresa, analisamos e executamos o que é
                                relevante para ajudar você a crescer e
                                conquistar o seu espaço online.
                              </p>
                              <p class="btn">saiba mais</p>
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <n-link to="/contato" class="contato">Contato</n-link>
                  </li>
                  <li>
                    <a
                      href="https://uweb.app/criacaodemarcas"
                      target="_blank"
                      class="client-area"
                      title="Acompanhe o trabalho de criação em tempo real"
                    >
                      Área do cliente
                      <picture>
                        <source
                          srcset="~/assets/img/webp/img-area-cliente.webp"
                          type="image/webp"
                        />
                        <source
                          srcset="~/assets/img/img-area-cliente.png"
                          type="image/png"
                        />
                        <img
                          loading="lazy"
                          src="~/assets/img/img-area-cliente.png"
                          alt
                        />
                      </picture>
                    </a>
                  </li>                  
                  <li>
                    <n-link to="/me-ligue" class="btn-marca outline solicite-marca">
                      Quero receber ligação
                    </n-link>                                        
                  </li>
                  <li>
                    <n-link to="/proposta" class="btn-marca solicite-marca">
                      Quero receber proposta
                    </n-link>                                        
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
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
header {
  background-color: #613aa0;
  z-index: 999;
  .topbar {
    background-color: #272c3a;
    color: #e4d3ff;
    p {
      font-size: 14px;
      margin: 0;
      line-height: 42px;
    }
    a {
      color: #55ffc5;
    }
    svg {
      vertical-align: -3px;
    }
    .evonline {
      color: #e4d3ff;
      &:hover {
        color: #55ffc5;
        opacity: 1;
      }
    }
  }
  .btn-marca {
    display: none;
  }
  .mega-menu {
    ul {
      display: none;
    }
    &:hover {
      ul {
        display: block;
      }
    }
  }
  .menu {
    a {
      line-height: 67px;
    }
  }
  .sticky {
    transition: all 0.3s;
    &.is-stuck {
      background-color: #412176;
      box-shadow: 0 0 15px 5px #00000010;
    }
    &.active {
      background: #422179;
      box-shadow: 0px 0px 10px 5px #2f1f4840;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 99;
      .grid-x {
        min-height: 65px;
      }
      .client-area,
      .servicos,
      .contato {
        display: none;
      }
      .btn-marca {
        display: block;
      }
      .boxMegamenu {
        top: 65px;
      }
      .menu {
        a {
          line-height: 43px;
        }
      }
    }
    .grid-x {
      min-height: 89px;
      position: relative;
    }
    .menu {
      position: initial;
      a {
        color: #ffffff;
        align-self: center;
        &:hover {
          color: #55ffc5;
        }
        &.nuxt-link-exact-active {
          opacity: 0.75;
        }
      }
      .btn-marca {
        background-color: #55ffc5;
        border: 2px solid #55ffc5;
        border-radius: 6px;
        color: #43237a;
        line-height: 38px;
        margin-left: 9px;
        min-width: 225px;
        padding: 0 25px;
        text-align: center;
        &.outline {
          border: 2px solid #55ffc5;
          background-color: transparent;
          color: #55ffc5;
        }
        &:hover {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #43237a;
        }
      }
      .client-area {
        border: 2px solid #ffffff;
        border-radius: 6px;
        line-height: 38px;
        margin-left: 20px;
        padding: 0 25px;
        position: relative;
        &:hover {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #412176;
          img {
            display: block;
            position: absolute;
            top: 45px;
            right: -30px;
          }
        }
        img {
          display: none;
        }
      }
      .btn-contato {
        background-color: #ffffff;
        border: 2px solid #ffffff;
        border-radius: 6px;
        color: #412176;
        line-height: 38px;
        margin-left: 20px;
        padding: 0 25px;
        &:hover {
          background-color: transparent;
          color: #ffffff;
        }
      }
    }
  }
  .boxMegamenu {
    background: #ffffff;
    border: 0;
    border-top: 2px solid #eef3f9;
    box-shadow: 0px 10px 10px #2b159314;
    left: 0;
    padding: 30px 50px;
    position: absolute !important;
    top: 89px;
    width: 100%;
    h2 {
      font-family: 'Product Sans';
      color: #606478;
      font-size: 21px;
    }    
    .grid-x {
      height: auto;
    }
    .menuCenter,
    .menuEnd {
      display: flex;
      flex-direction: column;
    }
    .menuCenter {
      align-items: center;
    }
    .menuEnd {
      align-items: flex-end;
    }
    a {
      border-radius: 6px;
      max-width: 280px;
      padding: 10px !important;
      text-align: left;
      width: 100%;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      &:hover {
        background-color: #eef3f9;
        opacity: 1;
      }
      picture {
        float: left;
      }
      p {
        color: #606478;
        font-size: 14px;
        float: left;
        line-height: 21px;
        margin-left: 10px;
        margin-bottom: 0;
        span {
          font-size: 16px;
          &.criacaoSites {
            color: #00b19f;
          }
          &.criacaoLojas {
            color: #ea6f8c;
          }
          &.criacaoMarcas {
            color: #2d9ac3;
          }
          &.MktDigital {
            color: #05c284;
          }
          &.designGrafico {
            color: #fa7b49;
          }
          &.criacaoNomes {
            color: #956ac5;
          }
          &.googleAnuncio {
            color: #50a984;
          }
          &.seoSites {
            color: #9b7c64;
          }
          &.criacaoConteudo {
            color: #f14d70;
          }
          &.emailMarketing {
            color: #e2a022;
          }
          &.inboudMarketing {
            color: #af5059;
          }
          &.redesSociais {
            color: #5c6ac3;
          }
          &.marketingDigital {
            color: #05c284;
          }
        }
      }
    }
    .CTAmarketingDigital {
      max-width: 100% !important;
      border: 2px solid #eef3f9;
      margin-top: 10px;
      &:hover {
        .btn {
          background: #05b58c;
        }
      }
      .content {
        max-width: 60.5%;
        margin-bottom: 0;
        padding: 15px 20px;
        margin: 0;
      }
      .btn {
        background: #05c284;
        color: #ffffff;
        line-height: 50px;
        margin: 0;
        max-width: 170px;
        min-width: 170px;
        width: 100%;
        text-align: center;
        border-radius: 6px;
        font-size: 16px;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  header {
    background-color: #401e78;
    text-align: center;
    .sticky {
      &.active {
        display: none;
      }
    }
    .topbar {
      text-align: center;
      .text-right {
        text-align: center;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  header {
    background-color: transparent;
    position: absolute;
    width: 100%;
  }
}
</style>
