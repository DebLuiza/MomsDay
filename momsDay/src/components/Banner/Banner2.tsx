// src/components/MensagemRosangela.tsx
import { motion } from 'framer-motion';

export default function MensagemRosangela() {
  return (
    <section className="bg-pink-50 text-gray-800 px-4 py-10 font-poppins">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-pink-700">
          Para a mulher que é raiz de uma geração, Rosângela
        </h2>
        <div className="text-lg leading-relaxed space-y-5 bg-white p-6 rounded-xl shadow-md">
          <p>
            Você já viveu muitos ciclos — chorou nas partidas, sorriu nos reencontros, sustentou sua casa com fé, coragem e orações. E mesmo agora, com os filhos crescendo e ganhando o mundo, você continua sendo o alicerce silencioso que os mantém firmes, mesmo à distância.
          </p>
          <p>
            Seu coração aprendeu a amar em todas as estações — quando os filhos estavam no seu colo e agora, quando um está em outra terra. Mas saiba: nenhum oceano separa o amor de uma mãe, e nenhuma distância impede que as orações toquem os céus e alcancem os que você ama.
          </p>
          <p>
            Você é como uma árvore plantada junto a águas — suas raízes profundas sustentam muitos. Seus frutos abençoam filhos, neto, nora…Sua sabedoria é legado, sua paciência é ensino, sua fé é herança viva.
          </p>
          <p className="italic text-pink-600 font-semibold">
            Você não passou — você permanece.
          </p>
          <p>
            Nos conselhos dados em silêncio, no abraço que acalma, na presença que, mesmo quieta, transforma tudo ao redor.
          </p>
          <blockquote className="text-pink-800 font-medium bg-pink-100 rounded-md p-4 border-l-4 border-pink-500">
            “Honra à mulher que teme ao Senhor; seus filhos se levantam e a chamam bem-aventurada.”<br />
            — Provérbios 31:28-30
          </blockquote>
          <p>
            Deus se alegra com sua história. E mesmo agora, Ele continua escrevendo capítulos de bênção através da sua vida. Seu valor é eterno — para Deus, para sua família, para todos que foram alcançados por seu amor.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
