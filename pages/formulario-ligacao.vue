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
          <h2>Receba uma <span> Ligação </span> da nossa equipe de atendimento</h2>
          <form>
          <div class="grid-container">
              <div class="grid-x grid-padding-x">
                <form action="" class="form-ligacao">
                  <div class="medium-12 cell">
                    <label>
                      <input type="text" placeholder="Seu nome" required>
                    </label>
                  </div>
                  <div class="medium-12 cell">
                    <label>
                      <input type="text" placeholder="Seu WhatsApp" required>
                    </label>
                  </div>
                  <div class="medium-12 cell">
                    <label>
                      <input type="text" placeholder="Seu telefone fixo" required>
                    </label>
                  </div>
                  <div class="medium-12 cell">
                    <label>
                      <select>
                        <option value="" disabled selected>Seu horário de preferência</option>
                        <option value="husker">Qualquer Horário</option>
                        <option value="starbuck">Manhã</option>
                        <option value="hotdog">Tarde</option>
                      </select>
                    </label>
                  </div>
                  <div class="medium-12 cell">
                    <label>
                      <input type="email" placeholder="Seu email" required>
                    </label>
                  </div>
                  <div class="medium-12 cell">
                    <input type="submit" class="button" value="Receber ligação">
                  </div>
                </form>
              </div>
          </div>
        </form>
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

.form-ligacao {
  width: 100%;
  max-width: 450px;
  margin: 25px 0;
  input {
    border: 0;
    border-bottom: 3px solid #f2f2f2;
    box-shadow: none;
    font-size: 18px;
    height: auto;
    line-height: 31px;
    padding: 0.5rem 0;
    &:focus {
      border: 0;
      border-bottom: 3px solid #422179;
      box-shadow: none;
    }
    &::-webkit-input-placeholder { /* Edge */
      color: #484848;
      opacity: 1;
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #484848;
      opacity: 1;
    }
    &::placeholder {
      color: #484848;
      opacity: 1;
    }
  }
  select {
    border: 0;
    border-bottom: 3px solid #f2f2f2;
    box-shadow: none;
    font-size: 18px;
    height: auto;
    line-height: 50px;
    padding-left: 0;
  }
  .button {
    background-color: #422179;
    color: #55ffc5;
    cursor: pointer;
    border-radius: 6px;
    border: 0;
    font-size: 18px;
    line-height: 34px;
    width: 100%;
    outline: none;
    transition: all 0.3s;
    &:hover {
      background-color: #55ffc5;
      color: #422179;
    }
  }
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
        max-width: 475px;
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
