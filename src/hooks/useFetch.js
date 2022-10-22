import access_token from "./accessToken"

export const getCars = async (page, category) => {
  const res = await fetch(
    `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car?category=${category}&page=${page}&pageSize=6`,
    {
      headers: {
        access_token,
      },
    }
  )
  return res.json()
}
