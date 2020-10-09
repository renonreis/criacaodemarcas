<template>
  <li class="accordion-item" data-accordion-item :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
    <a href="#!" class="accordion-title">
      <slot name="title"></slot>
    </a>
    <div class="accordion-content" data-tab-content>
      <slot name="content"></slot>
    </div>
  </li>
</template>

<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open"],
};
</script>

<style lang="scss">
.faq.open .accordion-title::before {
  content: '-';
}
.faq .accordion-title {
  padding: 0.75rem 2.5rem 0.75rem 1rem;
}
.faq .accordion-content {
  transition: all 0.3s ease-in;
  display: block;
  height: 0;
  opacity: 0;
  padding: 0 !important;
  visibility: hidden;
  
}
.faq.open .accordion-content {
  display: block;
  height: 100%;
  max-height: 1000px;
  opacity: 1;
  padding: 0 1rem 1rem !important;
  visibility: visible;
}
</style>