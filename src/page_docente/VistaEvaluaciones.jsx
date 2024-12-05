const VistaEvaluaciones = () => {
  return (
    <section className="w-full px-10 py-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-primary-800">
          Evaluaciones
        </h2>

        <button className="space-x-2 rounded-md bg-primary-500 p-2 text-white transition-colors hover:bg-primary-500/90">
          <i className="fa-solid fa-plus"></i>
          <span>Evaluación</span>
        </button>
      </div>
    </section>
  );
};

export default VistaEvaluaciones;
