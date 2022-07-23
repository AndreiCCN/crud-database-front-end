import React, { useState } from "react";
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
} from "./Modal.styled";

const Modal = ({ closeModal, onFetch }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [hobby, setHobby] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setLocation("");
    setHobby("");
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        location,
        hobby,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      resetFields();
      setActionMessage("Item added successfully!");
      onFetch();
    }
  }

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
        <Title>Add Item</Title>
        <Line />
        <GroupWrapper>
          <FieldName>First Name:</FieldName>
          <FieldInput
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Last Name:</FieldName>
          <FieldInput
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Email:</FieldName>
          <FieldInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Phone:</FieldName>
          <FieldInput
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Location:</FieldName>
          <FieldInput
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
          />
        </GroupWrapper>
        <GroupWrapper>
          <FieldName>Hobby:</FieldName>
          <FieldInput
            value={hobby}
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
          <AddItemButton type="submit">Add Item</AddItemButton>
        </ButtonsWrapper>
        <ActionMessage>{actionMessage}</ActionMessage>
      </ModalContainer>
    </ModalBrackground>
  );
};

export default Modal;
