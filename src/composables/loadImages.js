export const loadImages = async (url, apiKey) => {
  try {
    const res = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2023-5-23&api_key=HLYvq2MbOyfYTvb7gMcHEZgxppd5BbHbo3cxdFGJ`
    )
    console.log(123);
    return await res.json()
  } catch (err) {
    return err
  }
}

