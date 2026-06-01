import { Helmet } from 'react-helmet-async'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeSection from './components/MarqueeSection'
import Procedimentos from './components/Procedimentos'
import Authority from './components/Authority'
import SobreDra from './components/SobreDra'
import Depoimentos from './components/Depoimentos'
import Oferta from './components/Oferta'
import FAQ from './components/FAQ'
import Localizacao from './components/Localizacao'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

/* Schema JSON-LD para SEO — Dentist + FAQPage */
const schemaOdontoarte = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Odontoarte Clínica Odontológica',
  image: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Afonso Pena, 49',
    addressLocality: 'Sapiranga',
    addressRegion: 'RS',
    postalCode: '93800-246',
    addressCountry: 'BR',
  },
  telephone: '+55-51-99926-6392',
  openingHours: 'Mo-Fr 08:00-19:00, Sa 08:00-13:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '28',
  },
  url: 'https://odontoarte.com.br',
  sameAs: ['https://www.instagram.com/odontoarte.rs/'],
}

const schemaFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quero fazer implante dentário, como funciona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O implante dentário é um procedimento que substitui a raiz do dente por um pino de titânio. Na Odontoarte, realizamos avaliação completa, planejamento digital e acompanhamento em todas as etapas para garantir o melhor resultado.',
      },
    },
    {
      '@type': 'Question',
      name: 'O clareamento dental é seguro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim! O clareamento a laser realizado por profissionais é seguro e eficaz. Na Odontoarte usamos produtos de alta qualidade e monitoramos todo o processo para proteger o esmalte dos seus dentes.',
      },
    },
    {
      '@type': 'Question',
      name: 'A Odontoarte atende crianças também?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim, atendemos pacientes de todas as idades! Nossa equipe tem preparo especial para atender crianças com carinho e criar uma experiência positiva desde o primeiro contato com o dentista.',
      },
    },
    {
      '@type': 'Question',
      name: 'Com que frequência devo fazer limpeza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Recomendamos a limpeza profissional a cada 6 meses. Ela remove o tártaro e a placa bacteriana que a escovação diária não consegue eliminar, prevenindo cáries e doenças gengivais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como agendar uma consulta de avaliação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'É simples! Basta clicar no botão do WhatsApp e mandar uma mensagem para (51) 99926-6392. Nossa equipe responde rapidamente e agenda o melhor horário para você.',
      },
    },
  ],
}

function App() {
  return (
    <>
      <Helmet>
        <title>Odontoarte | Clínica Odontológica em Sapiranga – RS</title>
        <meta
          name="description"
          content="Clínica odontológica em Sapiranga com 5 estrelas no Google. Implantes, clareamento, ortodontia e muito mais. Agende sua consulta com a Dra. Kelen."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaOdontoarte)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaFAQ)}
        </script>
      </Helmet>

      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <MarqueeSection />
        <Procedimentos />
        <Authority />
        <SobreDra />
        <Depoimentos />
        <Oferta />
        <FAQ />
        <Localizacao />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}

export default App
