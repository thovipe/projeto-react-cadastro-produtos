import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Input from "./components/Input/Input";
import Box from "./components/box/Box";

export default function Filter() {
    
    const [produtos, setProdutos] = useState([])
    
    const BASE = 'https://api.restful-api.dev/objects'
    const [searchTerm, setSearchTerm] = useState('');

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

  const handleNameChange = (event) => {
    const {name, value} = event.target;
    setProduct(
      ((prvValue) => ({...prvValue, [name]: value})
    ))
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
  const saved = localStorage.getItem('produtos');
  if (saved) {
    setProdutos(JSON.parse(saved));
  }
}, []);


 const filteredProducts = produtos.filter(product =>
    product.name.includes(searchTerm)
  );

  return (
    <>
        <Form onSubmit={ handleSubmitGet } formName={"Consultar Produto"}>
          <Input value={product.id} name="id" handleChange={handleNameChange} type="text">Id do Produto: </Input>
          <Input type="submit" value="Consultar Produto" id='button-query-form'/>
        </Form>
        <Form formName={"Filtrar por Nome"}>
          <Input value={product.name} name="name" handleChange={handleNameChange} type="text">Nome: </Input>
        </Form>
        <div>
        <h4>Filtro</h4>
            <Box produtos={filteredProducts} />
        </div>
        <h4>Produtos</h4>
        <div>
          <Box produtos={produtos} />
        </div>
    </>
    )
}
