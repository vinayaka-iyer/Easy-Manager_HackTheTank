import React from "react";

import AdminCrudModule from "@/modules/AdminCrudModule";
import AdminForm from "@/forms/AdminForm";

export default function Admin() {
  const entity = "admin";
  const searchConfig = {
    displayLabels: ["name", "surname"],
    searchFields: "email,name,surname",
    outputValue: "_id",
  };

  const panelTitle = "Franchise Panel";
  const dataTableTitle = "Franchise Lists";
  const entityDisplayLabels = ["email"];

  const readColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Surname", dataIndex: "surname" },
    { title: "Email", dataIndex: "email" },
    { title: "Contact No", dataIndex: "contact" },
    { title: "Number of Clients", dataIndex: "no_of_clients" },
  ];

  const dataTableColumns = [
    { title: "Name", dataIndex: "name" },
    { title: "Surname", dataIndex: "surname" },
    { title: "Email", dataIndex: "email" },
    { title: "Number of Clients", dataIndex: "no_of_clients" },
  ];
  const ADD_NEW_ENTITY = "Add new Franchise";
  const DATATABLE_TITLE = "Admins List";
  const ENTITY_NAME = "admin";
  const CREATE_ENTITY = "Create admin";
  const UPDATE_ENTITY = "Update admin";

  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <AdminCrudModule
      createForm={<AdminForm />}
      updateForm={<AdminForm isUpdateForm={true} />}
      config={config}
    />
  );
}
