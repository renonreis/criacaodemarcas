<template>
  <main>
    <HeaderCheckout />
    <div class="bgCheckout">
      <div class="grid-container">
        <div class="grid-x grid-margin-x align-center">
          <div class="cell">
            <h1>Parabéns por sua compra!</h1>
          </div>
          <div class="cell">
            <div class="box-pagamento">
              <div class="content">
                <h2>
                  Agora que sua compra foi efetuada com sucesso, vamos precisar
                  saber mais informações sobre sua empresa
                </h2>
                <p>
                  Preencha o briefing abaixo para que nossos especialistas
                  conheçam sobre seu negócio e público alvo.
                </p>
                <a
                  href="https://app.ummense.com/form/91a73693-aea2-4426-b155-41699b08cfdf"
                  target="_blank"
                  class="btn"
                  >Preencher briefing</a
                >
                <p>
                  O prazo de 72 horas para apresentar o serviço contratado
                  inicia após efetivação do pagamento e preenchimento do
                  Briefing.
                </p>
                <p>
                  Caso não possa preencher o briefing agora, você poderá
                  acessá-lo na
                  <a href="https://uweb.app/criacaodemarcas" target="_blank"
                    >área do cliente</a
                  >
                  ou em seu e-mail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterCheckout />
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
$thin: "Product Sans Thin";
$normal: "Product Sans";
$medium: "Product Sans Medium";
$bold: "Product Sans Bold";

h1 {
  font-size: 40px;
  color: #55ffc5;
  text-align: center;
  margin: 50px 0;
  align-items: center;
  align-self: center;
  display: flex;
  justify-content: center;
  &:before {
    content: url("~assets/img/checkout/webp/img-stars-2.webp");
    margin-right: 20px;
  }
  &:after {
    content: url("~assets/img/checkout/webp/img-stars-1.webp");
    margin-left: 20px;
  }
}

.bgCheckout {
  background-image: linear-gradient(to bottom, #422179 43%, #55ffc5 43%);
  min-height: 600px;
}

.box-pagamento {
  background-color: #ffffff;
  border-radius: 8px;
  max-width: 765px;
  margin: 0 auto 220px;
  padding: 0 15px;
  text-align: center;
  .content {
    max-width: 590px;
    margin: 0 auto;
    padding: 70px 0;
    h2 {
      font-family: $normal;
      font-size: 24px;
    }
    p {
      color: #808080;
      max-width: 465px;
      margin: 0 auto 20px;
    }
    .btn {
      background-color: #55ffc5;
      color: #422179;
      margin: 15px 0 30px;
      &:hover {
        background-color: #422179;
        color: #55ffc5;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  h1 {
    font-size: 30px;
    margin: 25px 0;
    &:after,
    &:before {
      display: none;
    }
  }
  .box-pagamento {
    margin: 0 auto 50px;
    .content {
      padding: 35px 0;
      h2 {
        font-size: 21px;
      }
    }
  }
}
</style>
