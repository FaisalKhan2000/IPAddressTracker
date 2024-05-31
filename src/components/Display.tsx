import React, { useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../GlobalContext";

const Display: React.FC = () => {
  const { data, loading, error } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="card-container">
      <Card title="IP Address" content={data?.ip || "N/A"} />
      <Card
        title="Location"
        content={
          `${data?.location.city}, ${data?.location.region}, ${data?.location.country}` ||
          "N/A"
        }
      />
      <Card title="Timezone" content={data?.location.timezone || "N/A"} />
      <Card title="ISP" content={data?.isp || "N/A"} />
    </main>
  );
};

export default Display;
