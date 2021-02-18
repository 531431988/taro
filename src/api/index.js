import Resquest from "@/libs/request";

export const getDataDemo = data => {
  return Resquest.post("/hn-wfs", data);
};
