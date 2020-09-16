<template>
  <div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="text">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQ",
  props: ["faq", "index", "open"],
};
</script>