<template>
  <header class="checkout">    
    <div class="sticky" :class="{ active: scrollPosition > 90 }">
      <div data-sticky data-margin-top="0">
        <div class="grid-container">
          <div class="grid-x align-middle">
            <div class="cell small-8 medium-6 large-3">
              <a href="/">
                <picture>
                  <source srcset="~/assets/img/webp/logo-criacao-marcas.webp" type="image/webp" />
                  <source srcset="~/assets/img/logo-criacao-marcas.png" type="image/png" />
                  <img loading="lazy" src="~/assets/img/logo-criacao-marcas.png" alt />
                </picture>
              </a>
            </div>
            <div class="cell small-4 medium-6 large-3 text-right hide-for-large">
              <button type="button" class="button" data-toggle="offCanvasRightPush">MENU</button>
            </div>
            <div class="cell medium-8 large-9 show-for-large">
              <nav>
                <ul class="menu align-right">                  
                  <li>
                    <n-link to="/contato">Contato</n-link>
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
header.checkout {
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
  .sticky {
    transition: all 0.3s;
    &.is-stuck {
      background-color: #412176;
      box-shadow: 0 0 10px 5px #00000070;
    }
    &.active {
      background: #422179;
      box-shadow: 0px 0px 10px 5px #2f1f4887;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 99;
    }
    .grid-x {
      min-height: 100px;
    }
    .menu {
      a {
        color: #ffffff;
        align-self: center;
        &:hover {
          color: #55ffc5;
        }
        &.nuxt-link-exact-active {
          color: #ffffff;
          opacity: 0.75;
        }
      }
      .client-area {
        border: 2px solid #ffffff;
        border-radius: 6px;
        line-height: 38px;
        margin-left: 20px;
        padding: 0 25px;
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
    }
  }
}
@media screen and (min-width: 768px) {
  header.checkout {
    background-color: #422179;
    position: relative;
  }
}
</style>
