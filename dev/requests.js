async function getTypes() {
  const response = await fetch('http://rygorh.dev.monterosa.co.uk/todo/types.php');
  return response.json();
}

async function getTodos() {
  const response = await fetch('http://rygorh.dev.monterosa.co.uk/todo/items.php');
  return response.json();
}

export { getTypes, getTodos };
