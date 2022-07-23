import React, { useState } from "react";
import {
  RecordGrid,
  RecordId,
  RecordValue,
  RecordActions,
  EditButton,
  DeleteButton,
} from "./TableRecords.styled";
import EditModal from "../EditModal/EditModal";

const TableRecords = ({
  id,
  firstName,
  lastName,
  email,
  phone,
  location,
  hobby,
  onFetch,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  async function deleteUser() {
    const req = await fetch("http://localhost:1337/api/delete-user", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      onFetch();
    } else {
      alert(data.error);
    }
  }

  return (
    <RecordGrid>
      <RecordId>{id}</RecordId>
      <RecordValue>{firstName}</RecordValue>
      <RecordValue>{lastName}</RecordValue>
      <RecordValue>{email}</RecordValue>
      <RecordValue>{phone}</RecordValue>
      <RecordValue>{location}</RecordValue>
      <RecordValue>{hobby}</RecordValue>
      <RecordActions>
        <EditButton
          onClick={() => {
            setOpenEditModal(true);
          }}
        >
          Edit
        </EditButton>
        <DeleteButton onClick={deleteUser}>Del</DeleteButton>
      </RecordActions>
      {openEditModal && (
        <EditModal id={id} onFetch={onFetch} closeModal={setOpenEditModal} />
      )}
    </RecordGrid>
  );
};

export default TableRecords;
