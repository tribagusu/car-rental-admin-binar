import React, { useState } from "react"
import { useSelector } from "react-redux"
// mui
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableFooter from "@mui/material/TableFooter"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

// lib
import moment from "moment/moment"
// comp
import TablePaginationActions from "./TablePagination"
import { tableHead } from "./tableHead"
// func
import { formatCurrency } from "../../../../utils/formatCurrency"

const ListTable = (props) => {
  const { page, setPage, rowsPerPage, setRowsPerPage } = props
  const { orders } = useSelector((state) => state.cars)
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0

  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  return (
    <div className="list-table-container">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead
            style={{
              background: "#cfd4ed",
            }}
          >
            <TableRow>
              {tableHead.map((head) => (
                <TableCell key={head.id}>{head.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? orders.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : orders
            ).map((order, index) => (
              <TableRow key={order.id}>
                <TableCell style={{ width: "5%" }}>{`${index + 1}`}</TableCell>
                <TableCell style={{ width: "13.5%" }}>
                  {order.User.email}
                </TableCell>
                <TableCell style={{ width: "13.5%" }}>
                  {order.Car?.name}
                </TableCell>
                <TableCell style={{ width: "13.5%" }}>
                  {moment(order.start_rent_at).format("ll")}
                </TableCell>
                <TableCell style={{ width: "13.5%" }}>
                  {moment(order.finish_rent_at).format("ll")}
                </TableCell>
                <TableCell style={{ width: "13.5%" }}>
                  {formatCurrency(order.total_price)}
                </TableCell>
                <TableCell style={{ width: "10.5%" }}>
                  {order.Car?.category}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={4}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ListTable
