import { useState, useEffect } from "react";

import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "./firebase/config";

import "./App.css";

function App() {

  const [projects, setProjects] =
    useState([]);

  const [showForm, setShowForm] =
    useState(false);

  const cargarProyectos = async () => {

    try {

      const querySnapshot =
        await getDocs(
          collection(db, "projects")
        );

      const lista =
        querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data()
          })
        );

      setProjects(lista);

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    cargarProyectos();

  }, []);

  const eliminarProyecto =
    async (id) => {

      try {

        await deleteDoc(
          doc(db, "projects", id)
        );

        await cargarProyectos();

        alert(
          "Proyecto eliminado correctamente"
        );

      } catch (error) {

        console.error(error);

      }

    };

  return (

    <div>

      <h1>
        Gestión de Proyectos
      </h1>

      <button
        onClick={() =>
          setShowForm(!showForm)
        }
      >
        {showForm
          ? "Ocultar Formulario"
          : "Agregar Proyecto"}
      </button>

      <hr />

      {showForm && (

        <ProjectForm
          cargarProyectos={
            cargarProyectos
          }
        />

      )}

      <ProjectList
        projects={projects}
        eliminarProyecto={
          eliminarProyecto
        }
      />

    </div>

  );

}

export default App;