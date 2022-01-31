import React from "react";
import {useRouter} from "next/router";
import Records from "../../components/Records/Records";
const index = () => {
  const router = useRouter();
  return <Records />;
};

export default index;
