<template>
  <header>    
    <div class="topbar hide-for-small-only">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-middle">
          <div class="cell small-12 medium-6 large-6">
            <p>
              Serviço especializado de Criação de Marcas &nbsp;|&nbsp; Atendemos
              todo o Brasil
              <span
                class="iconify"
                data-icon="twemoji:flag-for-flag-brazil"
                data-inline="false"
              ></span>
            </p>
          </div>
          <div class="cell small-12 medium-6 large-6 text-right">
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
            <div class="cell small-8 medium-6 large-3">
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
                <ul class="menu align-right">
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
                    <a href="https://uweb.app/criacaodemarcas"
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
                    <n-link to="/contato" class="btn-contato">Contato</n-link>
                  </li>
                  <li>
                    <a
                      href="https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=654225927-36501e75-7dd9-40f8-aa1b-795404545e50"
                      target="_blank"
                      class="btn-marca solicite-marca"
                      >Solicitar criação de marca</a
                    >
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
  .topbar {
    background-color: #613aa0;
    color: #e4d3ff;
    p {
      margin: 0;
      line-height: 42px;
    }
    a {
      color: #55ffc5;
    }
    svg {
      vertical-align: -3px;
    }
  }
  .btn-marca {
    display: none;
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
      .btn-marca {
        display: block;
      }
    }
    .grid-x {
      min-height: 89px;
    }
    .menu {
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
        margin-left: 20px;
        padding: 0 25px;
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
}
@media screen and (max-width: 767px) {
  header {
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
