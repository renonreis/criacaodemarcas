<template>
  <header>
    <div class="topbar">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-middle">
          <div class="cell small-12 medium-6 large-6">
            <p>Criação de Marcas Profissionais | Logos Criativos</p>
          </div>
          <div class="cell small-12 medium-6 large-6 text-right">
            <p>
              Fale com nossa equipe:
              <a href="#"
                ><span
                  class="iconify"
                  data-icon="mdi:whatsapp"
                  data-inline="false"
                ></span>
                41 99999.9999</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sticky" data-sticky-container>
          <div data-sticky data-margin-top="0">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-middle">
          <div class="cell small-8 medium-6 large-4">
            <a href="index.html">
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
                  alt=""
                />
              </picture>
            </a>
          </div>
          <div class="cell small-4 medium-6 large-4 text-right hide-for-large">
            <button
              type="button"
              class="button"
              data-toggle="offCanvasRightPush"
            >
              MENU
            </button>
          </div>
          <div class="cell medium-8 large-8 show-for-large">
            <nav>
              <ul class="menu align-right">
                <li><a href="index.html">Home</a></li>
                <li><a href="#">Cartão de visita</a></li>
                <li><a href="#">Criação de nomes</a></li>
                <li><a href="#">Papelaria</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#" class="client-area">Área do cliente</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: absolute;
  width: 100%;
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
  .sticky {
    &.is-stuck {
      background-color: #412176;
      box-shadow: 0 0 10px 5px #00000070;
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
      }
      .client-area {
        border: 2px solid #ffffff;
        border-radius: 6px;
        line-height: 38px;
        margin-left: 20px;
        padding: 0 25px;
        &:hover {
          background-color: #613aa0;
          border-color: #613aa0;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
