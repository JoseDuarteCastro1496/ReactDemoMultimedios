export const fetchUser = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Error al obtener los usuarios:", error);
    return [];
  }
};
