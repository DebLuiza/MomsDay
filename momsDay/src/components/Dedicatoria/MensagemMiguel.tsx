const MensagemMiguel = () => {
  return (
    <div className="flex items-center justify-center bg-pink-200 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-xl text-gray-800 border border-rose-300 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600 text-center mb-6">
          👶 Mensagem do Miguel 👣
        </h2>

        <p className="text-lg mb-6 leading-relaxed font-medium text-rose-800">
          Bobó, Tetéu ama papapapá. Tetéu aaaaaahhh aaahhh. Ó ó ó ó achou.
          Nham nham nham huuumm. 🤗 aahhh bobó.
        </p>

        <div className="bg-rose-50 border-l-4 border-pink-400 p-4 rounded-xl shadow-sm">
          <p className="italic text-rose-700 font-medium">
            <span className="font-bold">Tradução:</span><br />
            Vovó, Miguel ama passear com a senhora. Miguel faz carinho na vovó.
            Miguel achou a vovó. A comida da vovó eu já quero experimentar.
            Abraço vovó!
          </p>
        </div>

        <p className="text-right mt-6 text-pink-600 font-semibold">
          — Miguelzinho 💗
        </p>
      </div>
    </div>
  );
};

export default MensagemMiguel;
