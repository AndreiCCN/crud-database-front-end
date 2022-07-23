import styled from "styled-components";

export const RecordGrid = styled.div`
  display: grid;
  grid-template-columns: auto 150px 150px 200px 200px 250px 150px 150px;
  grid-gap: 10px;
  padding: 10px;
`;

export const RecordValue = styled.h3`
  font-weight: 400;
`;

export const RecordId = styled.h3`
  font-weight: 700;
`;

export const RecordActions = styled.div`
  font-weight: 700;
`;

export const EditButton = styled.button`
  background-color: #ffa500;
  border-style: none;
  border-radius: 5px;
  padding: 10px;
  margin: 0 5px;
  font-size: 1rem;

  :hover {
    cursor: pointer;
    background-color: #ffb732;
  }
  :focus {
    outline: none;
  }
`;

export const DeleteButton = styled.button`
  background-color: #a70000;
  border-style: none;
  border-radius: 5px;
  padding: 10px;
  margin: 0 5px;
  font-size: 1rem;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #ff0000;
  }
  :focus {
    outline: none;
  }
`;
