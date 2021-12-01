import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_BENEFITS = gql`
  {
    getByCategory(category: "문화") {
      id
    }
  }
`;

const Benefit = () => {
  const { loading, data } = useQuery(GET_BENEFITS);
  console.log(data);
  return <div>Benefit</div>;
};

export default Benefit;
