import React, { useState, useEffect } from "react";

import FixedBottomNav from "../../components/fixedbottom_nav";
import ClientHomePageComp from "../../components/page_components/client/ClientHomePageComponent";

function ClientIndex(props) {
  const { navigation } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [following, setFollowing] = useState(false);

  const changePage = (pageNo) => {

    switch (pageNo) {
      case 1:
        return <ClientHomePageComp {...props} />
      case 2:
        return <Text>Dashboard</Text>
      case 3:
        return <Text>Message Box</Text>
      case 4:
        return <Text>Account</Text>
      default:
        break;
    }
  }

  return (
    <>
      {changePage(currentPage)}
      <FixedBottomNav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default ClientIndex;
