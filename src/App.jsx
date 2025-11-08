import { useEffect, useState } from 'react'
import './App.css'
import { DeleteData, GetData, PostData, PutData } from './components/controller/Controller'
import Form from './components/form/Form'
import Input from './components/Input/Input'
import Box from './components/box/Box'
import Menu from './Menu'

function App() {
  const [produtos, setProdutos] = useState([])
  const [postResponse, setPostResponse] = useState(({
                                                      "id": "",
                                                      "name": "",
                                                      "data": {
                                                         "year": "",
                                                         "price": "",
                                                         "CPU model": "",
                                                         "Hard disk size": ""
                                                      },
                                                      "createdAt": "",
                                                      "updatedAt": ""
                                                    }))

  const [product, setProduct] = useState(
    {
      "id": "",
      "name": "",
      "data": {
         "year": "",
         "price": "",
         "CPU model": "",
         "Hard disk size": ""
    }
  }
  )
  const [putResponse, setPutResponse] = useState(
    {
                                                      "id": "",
                                                      "name": "",
                                                      "data": {
                                                         "year": "",
                                                         "price": "",
                                                         "CPU model": "",
                                                         "Hard disk size": ""
                                                      },
                                                      "createdAt": "",
                                                      "updatedAt": ""
                                                    })

  useEffect(
    () => {
      const cleaner = (event) => {
          event.preventDefault()
      }
    }
  ,[])

  const BASE = 'https://api.restful-api.dev/objects'
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(true);

  const bodyObj = (
    {
      "name": "Apple MacBook Pro 16",
      "data": {
         "year": 2019,
         "price": 1849.99,
         "CPU model": "Intel Core i9",
         "Hard disk size": "1 TB"
    }
  }
  )

  const handleNameChange = (event) => {
    const {name, value} = event.target;
    setProduct(
      ((prvValue) => ({...prvValue, [name]: value})
    ))
  }

  const handleDataChange = (event) => {
    const {name, value} = event.target;
    let finalValue = value;
    if (name === 'year' || name === 'price') {
        
        finalValue = value === '' ? 0 : Number(value);
    } 
    if (Number.isNaN(finalValue)) {
      finalValue = 0;
    }
    setProduct(
      ((prvValue) => ({...prvValue,
        data: {
          ...prvValue.data,
          [name]: finalValue
        }
      }
     )
    ))
  }
  
  const handleSubmitPost = async (event) => {
  event.preventDefault();
  try {
    const returnedValue = await PostData(BASE, product).then(setIsLoading(false))
    setPostResponse(returnedValue)
    setProdutos((prvProducts) => [returnedValue, ...prvProducts])
   } catch (err) {
     throw new Error("Erro ao criar produto")
   }
   setProduct(
        {
      "id": "",
      "name": "",
      "data": {
         "year": "",
         "price": "",
         "CPU model": "",
         "Hard disk size": ""
    }
  }
 )
    console.table(produtos)
  };


  const handleSubmitGet = async (event) => {
   event.preventDefault();
   let finalUrl = BASE
   if(product.id != "") {
    finalUrl = `${BASE}/${product.id}`
    console.table(produtos)
    setResponse(await GetData(finalUrl))
   } 
   setResponse(await GetData(finalUrl))
  };

  const handleSubmitPut = async (event) => {
   const {name, value} = event.target;
   event.preventDefault();
   try {
    const returnedValue = await PutData(BASE,product.id, product)
    setPutResponse(returnedValue)

    setProdutos((prevProducts) => 
      prevProducts.map(p => 
        p.id === product.id ? returnedValue : p
      )
    );

    console.log(product.id)
    console.log("Put Response: ",putResponse)

    console.table(produtos)

   } catch (err) {
    console.log("Erro ao atualizar: ", err)
   }
  };

  const handleSubmitDelete = async (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    try {
      const returnedValue = await DeleteData(BASE, product.id)    
        setProdutos((prvProducts) => 
        prvProducts.filter(p => p.id != product.id)
        )
      console.log("Old array: ",produtos)
    } catch (err) {
      console.log("Erro ao deletar: ", err)
    }
  }


  useEffect(() => {
  localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);



  return (
    <>
      <div className="forms">
        <Form onSubmit={ handleSubmitPost} formName={"Cadastrar Novo Produto"}>
          <Input value={product.name} name="name" handleChange={handleNameChange} type="text">Nome: </Input>
          <Input value={product.data.year} name="year" handleChange={handleDataChange} type="text">Ano: </Input>
          <Input value={product.data.price} name="price" handleChange={handleDataChange} type="text" >Preço: </Input>
          <Input value={product.data["CPU model"]} name="CPU model" handleChange={handleDataChange} type="text" >Modelo de CPU: </Input>
          <Input value={product.data["Hard disk size"]} name="Hard disk size" handleChange={handleDataChange} type="text" >Tamanho do Disco: </Input>
          <Input type="submit" value="Criar Produto" id='button-submit-form'/>
        </Form>

        <Form onSubmit={ handleSubmitGet } formName={"Consultar Produto"}>
          <Input value={product.id} name="id" handleChange={handleNameChange} type="text">Id do Produto: </Input>
          <Input type="submit" value="Consultar Produto" id='button-query-form'/>
        </Form>

        <Form onSubmit={ handleSubmitPut } formName={"Alterar Produto"}>
          <Input value={product.id} name="id" handleChange={handleNameChange} type="text" required={true}>Id do Produto:</Input>
          <Input value={product.name} name="name" handleChange={handleNameChange} type="text">Nome: </Input>
          <Input value={product.data.year} name="year" handleChange={handleDataChange} type="text">Ano: </Input>
          <Input value={product.data.price} name="price" handleChange={handleDataChange} type="text" >Preço: </Input>
          <Input value={product.data["CPU model"]} name="CPU model" handleChange={handleDataChange} type="text" >Modelo de CPU: </Input>
          <Input value={product.data["Hard disk size"]} name="Hard disk size" handleChange={handleDataChange} type="text" >Tamanho do Disco: </Input>
          <Input type="submit" value="Alterar Produto" id='button-change-form' />
        </Form>

        <Form onSubmit={ handleSubmitDelete } formName={"Deletar Produto"}>
          <Input value={product.id} name="id" handleChange={handleNameChange} type="text" required={true}>Id do Produto:</Input>
          <Input type="submit" value="Deletar Produto" id='button-delete-form'/>
        </Form>
      </div>
      <div>
      <Box produtos={produtos} />
      </div>
    </>
  )
}

export default App
