// src/api/citasApi.js
export const reservarCita = async (token, fecha, hora, idManicurista) => {
  try {
    const response = await fetch("http://localhost:4000/api/citas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fecha,
        hora,
        id_manicurista: idManicurista,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al crear la cita");
    }

    return data; // Devuelve la respuesta exitosa para manejarla en el formulario
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error; // Re-lanza el error para manejarlo en el formulario
  }
};
