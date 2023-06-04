import React from "react";
import { useHistory } from "react-router-dom";

import * as CompanyServer from "./CompanyServer";

const CompanyItem = ({ company, listCompanies }) => {
  const history = useHistory();

  const handleDelete = async (companyId) => {
    await CompanyServer.deleteCompany(companyId);
    listCompanies();
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card card-body">
        <h3 className="card-title">{company.name}</h3>
        <p className="card-text">
          <strong>Priority:</strong> <br></br>
          {company.foundation}
        </p>
        <p className="card-text">
          {" "}
          <strong>Description:</strong> <br></br> {company.website}
        </p>
        <button
          onClick={() => history.push(`/updateCompany/${company.id}`)}
          className="btn btn-info my-2"
        >
          Edit task
        </button>
        <button
          onClick={() => company.id && handleDelete(company.id)}
          className="btn btn-danger my-2"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default CompanyItem;
