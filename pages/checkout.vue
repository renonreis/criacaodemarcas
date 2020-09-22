<template>
  <main>
    <HeaderCheckout />
    <div class="bgCheckout">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell large-8">
            <form>
              <div class="step" v-if="step === 1">
                <div class="grid-container box dados">
                  <div class="grid-x grid-padding-x">
                    <div class="cell">
                      <h2>Dados pessoais</h2>
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="Nome completo" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="email" placeholder="E-mail" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="Telefone" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="Nome da empresa" />
                    </div>
                  </div>
                </div>
                <div class="grid-container box termos">
                  <div class="grid-x grid-padding-x">
                    <div class="cell">
                      <input id="termos" type="checkbox" />
                      <label for="termos">
                        Li e concordo com os termos de
                        <a href="#">Privacidade de dados</a> e de
                        <a href="#">Prestação de serviços</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="grid-container full">
                  <div class="grid-x">
                    <div class="cell text-right">
                      <input type="submit" class="button" value="Continuar" @click.prevent="next()" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step" v-if="step === 2">
                <div class="grid-container box dados">
                  <div class="grid-x grid-padding-x">
                    <div class="cell">
                      <h2>Dados para emissão da nota fiscal</h2>
                    </div>
                    <div class="cell">
                      <fieldset class="large-5 cell">
                        <input
                          type="radio"
                          name="billing"
                          value="Pessoa Física"
                          id="cpfBilling"
                          checked
                        />
                        <label for="cpfBilling">Pessoa Física</label>
                        <input type="radio" name="billing" value="Pessoa Jurídica" id="cnpjBilling" />
                        <label for="cnpjBilling">Pessoa Jurídica</label>
                      </fieldset>
                    </div>
                    <div class="medium-12 cell">
                      <input type="text" placeholder="Razão Social" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="CNPJ" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="Inscrição Estadual" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="CPF" />
                    </div>
                    <div class="medium-6 cell">
                      <input type="text" placeholder="CEP" />
                    </div>
                    <div class="medium-9 cell">
                      <input type="text" placeholder="Endereço" />
                    </div>
                    <div class="medium-3 cell">
                      <input type="text" placeholder="Numero" />
                    </div>
                    <div class="medium-4 cell">
                      <input type="text" placeholder="Estado" />
                    </div>
                    <div class="medium-4 cell">
                      <input type="text" placeholder="Cidade" />
                    </div>
                    <div class="medium-4 cell">
                      <input type="text" placeholder="Bairro" />
                    </div>
                  </div>
                </div>
                <div class="grid-container full">
                  <div class="grid-x">
                    <div class="cell large-6">
                      <input
                        type="submit"
                        class="button back"
                        value="Voltar"
                        @click.prevent="prev()"
                      />
                    </div>
                    <div class="cell large-6 text-right">
                      <input type="submit" class="button" value="Continuar" @click.prevent="next()" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step" v-if="step === 3">
                <div class="grid-container box dados">
                  <div class="grid-x grid-padding-x">
                    <div class="cell">
                      <h2>Selecione a forma de pagamento</h2>
                    </div>
                    <div class="cell">
                      <fieldset class="cell large-12">
                        <input
                          type="radio"
                          name="payments"
                          value="Cartão de crédito"
                          id="creditCard"
                          checked
                        />
                        <label for="creditCard">Cartão de crédito</label>
                      </fieldset>
                      <fieldset class="cell large-12">
                        <input type="radio" name="payments" value="Cartão de débito" id="debitCard" />
                        <label for="debitCard">Cartão de débito</label>
                      </fieldset>
                      <fieldset class="cell large-12">
                        <input type="radio" name="payments" value="Boleto" id="bankSlip" />
                        <label for="bankSlip">Boleto</label>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="grid-container full">
                  <div class="grid-x">
                    <div class="cell large-6">
                      <input
                        type="submit"
                        class="button back"
                        value="Voltar"
                        @click.prevent="prev()"
                      />
                    </div>
                    <div class="cell large-6 text-right">
                      <input type="submit" class="button" value="Continuar" @click.prevent="next()" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="step" v-if="step === 4">
                <div class="creditCard">
                  <div class="grid-container box payment">
                    <div class="grid-x grid-padding-x">
                      <div class="cell">
                        <h2>
                          Pagamento com Cartão de crédito
                          <a
                            href="#"
                            class="changePayment"
                            @click.prevent="prev()"
                          >Alterar forma de pagamento</a>
                        </h2>
                      </div>
                      <div class="medium-6 cell">
                        <input type="text" placeholder="Número do cartão" />
                        <input type="text" placeholder="Nome do dono do cartão" />
                        <input type="text" placeholder="Data de vencimento" />
                        <input type="text" placeholder="Código de segurança" />
                        <input type="text" placeholder="CPF titular do cartão" />
                      </div>
                      <div class="medium-6 cell">IMAGEM</div>
                    </div>
                  </div>
                  <div class="grid-container box installments">
                    <div class="grid-x">
                      <div class="cell">
                        <h2>Selecione a quantidade de parcelas</h2>
                        <label>
                          <select>
                            <option value="husker">Husker</option>
                            <option value="starbuck">Starbuck</option>
                            <option value="hotdog">Hot Dog</option>
                            <option value="apollo">Apollo</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="cell large-4">
            <div class="cart">
              <div class="itens">
                <h3>Criação de Marca</h3>
                <p class="quantity">
                  Qtd
                  <span class="number">1</span>
                </p>
                <p class="price">
                  R$ 440,00
                  <span class="sale">R$ 298,00</span>
                </p>
              </div>
            </div>
            <div class="text-right">
              <a href="#" class="add-services">Adicionar mais serviços</a>
            </div>
            <div class="step" v-if="step === 4">
              <div class="total-order">
                <h3>
                  Você pagará:
                  <span>R$ 298,00</span>
                </h3>
                <p>1x de R$ 298 no Cartão de crédito</p>
              </div>
              <div class="text-right">
                <input
                  type="submit"
                  class="button checkout"
                  value="Confirmar a  compra"
                  @click.prevent="next()"
                />
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
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    pfCheck() {
      cpfCheck = true;
    },
    submit() {
      alert("Submit to blah and show blah and etc.");
    },
  },
};
</script>

<style lang="scss">
$thin: "Product Sans Thin";
$normal: "Product Sans";
$medium: "Product Sans Medium";
$bold: "Product Sans Bold";

.bgCheckout {
  background-image: linear-gradient(to bottom, #422179 23%, #faf8f0 23%);
  min-height: 1000px;
}
form {
  .button {
    background-color: #55ffc5;
    border: 0;
    border-radius: 6px;
    color: #422179;
    cursor: pointer;
    font-size: 18px;
    line-height: 50px;
    margin-top: 10px;
    min-width: 160px;
    transition: all 0.2s linear;
    &.back {
      background-color: #808080;
      color: #ffffff;
      opacity: 0.5;
    }
    &:hover {
      background-color: #422179;
      color: #55ffc5;
    }
    &:focus {
      outline: none;
    }
  }
  .payment {
    h2 {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .changePayment {
    font-size: 13px;
    font-family: $normal;
    letter-spacing: 0;
  }
}
.box {
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0px 10px 15px 5px #3600901a;
  margin-bottom: 10px;
  padding: 60px 15px;
  font-size: 16px;
  .grid-x {
    max-width: 640px;
    margin: 0 auto !important;
    h2 {
      font-size: 24px;
    }
  }
  label {
    font-size: 16px;
    margin: 0;
  }
}
.cart {
  background: #ffffff;
  border-radius: 6px;
  padding: 20px 20px 0;
  .itens {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    h3 {
      align-self: center;
      color: #422179;
      font-size: 16px;
      margin: 0;
      width: 55%;
    }
    .quantity,
    .price {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
}
.add-services {
  background-color: #cbb9e8;
  line-height: 30px;
  display: inline-block;
  margin-top: 10px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 13px;
  color: #422179;
}
.total-order {
  background-color: #ffffff;
  border-radius: 6px;
  margin-top: 10px;
  padding: 35px 15px;
  text-align: center;
}
input.button.checkout {
  font-size: 18px;
  background: #f1eedd;
  color: #808080;
  cursor: pointer;
  line-height: 44px;
  min-width: 243px;
  border: 2px solid #e9e5d1;
  border-radius: 6px;
  margin-top: 20px;
  &:hover {
    background: green;
    border-color: green;
    color: #ffffff;
  }
}
</style>
