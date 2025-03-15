export async function fetchContent(file) {
try {
  console.log("This is fetch content functions")
  const response = await fetch(`/content/${file}`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
  return response.json();
} catch (error) {
  console.log("Error", error)
}
  }
  