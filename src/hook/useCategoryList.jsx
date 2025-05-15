import { useEffect, useState } from "react";
import { getCategoryNameList } from "../api/cat-data";

export default function useCategoryList() {
  const [allowedParam, setAllowedParam] = useState(null);

  useEffect(() => {
    async function getCategoryList() {
      const data = await getCategoryNameList();
      setAllowedParam(data);
    }
    getCategoryList();
  }, []);

  return { allowedParam };
}
