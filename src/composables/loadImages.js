export const loadImages = async (url, date, apiKey) => {
  try {
    const res = await fetch(`${url}${date}&api_key=${apiKey}`)
    const data = await res.json()
    return Object.values(data)[0]
  } catch (err) {
    console.log(err);
  }
}
