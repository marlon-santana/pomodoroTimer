import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";

function createData(
  Tarefa: string,
  Duração: number,
  Início: number,
  Status: string
) {
  return { Tarefa, Duração, Início, Status };
}

const rows = [
  createData("Estudos rocketseat", 159, 6.0, "andamento"),
  createData("Estudos faculdade", 237, 9.0, "finalizado"),
  createData("Estudos faculdade", 237, 9.0, "interrompido"),
];

export function History() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "931px",
        margin: " 0 auto",
        borderTopRightRadius: "8px",
        borderTopLeftRadius: "8px",
        backgroundColor: "transparent",
      }}
    >
      <Typography variant="subtitle1" sx={{ color: "white", fontSize: "24px" }}>
        Meu Histórico
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            backgroundColor: "#323238",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            mb: 20,
          }}
        >
          <TableRow>
            <TableCell sx={{ color: "white" }}>Tarefa</TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Duração
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Início
            </TableCell>
            <TableCell sx={{ color: "white" }} align="right">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Tarefa}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: "#29292E",
                mb: 20,
              }}
            >
              <TableCell sx={{ color: "white" }} component="th" scope="row">
                {row.Tarefa}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.Duração}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.Início}
              </TableCell>
              <TableCell sx={{ color: "white" }} align="right">
                {row.Status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
