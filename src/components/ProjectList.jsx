import React from "react";

function ProjectList({
  projects,
  eliminarProyecto
}) {

  if (projects.length === 0) {

    return (

      <div className="sin-proyectos">

        <h2>No hay proyectos</h2>

        <p>
          Agrega tu primer proyecto usando el botón
          "Agregar Proyecto".
        </p>

      </div>

    );

  }

  return (

    <>

      <div className="lista-proyectos">

        <h2>Lista de Proyectos</h2>

        {projects.map((project) => (

          <React.Fragment key={project.id}>

            <div className="proyecto">

              <h3>
                {project.nombre}
              </h3>

              <p>
                <strong>
                  Descripción:
                </strong>
                {" "}
                {project.descripcion}
              </p>

              <p>
  <strong>Referencia Externa:</strong>
  {" "}
  Proyecto validado mediante API externa
</p>

              <button
                onClick={() =>
                  eliminarProyecto(
                    project.id
                  )
                }
              >
                Eliminar Proyecto
              </button>

            </div>

          </React.Fragment>

        ))}

      </div>

    </>

  );

}

export default ProjectList;