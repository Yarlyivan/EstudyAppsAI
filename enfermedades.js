document.addEventListener("DOMContentLoaded", function () {
    // Obtener la referencia al elemento donde se mostrará la lista de enfermedades
    const enfermedadesList = document.getElementById("enfermedades-list");

    // Realizar una solicitud AJAX para obtener el archivo JSON
    fetch("enfermedades.json")
        .then((response) => response.json())
        .then((data) => {
            // Recorrer los datos y crear un elemento HTML para cada enfermedad
            data.forEach((enfermedad) => {
                const enfermedadDiv = document.createElement("div");
                enfermedadDiv.classList.add("enfermedad");

                const nombreH2 = document.createElement("h2");
                nombreH2.textContent = "nombre";

                const sintomasH3 = document.createElement("h3");
                sintomasH3.textContent = "sintomas:";

                const sintomasUl = document.createElement("ul");
                const sintomasLi = document.createElement("li");
                sintomasLi.textContent = enfermedad.sintomas;
                sintomasUl.appendChild(sintomasLi);

                const tratamientoH3 = document.createElement("h3");
                tratamientoH3.textContent = "tratamiento:";

                const tratamientoUl = document.createElement("ul");
                const tratamientoLi = document.createElement("li");
                tratamientoLi.textContent = enfermedad.tratamiento;
                tratamientoUl.appendChild(tratamientoLi);

                const descripcionH3 = document.createElement("h3");
                descripcionH3.textContent = "descripcion:";

                const descripcionP = document.createElement("p");
                descripcionP.textContent = enfermedad.descripcion;

                enfermedadDiv.appendChild(nombreH2);
                enfermedadDiv.appendChild(sintomasH3);
                enfermedadDiv.appendChild(sintomasUl);
                enfermedadDiv.appendChild(tratamientoH3);
                enfermedadDiv.appendChild(tratamientoUl);
                enfermedadDiv.appendChild(descripcionH3);
                enfermedadDiv.appendChild(descripcionP);

                enfermedadesList.appendChild(enfermedadDiv);
            });
        })
        .catch((error) => {
            console.error("Error al cargar el archivo JSON:", error);
        });
});
