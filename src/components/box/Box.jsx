import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Box( { produtos } ) {
    return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650, boder: 0.5}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem"}}>Id do Produto</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem"}}>Nome do Produto</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Ano de Frabricação</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Preço</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Modelo de CPU</TableCell>
            <TableCell align="right" style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Tamanho do Disco</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow
              key={produto.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{produto.id}</TableCell>
              <TableCell align="right">{produto.name}</TableCell>
              <TableCell align="right">{produto.data.year}</TableCell>
              <TableCell align="right">{produto.data.price}</TableCell>
              <TableCell align="right">{produto.data["CPU model"]}</TableCell>
              <TableCell align="right">{produto.data["Hard disk size"]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}