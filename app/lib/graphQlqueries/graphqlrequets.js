
const graphqlrequets = async (query) => {
    
  const url = `http://localhost/wpicms/graphql`;
  const headers = {
    "Content-Type": "application/json",
  };
  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(
      query
      ),
  });
  const resjson = await res.json();
  return resjson;
}

export default graphqlrequets
