import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  FaEdit,
  FaTrash
} from "react-icons/fa";

function ContractTable({ 
  search, 
  filter,
  department,
  status,
  shift,
}) {

  const navigate = useNavigate();

  const [contracts, setContracts] = useState([]);
  const exportToExcel = () => {

    const worksheet =
      XLSX.utils.json_to_sheet(
        filteredContracts
      );

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Contracts"
    );

    const excelBuffer =
      XLSX.write(
        workbook,
        {
          bookType: "xlsx",
          type: "array",
        }
      );

    const fileData =
      new Blob(
        [excelBuffer],
        {
          type:
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        }
      );

    saveAs(
      fileData,
      "contracts.xlsx"
    );

  };

  const [currentPage, setCurrentPage] = useState(1);
  const [woFilter, setWoFilter] =
    useState("");

  const [contractorFilter, setContractorFilter] =
    useState("");

  const [departmentFilter, setDepartmentFilter] =
    useState("");

  const [biometricFilter, setBiometricFilter] =
    useState("");

  const [shiftFilter, setShiftFilter] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("");
  const role =
    localStorage.getItem(
      "role"
  );

  const recordsPerPage = 5;

  /* FETCH CONTRACTS */

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {

      const response = await axios.get(
        "http://localhost:8080/api/contracts"
      );

      setContracts(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const woNumbers =
    [...new Set(
      contracts.map(
        c => c.woNumber
      )
    )];

  const contractors =
    [...new Set(
      contracts.map(
        c => c.contractor
      )
    )];

  const departments =
    [...new Set(
      contracts.map(
        c => c.department
      )
    )];
  const biometrics =
    [...new Set(
      contracts.map(
        c => c.biometricId
      )
    )];

  const shifts =
    [...new Set(
      contracts.map(
        c => c.shift
      )
    )];

  const statuses =
    [...new Set(
      contracts.map(
        c => c.status
      )
    )];

  /* SEARCH FILTER */

  const today =
  new Date();

  const filteredContracts =
  contracts.filter((contract)=>{

  const matchesSearch =

  contract.employeeName
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

  ||

  contract.contractor
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

  ||

  contract.department
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

  ||

  contract.biometricId
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    )

  ||

  contract.woNumber
    ?.toLowerCase()
    .includes(
      search.toLowerCase()
    );
  
  const matchesWO =
    !woFilter ||
    contract.woNumber ===
    woFilter;

  const matchesContractor =
    !contractorFilter ||
    contract.contractor ===
    contractorFilter;

  const matchesDepartment =
    !departmentFilter ||
    contract.department ===
    departmentFilter;

  const matchesBiometric =
    !biometricFilter ||
    contract.biometricId ===
    biometricFilter;

  const matchesShift =
    !shiftFilter ||
    contract.shift ===
    shiftFilter;

  const matchesStatus =
    !statusFilter ||
    contract.status ===
    statusFilter;

  if(
    filter === "expiring"
  ){

    const endDate =
      new Date(
        contract.effectiveTo
      );

    const diffDays =
      (
        endDate - today
      )
      /
      (
        1000*60*60*24
      );

    return (
      matchesSearch &&
      matchesWO &&
      matchesContractor &&
      matchesDepartment &&
      matchesBiometric &&
      matchesShift &&
      matchesStatus &&
      diffDays >= 0 &&
      diffDays <= 30
    );
  }

  if (filter === "active") {

    return (
      matchesSearch &&
      matchesWO &&
      matchesContractor &&
      matchesDepartment &&
      matchesBiometric &&
      matchesShift &&
      contract.status === "Active"
    );

  }

  if (filter === "inactive") {

    return (
      matchesSearch &&
      matchesWO &&
      matchesContractor &&
      matchesDepartment &&
      matchesBiometric &&
      matchesShift &&
      contract.status === "Inactive"
    );

  }

  return (

    matchesSearch &&
    matchesWO &&
    matchesContractor &&
    matchesDepartment &&
    matchesBiometric &&
    matchesShift &&
    matchesStatus

  );

});

  /* PAGINATION */

  const lastIndex =
    currentPage * recordsPerPage;

  const firstIndex =
    lastIndex - recordsPerPage;

  const currentRecords =
    filteredContracts.slice(
      firstIndex,
      lastIndex
    );

  const totalPages =
    Math.ceil(
      filteredContracts.length /
      recordsPerPage
    );

  /* DELETE */

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/api/contracts/${id}`
      );

      alert(
        "Contract Deleted Successfully"
      );

      fetchContracts();

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="table-container">
      <button
        className="export-btn"
        onClick={exportToExcel}
      >
        📊 Export Excel
      </button>

      <table className="contract-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Employee</th>
            <th>

              WO Number

              <br />

              <select
                value={woFilter}
                onChange={(e)=>
                  setWoFilter(
                      e.target.value
                  )
                }
              >

                <option value="">
                  All
                </option>

                {
                  woNumbers.map(
                    wo => (

                      <option
                        key={wo}
                        value={wo}
                      >
                        {wo}
                      </option>

                    )
                  )
                }

              </select>

            </th>
            <th>

              Contractor

              <br />

              <select
                value={contractorFilter}
                onChange={(e)=>
                  setContractorFilter(
                    e.target.value
                  )
                }
              > 

                <option value="">
                  All
                </option>

                {
                  contractors.map(
                    c => (

                      <option
                        key={c}
                        value={c}
                      >
                        {c}
                      </option>

                    )
                  )
                }

              </select>

            </th>
            <th>

              Department

              <br />

              <select
                value={departmentFilter}
                onChange={(e)=>
                  setDepartmentFilter(
                    e.target.value
                  )
                }
              >

                <option value="">
                  All
                </option>

                {
                  departments.map(
                    d => (

                      <option
                        key={d}
                        value={d}
                      >
                        {d}
                      </option>

                    )
                  )
                }

              </select>

            </th>
            <th>From</th>
            <th>To</th>
            <th>

              Biometric

              <br />

              <select
                value={biometricFilter}
                onChange={(e)=>
                  setBiometricFilter(
                    e.target.value
                  )
                }
              >

                <option value="">
                  All
                </option>

                {
                  biometrics.map(
                    b => (

                      <option
                        key={b}
                        value={b}
                      >
                        {b}
                      </option>

                    )
                  )
                }

              </select>

            </th>
            <th>

              Shift

              <br />

              <select
                value={shiftFilter}
                onChange={(e)=>
                  setShiftFilter(
                    e.target.value
                  )
                }
              >

                <option value="">
                  All
                </option>

                {
                  shifts.map(
                    s => (

                      <option
                        key={s}
                        value={s}
                      >
                        {s}
                      </option>

                    )
                  )
                }

              </select>

            </th>
            <th>

              Status

              <br />

              <select
                value={statusFilter}
                onChange={(e)=>
                  setStatusFilter(
                    e.target.value
                  )
                }
              >

                <option value="">
                  All
                </option>

                {
                  statuses.map(
                    s => (

                      <option
                        key={s}
                        value={s}
                      >
                        {s}
                    </option>

                    )
                  )
                }


              </select>

            </th>
            {
              role === "ADMIN" && (
                <th>Actions</th>
              )
            }

          </tr>

        </thead>

        <tbody>

          {currentRecords.map(
            (contract) => (

              <tr key={contract.id}>

                <td>{contract.id}</td>

                <td>
                  {contract.employeeName}
                </td>

                <td>
                  {contract.woNumber}
                </td>

                <td>
                  {contract.contractor}
                </td>

                <td>
                  {contract.department}
                </td>

                <td>
                  {contract.effectiveFrom}
                </td>

                <td>
                  {contract.effectiveTo}
                </td>

                <td>
                  {contract.biometricId}
                </td>

                <td>
                  {contract.shift}
                </td>

                <td>

                  <span
                    style={{
                      backgroundColor:
                        contract.status ===
                        "Active"
                          ? "#16a34a"
                          : "#dc2626",

                      color: "white",

                      padding:
                        "6px 12px",

                      borderRadius:
                        "20px",
                    }}
                  >

                    {contract.status}

                  </span>

                </td>

                {
                  role === "ADMIN" && (
                    <td>

                      <div className="actions-cell">
                        <button
                          title="Edit"
                          className="edit-btn"
                          onClick={() =>
                            navigate(
                              `/edit-contract/${contract.id}`
                            )
                          }
                        >
                          <FaEdit />
                        </button>

                        <button
                          title="Delete"
                          className="delete-btn"
                          onClick={() =>
                            navigate(
                              `/delete-contract/${contract.id}`
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div>

                    </td>
                  )
                }

              </tr>

            )
          )}

        </tbody>

      </table>

      {/* PAGINATION */}

      <div className="pagination">

        <button

          disabled={
            currentPage === 1
          }

          onClick={() =>
            setCurrentPage(
              currentPage - 1
            )
          }

        >

          Previous

        </button>

        {[...Array(totalPages)].map(
          (_, index) => (

            <button

              key={index}

              className={
                currentPage ===
                index + 1
                  ? "active-page"
                  : ""
              }

              onClick={() =>
                setCurrentPage(
                  index + 1
                )
              }

            >

              {index + 1}

            </button>

          )
        )}

        <button

          disabled={
            currentPage ===
            totalPages
          }

          onClick={() =>
            setCurrentPage(
              currentPage + 1
            )
          }

        >

          Next

        </button>

      </div>

    </div>
  );
}

export default ContractTable;