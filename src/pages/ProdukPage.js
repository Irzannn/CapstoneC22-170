import React from "react";
import JumbotronProduk from "../components/ProdukPage/JumbotronProdukPage";
import Blazer from "../components/ProdukPage/Blazer";
import GownDress from "../components/ProdukPage/GownDress";
import KritikSaran from "../components/KritikSaran"

function ProdukPage() {
  return (
    <>
        <JumbotronProduk/>
        <Blazer/>
        <GownDress/>
        <KritikSaran/>
    </>
  );
}

export default ProdukPage;