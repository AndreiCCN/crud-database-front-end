import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import TableFields from "../TableFields/TableFields";
import TableRecords from "../TableRecords/TableRecords";
import {
  MainPanel,
  Title,
  Line,
  DownloadButton,
  AddItemButton,
} from "./MainContainer.styled";

const MainContainer = () => {
  const [openModal, setOpenModal] = useState(false);

  const [users, setUsers] = useState([]);

  async function populateFields() {
    const req = await fetch("http://localhost:1337/api/find-users", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await req.json();
    if (data.status === "ok") {
      setUsers(data.data);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    populateFields();
  }, []);

  return (
    <MainPanel>
      <Title>CRUD Database</Title>
      <Line />
      <TableFields />
      <Line />
      {users.map((user) => (
        <TableRecords
          key={user._id}
          id={user._id}
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          phone={user.phone}
          location={user.location}
          hobby={user.hobby}
          onFetch={populateFields}
        />
      ))}

      <DownloadButton>Download CSV</DownloadButton>
      <AddItemButton
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Item
      </AddItemButton>
      {openModal && (
        <Modal onFetch={populateFields} closeModal={setOpenModal} />
      )}
    </MainPanel>
  );
};

export default MainContainer;
