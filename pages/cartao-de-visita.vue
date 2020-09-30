<template>
  <main>
    <Header />
    <div class style="padding: 300px 0;">
      <ul class="accordion" data-accordion>
        <div v-for="accordion in accordions" :key="accordion.title">
          <AccordionTabs>
            <template v-slot:title>{{ accordion.title }}</template>

            <template v-slot:content>
              <div>{{ accordion.text }}</div>
            </template>
          </AccordionTabs>
        </div>
      </ul>
      <ul class="faqs" data-accordion>
        <FAQ
          v-for="(faq, i) in faqs"
          :faq="faq"
          :index="i"
          :key="i"
          :open="faq.open"
          @toggleOpen="toggleOpen"
        >
          <template v-slot:title>{{ faq.title }}</template>

          <template v-slot:content>
            <div>{{ faq.text }}</div>
          </template>
        </FAQ>
      </ul>
    </div>
    <Footer />
  </main>
</template>

<script>
import FAQ from "@/components/FAQ";

export default {
  components: {
    FAQ,
  },
  data() {
    return {
      accordions: [
        {
          title: "Vue",
          text: "All about Vue",
        },
        {
          title: "Nuxt",
          text: "All about Nuxt",
        },
        {
          title: "webpack",
          text: "All about webpack",
        },
      ],
      faqs: [
        {
          title: "Who is the best Superhero?",
          text: "I'm not sure but we love him 3000",
          open: false,
        },
        {
          title: "What is Goku's form called with White Hair?",
          text: "Mastered Ultra Instinct",
          open: false,
        },
        {
          title: "Have you liked & subscried yet?",
          text: "YES",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      });
    },
  },
};
</script>

<style lang="scss">
.faq {
  display: block;
  width: 100%;
  max-width: 768px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}
.faq .question {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  transition: all 0.4s linear;
}
.faq .question::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%) rotate(0deg);
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .text {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .text {
  opacity: 1;
  max-height: 1000px;
}
</style>
