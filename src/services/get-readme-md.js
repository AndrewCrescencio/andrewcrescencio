export const getReadmeMd = () => {
  const data = fetch(process.env.GITHUB_URL)
    .then((res) => res.json())
    .then((data) => {
      const content = Buffer.from(data.content, "base64").toString();
      return content;
    })
    .catch((error) => console.log(error));
  return data;
};
