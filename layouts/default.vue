<template>
  <div class="off-canvas-wrapper">
    <!-- off-canvas-wrapper -->
    <div
      class="off-canvas position-right"
      id="offCanvasRightPush"
      data-off-canvas
      data-transition="push"
    >
      <!-- Your menu or Off-canvas content goes here -->
      <nav>
        <ul class="vertical menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Cartão de visita</a></li>
          <li><a href="#">Criação de nomes</a></li>
          <li><a href="#">Papelaria</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Área do cliente</a></li>
        </ul>
      </nav>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <!-- off-canvas-content -->      
      <Nuxt />      
    </div>
  </div>
</template>

<style>
html {
  font-family: "Product Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
