import React from "react";
import ModuleForm from "./ModuleForm";
import ModuleHeader from "./ModuleHeader";
import ModuleItem from "./ModuleItem";

function ModuleList() {
  return (
    <div>
        <ModuleHeader />
        <hr />
        <ModuleForm />
        <ModuleItem />
    </div>  
  );
}
export default ModuleList;