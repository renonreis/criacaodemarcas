<template>
  <li class="accordion-item" data-accordion-item @click="toggle">
    <a href="#!" class="accordion-title">
      <slot name="title"></slot>
    </a>
    <div class="accordion-content" data-tab-content v-show="show">
      <slot name="content"></slot>
    </div>
  </li>
</template>

<script>
// import Foundation from '~/plugins/foundation'
export default {
  components: {},
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },    
  },
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 300px;
  padding: 10px;
}
.accordion {
  display: flex;
  cursor: pointer;

  margin: 0;
}
.title {
  margin: 0;
  color: darkgreen;
}
.accordion-content {
  display: block;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 10px;
}
</style>