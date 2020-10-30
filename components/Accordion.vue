<template>
  <ul class="accordion faqs" data-accordion>
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
        <p>{{ faq.text }}</p>
      </template>
    </FAQ>
  </ul>
</template>

<script>
import FAQ from "@/components/FAQ";

export default {
  components: {
    FAQ,
  },
  data() {
    return {      
      faqs: [
        {
          title: 'Como funciona o acompanhamento da criação da minha marca?',
          text: 'Aqui na CriaçãodeMarcas.com você acompanha o andamento de tudo em tempo real no Ambiente do Cliente e pode interagir com nossa equipe. Para acessar, basta clicar no canto superior direito do nosso site no botão "Ambiente do cliente" ou também pode baixar nosso Aplicativo no Google Play ou na App Store. Cada etapa importante no processo criativo, iremos lhe enviar um e-mail para acessar o Ambiente do cliente e visualizar o serviço prestado por nossos especialistas. É muito simples e interativo.',
          open: false,
        },
        {
          title: 'Qual o prazo de entrega para apresentação da minha logo?',
          text: 'Para que possamos lhe entregar um serviço profissional pedimos o prazo de 72 horas úteis. Este é um período que consideramos apropriado para prestar um serviço de qualidade. Você receberá a arte da criação da sua marca aplicada em diversos materiais para que você possa apreciar melhor o serviço de criação. Caso deseje alguma alteração ou uma nova versão, pedimos o prazo de até 72 horas úteis para lhe entregar o que foi solicitado. Após a marca aprovada, iremos preparar o fechamento dos arquivos para lhe entregar sua logo em diversos formatos, este processo de preparação leva até 48 horas úteis.',
          open: false,
        },
        {
          title: 'Se eu não gostar, posso pedir ajustes ou novas opções de marcas?',
          text: 'Sim, você pode pedir quantos ajustes desejar ou novas opções de marcas até ficar 100% satisfeito!',
          open: false,
        },
        {
          title: 'Como a CriaçãodeMarcas.com apresenta minha marca?',
          text: 'Para melhor experiência de nossos clientes, aplicamos sua marca criada por nossa equipe de especialistas  em diversos materiais para que você possa visualizar com clareza e apreciar sua marca. Desta forma fica mais visual e simples de analisar.',
          open: false,
        },
        {
          title: 'Quais formatos vou receber? Os arquivos são editáveis e em alta resolução?',
          text: 'Após aprovação, vamos lhe entregar sua marca em alta resolução para impressão, pronta para ser usada nos meios digitais e no formato vetorial para edição. Você receberá sua logo completa nos formatos exigidos pelas gráficas e agências: JPG, PNG (Com fundo transparente), CDR (Corel), AI (Ilustrator), PDF e EPS.',
          open: false,
        },
        {
          title: 'Os direitos dos arquivos são meus? Posso divulgar e registrar? ',
          text: 'Sim, todos os direitos sobre a marca são do cliente. Assim que nossa equipe fechar os arquivos, sua marca estará pronta para ser registrada.',
          open: false,
        },
        {
          title: 'O serviço é garantido? Qual é o meu risco?',
          text: 'Trabalhamos para conquistar 100% de sua satisfação. Caso não goste do nosso trabalho, você poderá solicitar quantas versões desejar até que fique satisfeito, ou seja, você não tem risco algum.',
          open: false,
        },
        {
          title: 'Quantas logomarcas vou receber?',
          text: 'Nossa proposta de trabalho é lhe entregar um serviço profissional elaborado por um especialista em criação de marcas, por isso desenvolvemos um trabalho específico e concentrado em uma opção para melhor atingir seu público alvo. Caso você deseje alterações ou novas versões, sem problemas! Estamos aqui para isso.',
          open: false,
        },
        {
          title: 'Vou receber um manual de marca?',
          text: 'Sim, após aprovação da logo vamos produzir uma manual de marca simplificado de cuidados com sua marca em PDF.',
          open: false,
        },
        {
          title: 'Quero reformular minha logo, vocês fazem?',
          text: 'Sim, nossa equipe de especialistas vai compreender as necessidades do seu negócio para elaborar uma marca forte e impactante para melhor atingir seu público alvo.',
          open: false,
        },
        {
          title: 'A equipe de especialista da CriaçãodeMarcas.com avalia minha marca?',
          text: 'Sim, com certeza! Nossa equipe pode avaliar sua marca e lhe dar uma opinião se a marca está adequada ao seu público ou se precisa ser reformulada. Entre em contato pelo WhatsApp, vai ser um prazer poder lhe atender.',
          open: false,
        },
        {
          title: 'Tenho uma ideia de como quero minha logo, posso encaminhar?',
          text: 'Claro! É muito bom interagir com nossos clientes e conhecer suas ideias. Isso ajuda muito no processo criativo.',
          open: false,
        },
        {
          title: 'Vocês fazem somente logomarcas?',
          text: 'Nós também criamos Cartões de visita, Criação de nomes para empresas, Materiais de Papelaria (Pasta, Envelope, Papel timbrado e Crachá), ',
          open: false,
        },
        {
          title: 'Como contratar o serviço de criação de marca para minha empresa?',
          text: 'É muito simples. Nesta página que você está, basta clicar no botão solicitar criação de marca, efetuar o pagamento e preencha um breve briefing para que possamos conhecer melhor sobre seu negócio. Pronto! A partir deste momento é com nossos especialistas.',
          open: false,
        },
        {
          title: 'Qual a importância da sua empresa ou produto ter uma marca profissional?',
          text: 'Uma marca forte e impactante aumenta muito suas chances de vender mais seus produtos ou serviços. Além de produzir um estímulo de compra no seu público alvo, revela ao consumidor profissionalismo e isso possibilita aumentar sua margem de lucro. Outro grande benefício é que suas campanhas de marketing passam a converter mais resultados para seu negócio.',
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
:last-child:not(.is-active) > .accordion-title {
  border-bottom: 0px solid #f1eedd;
}

@media screen and (min-width: 768px) {
  .accordion {
    max-height: 330px;
    overflow-y: auto;
    margin: 0;
    &::-webkit-scrollbar {
      width: 5px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      background: #f7f7f7; 
    }
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #cccccc; 
    }
    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }   
  }
}

</style>