import React, { useEffect, useState } from "react";
import * as CompanyServer from "./CompanyServer";
const CompanyList = () => {
  // const initialState = [
  //   {
  //     id: 1,
  //     name: "Facebook",
  //     foundation: 2004,
  //   },
  //   {
  //     id: 2,
  //     name: "Google",
  //     foundation: 2002,
  //   },
  // ];
  //const [companies, setCompanies] = useState(initialState);
  const [companies, setCompanies] = useState([]);
  const listCompanies = async () => {
    try {
      const res = await CompanyServer.listCompanies();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listCompanies();
  }, []);

  return (
    <div>
      {companies.map((company) => (
        <h2>{company.name}</h2>
      ))}
    </div>
  );
};

export default CompanyList;
