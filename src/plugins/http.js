export const get = async (url) => {
  const res = await fetch("https://www.deckofcardsapi.com/api/" + url)
  return await res.json()
}

export const post = async (url, data) => {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data),
    credentials: 'include'
  }

  const res = await fetch("https://www.deckofcardsapi.com/api/deck/" + url, options)
  return await res.json()
}


// https://www.deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2