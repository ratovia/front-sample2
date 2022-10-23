import type { NextPage } from "next";
import { Header } from "../components/molecules/Header/header";
import { Navigation } from "../components/organisms/Navigation/Navigation";
import { ManagementTemplate } from "../components/templates/ManagementTemplate";

const Home: NextPage = () => {
  return (
    <ManagementTemplate
      appBar={<Header />}
      navigation={<Navigation />}
      mainContent={<div></div>}
    ></ManagementTemplate>
  );
};

export default Home;
