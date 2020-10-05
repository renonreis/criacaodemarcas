<template>
  <footer>
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
          <div class="cell large-4 text-right social" v-if="false">
            <p>
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
          </div>
        </div>
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
  bottom: 0;
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
    color: #422179;
    font-size: 18px;
    font-weight: 700;
    p {
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
}
@media screen and (max-width: 767px) {
  footer {
    text-align: center;
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
          margin: 0;
          &:nth-child(1) {
            order: 1;
          }
          &:last-child {
            margin-bottom: 0;
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
    img {
      width: 75%;
    }
  }
}
@media screen and (min-width: 768px) {
  footer {
    .large-5 {
      max-width: 38.66667%;
      p {
      }
    }
    .large-7 {
      min-width: 61.33333%;
    }
  }
}
</style>
