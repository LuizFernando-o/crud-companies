const API_URL = "https://shark-app-4jn6g.ondigitalocean.app/api/companies/";

export const listCompanies = async () => {
  return  await fetch(API_URL);
};
