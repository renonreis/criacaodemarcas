<template>
  <main>    
    <div class="grid-x propostas">
      <div class="cell medium-6 stars">
        <div class="box">
          <a href="/">
            <picture>
              <source
                srcset="~/assets/img/propostas/webp/marca-proposta.webp"
                type="image/webp"
              />
              <source
                srcset="~/assets/img/propostas/marca-proposta.png"
                type="image/jpg"
              />
              <img
                loading="lazy"
                src="~/assets/img/propostas/marca-proposta.png"
                alt
              />
            </picture>
          </a>
          <h2>Receba em seu <span><span class="iconify" data-icon="ri:whatsapp-fill" data-inline="false"></span>WhatsApp </span> nossa Proposta
          para criar a marca da sua empresa</h2>
          <iframe frameborder="0" scrolling="no" src="https://app.ummense.com/form/91d5dcf9-a92e-43d6-a93b-0a286ab22329?iframe=1" width="100%" height="500px"></iframe>
        </div>
      </div>
      <div class="cell medium-6 text-right cases">
        <picture class="desktop">
          <source
            srcset="~/assets/img/propostas/webp/img-proposta.webp"
            type="image/webp"
          />
          <source
            srcset="~/assets/img/propostas/img-proposta.jpg"
            type="image/jpg"
          />
          <img
            loading="lazy"
            src="~/assets/img/propostas/img-proposta.jpg"
            alt
          />
        </picture>
        <n-link to="/">
          <picture class="mobile">
            <source
              srcset="~/assets/img/propostas/webp/img-proposta-mobile.webp"
              type="image/webp"
            />
            <source
              srcset="~/assets/img/propostas/img-proposta-mobile.jpg"
              type="image/jpg"
            />
            <img
              loading="lazy"
              src="~/assets/img/propostas/img-proposta-mobile.jpg"
              alt
            />
          </picture>
        </n-link>
      </div>             
    </div>
    <CookieControl locale="pt">            
  </CookieControl>
  </main>  
</template>

<script>
export default {};
</script>

<style lang="scss">

html,
body,
main {
  height: 100%;
}

.propostas {
  height: 100%;
  .cell {
    position: relative;
    .box {
      padding: 85px 25px 0;
      text-align: left;
      max-width: 715px;
      margin: 0 auto;
      h2 {
        padding-top: 25%;
        span {
          background-color: #422179;
          color: #55ffc5;
          display: inline-block;
          padding: 0 5px;
        }
        svg {
          vertical-align: -6px;
        }
      }
    }
  }
  .stars {
    background-image: url('~assets/img/propostas/webp/proposta-stars.webp');
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  .cases {
    .mobile {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  body {
    background-image: url('~assets/img/propostas/webp/proposta-stars.webp');
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  .propostas {
    .box {
      padding-top: 30px !important;
      a {
        display: none;
      }
      h2 {
        padding: 0 !important;
      }
    }
    .stars {
      order: 1;
      background: none;
    }
    .cases {
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
        img {
          width: 100%;
        }
      }
    }
  }
  
}

</style>
