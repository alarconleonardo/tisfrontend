import { useState } from "react";
import "./PlanillaEvaluacion.css";
import ModalPlanillaEvaluacion from "./ModalPlanillaEvaluacion";

const PlanillaEvaluacion = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <section className="w-full px-10 py-6">
      <ModalPlanillaEvaluacion
        showModal={showModal}
        closeModal={closeModal}
      ></ModalPlanillaEvaluacion>

      <h2 className="text-2xl font-semibold text-primary-800">
        Planilla de evaluación
      </h2>
      <table className="mt-5 rounded-md">
        <thead className="text-primary-800">
          <tr>
            <th>*NombreGrupoEmpresa*</th>

            {/* COLUMNAS DE FECHAS ENTREGABLES */}

            <th className="fecha-entregable">
              <tr>12/09</tr>
              <tr>Lunes</tr>
            </th>

            <th className="fecha-entregable">
              <tr>19/09</tr>
              <tr>Lunes</tr>
            </th>
            

            <th className="fecha-entregable">
              <button
                type="button"
                onClick={openModal}
                className="flex items-center justify-center mx-auto transition-colors border-2 rounded size-6 border-primary-200 text-primary-200 hover:border-primary-500 hover:text-primary-500"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </th>

            {/* COLUMNAS DE CONTROL DE ASISTENCIA (FIJO) */}

            <th className="w-24 asistencia">
              <tr className="border-none">Nota sumativa</tr>
            </th>

            <th className="w-24 asistencia">
              <tr className="border-none">Tarde</tr>
            </th>

            <th className="w-24 asistencia">
              <tr className="border-none">Ausencia justificada</tr>
            </th>

            <th className="w-24 asistencia">
              <tr className="border-none">Ausencia injustificada</tr>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Nombre estudiante 1</td>
            {/* COLUMNAS DE NOTAS */}
            <td>16</td>
            <td>20</td>
            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>36</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Nombre estudiante 2</td>
            {/* COLUMNAS DE NOTAS */}
            <td>18</td>
            <td></td>
          
            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>18</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Nombre estudiante 3</td>
            {/* COLUMNAS DE NOTAS */}
            <td></td>
            <td>13</td>

            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>13</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Nombre estudiante 4</td>
            {/* COLUMNAS DE NOTAS */}
            <td>14</td>
            <td></td>

            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>14</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Nombre estudiante 5</td>
            {/* COLUMNAS DE NOTAS */}
            <td></td>
            <td>6</td>

            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>6</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>

          <tr>
            <td>Nombre estudiante 6</td>
            {/* COLUMNAS DE NOTAS */}
            <td></td>
            <td>20</td>

            {/* COLUMNA VACIA PARA AGREGAR ENTREGABLE (FIJO) */}
            <td></td>

            {/* COLUMNA DE NOTA SUMATIVA */}
            <td>25</td>

            {/* COLUMNAS DE ASISTENCIA */}
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>

        <tfoot className="text-primary-800">
          <tr className="font-semibold">
            <td></td>

            {/* AGREGAR AQUI LOS NOMBRES DE LOS ENTREGABLES */}
            <td colSpan={3}>Propuesta</td>
            {/* ESPACIO EN BLANCO FIJO PARA LAS COLUMNAS DE ASISTENCIA Y NOTA SUMATIVA*/}
            <td colSpan={5}></td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default PlanillaEvaluacion;
