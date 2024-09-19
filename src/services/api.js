// Assuming 'data' is passed as an argument to a function
export function processToken(data) {
  // Get the JWT token
  const { session } = data;
  const token = session?.access_token;

  if (token) {
    // Send the token to the backend
    sendTokenToBackend(token);
  }
}

export async function sendTokenToBackend(token) {
  console.log("Sending token to backend:", token);
  try {
    const response = await fetch("http://localhost:4000/api/validate-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({}),
    });

    const result = await response.json();
    console.log("Backend validation response:", result);
  } catch (error) {
    console.error("Error sending token to backend:", error);
  }
}
