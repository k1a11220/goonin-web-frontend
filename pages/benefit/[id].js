import React from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const GET_BENEFITS = gql`
  query getById($id: Int!) {
    getById(id: $id) {
      id
      name
    }
  }
`;

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, data } = useQuery(GET_BENEFITS, {
    variables: { id: +id },
  });

  console.log(loading, data, +id);
  return (
    <div>
      <h1>{data?.getById?.id}</h1>
      <h1>{data?.getById?.name}</h1>
    </div>
  );
};

export default DetailPage;
