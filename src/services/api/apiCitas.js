export const reservarCita = async (token, fecha, hora, idManicurista) => {
  try {
    const response = await fetch(
      "https://backend-project.up.railway.app/api/crear-cita",
      {
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
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al crear la cita");
    }

    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error;
  }
};
