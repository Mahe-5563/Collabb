import React from "react";
import { ScrollView } from "react-native";

import NavbarHomepage from "../../components/navbar_homepage";

function TalentHomePage(props) {
    return (
      <ScrollView>
        <NavbarHomepage 
            {...props}
        />
      </ScrollView>
    );
}

export default TalentHomePage;