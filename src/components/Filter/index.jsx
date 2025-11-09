import { useEffect, useState } from "react";
import Form from "../form";
import Input from "../Input";
import Box from "../box";
import { useProdutos } from '../ProductProvider';
import { GetData } from "../controller";
import './filter.modules.css'


export default function Filter() {

    const { produtos, setProdutos } = useProdutos();
    const [response, setResponse] = useState();
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


 const filteredProducts = produtos.filter(product =>
    product.name.includes(searchTerm)
  );

  return (
<div className="filter-forms">
        <Form onSubmit={ handleSubmitGet } formName={"Consultar Produto"}>
          <Input value={product.id} name="id" handleChange={handleNameChange} type="text">Id do Produto: </Input>
          <Input type="submit" value="Consultar Produto" id='button-query-form'/>
        </Form>
        {response && (
          <div className="response-display">
            <textarea
              rows="10"
              readOnly
              value={JSON.stringify(response, null, 2)}
            />
          </div>
        )}
        
        <div className="tables-section">
        <Form formName={"Filtrar por Nome"}>
          <Input value={product.name} name="name" handleChange={handleNameChange} type="text">Nome: </Input>
        </Form>
        <div>
        <h4>Resultados do Filtro</h4>
        <div className="table-section">
            <Box produtos={filteredProducts} />
        </div>
        <h4>Produtos</h4>
        <div>
          <Box produtos={produtos} />
        </div>
        </div>
    </div>
</div>
    )
}
