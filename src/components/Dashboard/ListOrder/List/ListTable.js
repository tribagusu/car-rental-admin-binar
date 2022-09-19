import "primeicons/primeicons.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.css"
import "primeflex/primeflex.css"
import {
  locale,
  addLocale,
  updateLocaleOption,
  updateLocaleOptions,
  localeOption,
  localeOptions,
} from "primereact/api"

import React, { useState, useEffect } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import { Button } from "primereact/button"
import { Ripple } from "primereact/ripple"
import { Dropdown } from "primereact/dropdown"
import { InputText } from "primereact/inputtext"
import { classNames } from "primereact/utils"

import { handleOrders } from "../../../../redux/actions/carsAction"
import { useSelector, useDispatch } from "react-redux"
import moment from "moment/moment"

const ListTable = () => {
  // const [customers2, setCustomers2] = useState([])
  const [first1, setFirst1] = useState(0)
  const [rows1, setRows1] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Press 'Enter' key to go to this page."
  )
  const { orders } = useSelector((state) => state.cars)
  const order = orders.map((order) => order)
  const date = orders.map((order) => moment(order).format("ll"))

  // const users = dataCustomer.map((user) => user)

  const onCustomPage1 = (event) => {
    setFirst1(event.first)
    setRows1(event.rows)
    setCurrentPage(event.page + 1)
  }

  const onPageInputKeyDown = (event, options) => {
    if (event.key === "Enter") {
      const page = parseInt(currentPage)
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        )
      } else {
        const first = currentPage ? options.rows * (page - 1) : 0

        setFirst1(first)
        setPageInputTooltip("Press 'Enter' key to go to this page.")
      }
    }
  }

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleOrders())
    locale("en")
    console.log(orders)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const template1 = {
    layout:
      "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
    PrevPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      )
    },
    NextPageLink: (options) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      )
    },
    PageLinks: (options) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true })

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        )
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      )
    },
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "All", value: options.totalRecords },
      ]

      return (
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      )
    },
    CurrentPageReport: (options) => {
      return (
        <span
          className="mx-3"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Go to{" "}
          <InputText
            size="2"
            className="ml-1"
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      )
    },
  }

  return (
    <div className="list-table-container">
      <div className="card">
        <h5>Custom Paginator Template</h5>
        <DataTable
          value={order}
          paginator
          paginatorTemplate={template1}
          first={first1}
          rows={rows1}
          onPage={onCustomPage1}
          responsiveLayout="scroll"
        >
          <Column
            field="User.email"
            header="User Email"
            style={{ width: "16%" }}
          ></Column>
          <Column field="Car" header="Car" style={{ width: "16%" }}></Column>
          <Column
            value={date}
            field="start_rent_at"
            header="Start Rent"
            style={{ width: "16%" }}
          ></Column>
          <Column
            field="finish_rent_at"
            header="Finish Rent"
            style={{ width: "16%" }}
          ></Column>
          <Column
            field="total_price"
            header="Price"
            style={{ width: "16%" }}
          ></Column>
          <Column
            field="CarId"
            header="Category"
            style={{ width: "16%" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  )
}

export default ListTable
