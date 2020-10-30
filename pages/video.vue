<template>
  <main>
    <Header />
    <div class="home-video">
      <div class="grid-container">
        <div class="grid-x align-bottom text-center">
          <div class="cell large-12" style>
            <iframe width="100%" height="350" src="https://www.youtube.com/embed/0sgNKWXlHV0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <n-link to="/me-ligue" class="btn outline solicite-marca"
            >Quero receber ligação</n-link>
            <n-link to="/proposta" class="btn solicite-marca"
            >Quero receber proposta</n-link>
          </div>
        </div>
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
  .home-video {
    background-color: #ffffff;
    .grid-x {
      min-height: 550px;
      padding: 80px 0 80px;
      color: #ffffff;
      iframe {
        border: 2px solid #ffffff;
        max-width: 1050px;
      }
      .btn {
        background-color: #55ffc5;
        color: #43237a;
        font-size: 20px;
        margin: 25px 13px 0;
        min-width: 275px;
        &.outline {
          background-color: transparent;
          border: 2px solid #43237a;
          line-height: 46px;
          color: #43237a;
          &:hover {
            background-color: #43237a;
            border-color: #43237a;
            color: #ffffff;
          }
        }
        &:hover {
          background-color: #43237a;
          color: #ffffff;
        }
      }
    }
  }
}
.home-video {
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
    .home-video {
      background-image: url("~assets/img/banner-cria-logos.jpg");
      background-position: bottom center;
      background-repeat: no-repeat;
      background-position-y: -58px;
      .grid-x {
        padding: 210px 0 80px;
        iframe {
          height: 590px;
        }
      }
    }
  }
}
</style>
