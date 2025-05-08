// src/components/Mensagem.tsx
import { motion } from 'framer-motion';

export default function Mensagem() {
  return (
    <section className="bg-pink-50 text-gray-800 px-4 py-10 font-poppins">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">
          Para a mãe que Deus escolheu
        </h2>
        <div className="text-lg leading-relaxed space-y-5 bg-white p-6 rounded-xl shadow-md">
          <p>
            Em meio às fraldas, lágrimas, risadas e noites sem dormir, há um chamado divino sendo cumprido. Você não é “apenas” mãe — você é instrumento de Deus na vida de um pequeno ser eterno.
          </p>
          <p>
            O Senhor te vê quando ninguém mais vê. Ele te escuta quando seu coração fala em silêncio. Ele te fortalece quando seus braços parecem fracos. O que você faz em secreto, no silêncio do lar, é semente lançada no solo eterno do Reino.
          </p>
          <p>
            Você está escrevendo, com gestos simples e amorosos, capítulos inteiros de uma história que glorificará a Deus. Criar um filho é formar, todos os dias, um coração para amar, servir e caminhar com Cristo.
          </p>
          <p className="italic text-pink-600 font-semibold">
            Você é pastora do coração do seu filho.
          </p>
          <p>
            E mesmo quando se sente invisível ou cansada, lembre-se: o céu inteiro te honra. Deus te confiou essa alma preciosa porque sabia que ninguém poderia cuidar dela como você.
          </p>
          <blockquote className="text-pink-800 font-medium bg-pink-100 rounded-md p-4 border-l-4 border-pink-500">
            “Como alguém a quem sua mãe consola, assim eu os consolarei…”<br />
            — Isaías 66:13
          </blockquote>
          <p>
            Seja firme, doce e corajosa. Você é amada, escolhida e sustentada pelo Deus que te vê inteira, mesmo quando o mundo só vê partes.
          </p>
          <p className="font-bold text-pink-700">Querida Jessica,</p>
          <p>
            Nos dias em que o cansaço parece maior que a força, lembre-se: você está cumprindo um dos propósitos mais sagrados dados por Deus — o de cuidar, amar e formar um coração pequeno à imagem dEle.
          </p>
          <p>
            Seu papel é essencial. Aos olhos do Senhor, você é uma guerreira silenciosa, uma guardiã do lar, uma fonte de amor que reflete o cuidado do Pai Celestial.
          </p>
          <p>
            Mesmo quando ninguém vê o quanto você dá de si, Deus vê. Ele te fortalece, te guia e te sustenta. Seu filho está crescendo cercado por uma graça que flui através da sua vida.
          </p>
          <blockquote className="text-pink-800 font-medium bg-pink-100 rounded-md p-4 border-l-4 border-pink-500">
            “Ela está vestida de força e dignidade; sorri sem medo do futuro.”<br />
            — Provérbios 31:25
          </blockquote>
          <p>
            Você é profundamente amada por Deus e inestimável para sua família. Continue firme — o céu sorri ao ver o que você constrói todos os dias com tanto amor.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
