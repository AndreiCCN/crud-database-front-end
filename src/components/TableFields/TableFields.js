import React from "react";
import { ColumnGrid, TableColumn } from "./TableFields.styled";

const TableFields = () => {
  return (
    <ColumnGrid>
      <TableColumn>ID</TableColumn>
      <TableColumn>First</TableColumn>
      <TableColumn>Last</TableColumn>
      <TableColumn>Email</TableColumn>
      <TableColumn>Phone</TableColumn>
      <TableColumn>Location</TableColumn>
      <TableColumn>Hobby</TableColumn>
      <TableColumn>Actions</TableColumn>
    </ColumnGrid>
  );
};

export default TableFields;
