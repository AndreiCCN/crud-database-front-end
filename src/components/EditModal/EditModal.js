import React, { useState, useEffect } from "react";
import {
  ExitButton,
  ModalBrackground,
  ModalContainer,
  Line,
  Title,
  FieldName,
  FieldInput,
  GroupWrapper,
  ButtonsWrapper,
  CancelButton,
  AddItemButton,
  ActionMessage,
} from "./EditModal.styled";

const EditModal = ({ closeModal, onFetch, id }) => {
  const [firstNameState, setFirstName] = useState("");
  const [lastNameState, setLastName] = useState("");
  const [emailState, setEmail] = useState("");
  const [phoneState, setPhone] = useState("");
  const [locationState, setLocation] = useState("");
  const [hobbyState, setHobby] = useState("");

  const [actionMessage, setActionMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/update-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        firstNameState,
        lastNameState,
        emailState,
        phoneState,
        locationState,
        hobbyState,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      setActionMessage("Item modified successfully!");
      onFetch();
    }
  }

  async function populateFields() {
    const req = await fetch("http://localhost:1337/api/user", {
      headers: {
        "Content-Type": "application/json",
        "user-id": id,
      },
    });

    const data = await req.json();
    console.log(data);
    if (data.status === "ok") {
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      setPhone(data.phone);
      setLocation(data.location);
      setHobby(data.hobby);
    } else {
      alert(data.error);
    }
  }

  useEffect(() => {
    populateFields();
  }, []);

  return (
    <ModalBrackground>
      <ModalContainer onSubmit={handleSubmit}>
        <ExitButton
          onClick={() => {
            closeModal(false);
          }}
        >
          &times;
        </ExitButton>
        <Title>Update Item</Title>
        <Line />
        <GroupWrapper>
          <FieldName>First Name:</FieldName>
          <FieldInput
            value={firstNameState}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Last Name:</FieldName>
          <FieldInput
            value={lastNameState}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Email:</FieldName>
          <FieldInput
            value={emailState}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Phone:</FieldName>
          <FieldInput
            value={phoneState}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Location:</FieldName>
          <FieldInput
            value={locationState}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Hobby:</FieldName>
          <FieldInput
            value={hobbyState}
            onChange={(e) => {
              setHobby(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <ButtonsWrapper>
          <CancelButton
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </CancelButton>
          <AddItemButton type="submit">Update</AddItemButton>
        </ButtonsWrapper>
        <ActionMessage>{actionMessage}</ActionMessage>
      </ModalContainer>
    </ModalBrackground>
  );
};

export default EditModal;
