<template>
  <main>
    <Header />
    <div class="home-contato">
      <div class="grid-container">
        <div class="grid-x align-bottom text-center">
          <div class="cell large-12" style>
            <h1>Contato</h1>
            <h2>Converse com a nossa equipe</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-container conteudo">
      <div class="grid-x align-middle text-center">
        <iframe
          frameborder="0"
          scrolling="no"
          src="https://app.ummense.com/form/9171368d-9f72-469b-bb5a-08e3dfc67836?iframe=1"
          width="100%"
          height="600"
        ></iframe>        
      </div>
    </div>
    <Footer />
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

main {
  .home-contato {
    background-color: #401e78;
    .grid-x {
      min-height: 358px;
      padding: 80px 0;
      color: #ffffff;
    }
  }
}
.home-contato {
  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 65px;
    margin: 0px;
  }
  h2 {
    font-family: $normal;
    font-size: 17px;
    letter-spacing: 0;
  }
}
.conteudo {
  .grid-x {
    padding: 0 0 80px;
  }
}
@media screen and (min-width: 768px) {
  main {
    .home-contato {
      background-image: url("~assets/img/banner-cria-logos.jpg");
      background-position: bottom center;
      background-repeat: no-repeat;
    }
  }
}
</style>
