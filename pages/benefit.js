import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_FILTERED_BENEFITS = gql`
  {
    getByCategory(category: "문화") {
      id
      name
    }
  }
`;

const GET_BENEFIT = gql`
  {
    benefits {
      id
      name
    }
  }
`;

const Benefit = () => {
  const { loading, data } = useQuery(GET_BENEFIT);
  console.log(data);
  return <div>Benefit</div>;
};

export default Benefit;
