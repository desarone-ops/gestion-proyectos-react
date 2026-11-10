import { useState, useRef } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../firebase/config";

function ProjectForm({ cargarProyectos }) {

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator()
  );

  const guardarProyecto = async (e) => {

    e.preventDefault();

    if (!validator.current.allValid()) {

      validator.current.showMessages();

      forceUpdate(1);

      return;
    }

    try {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      await addDoc(
        collection(db, "projects"),
        {
          nombre,
          descripcion,
          apiData: response.data
        }
      );

      setNombre("");
      setDescripcion("");

      await cargarProyectos();

      alert("Proyecto guardado correctamente");

    } catch (error) {

      console.error(error);

      alert("Error al guardar");

    }

  };

  return (
    <form onSubmit={guardarProyecto}>

      <h2>Nuevo Proyecto</h2>

      <input
        type="text"
        placeholder="Nombre del Proyecto"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
      />

      {validator.current.message(
        "nombre",
        nombre,
        "required"
      )}

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(e.target.value)
        }
      />

      {validator.current.message(
        "descripcion",
        descripcion,
        "required|min:10"
      )}

      <button type="submit">
        Guardar Proyecto
      </button>

    </form>
  );

}

export default ProjectForm;