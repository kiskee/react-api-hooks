const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'


//recordar nunca pasar el set como prop
//si ves los 3 puntos en una funcion es pq se puede pasar async con control + punto
export  const getRandomFact=async () =>{
 const resp = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await resp.json()
    const { fact } = data
    return fact
}