export const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json(); // Parsea el cuerpo solo una vez
    console.log(data); // Aquí puedes ver si realmente trae los datos
    return data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};
