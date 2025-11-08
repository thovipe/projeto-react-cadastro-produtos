export async function GetData ( url ) {
    try {
    const rp = await fetch(url, {
      method: 'GET'
    }).then(
      response => {
        console.log(response)
        return response.json()
      }
    )
    return rp
    } catch (err) {
      console.log('Erro:',err)
    }
}

export async function PostData(url, bodyObj) {

    try {
      const rp = await fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(bodyObj)
      }).then(
        response => {
          console.log(response)
          return response.json()
        }
      )
      return rp
    } catch (err) {
      console.log('Erro durante Post: ', err)
    }
}

export async function PutData(url, id, bodyObj) {
  
  try {
    const rp = await fetch(`${url}/${id}` , {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(bodyObj)
    }).then(
      response => {
        console.log(response)
        return response.json();
      }
    )
    return rp
   } catch (err) {
      console.log('Erro ao atualizar: ', err)
   }
}

export async function DeleteData(url, id) {

  try {
    const rp = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'}
    }).then(
      response => {
        console.log(response)
        return response.status
      }
    )
    return rp
  } catch (err) {
    console.log('Erro ao deletar: ', err)
  }
}