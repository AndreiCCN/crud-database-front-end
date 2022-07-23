import styled from "styled-components";

export const ModalBrackground = styled.div`
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.form`
  width: 30%;
  border-radius: 20px;
  background-color: #fefefe;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 25px;
  margin: auto;
`;

export const Title = styled.h1`
  font-weight: 800;
`;

export const ExitButton = styled.span`
  float: right;
  color: #aaaaaa;
  font-size: 2rem;
  font-weight: bold;
  border-style: none;

  :hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Line = styled.hr`
  margin: 15px 0;
`;

export const GroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const FieldName = styled.span`
  margin: 5px;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const FieldInput = styled.input`
  border-style: none;
  background-color: lightgrey;
  font-size: 1.5rem;
  border-radius: 50px;
  padding: 5px 10px;

  :focus {
    outline: none;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CancelButton = styled.button`
  padding: 10px 15px;
  font-size: 1.25rem;
  border-style: none;
  border-radius: 10px;
  background-color: #a70000;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #ff0000;
  }
  :focus {
    outline: none;
  }
`;

export const AddItemButton = styled.button`
  padding: 10px 15px;
  font-size: 1.25rem;
  border-style: none;
  border-radius: 10px;
  background-color: #11823b;
  color: white;

  :hover {
    cursor: pointer;
    background-color: #48bf53;
  }
  :focus {
    outline: none;
  }
`;

export const ActionMessage = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  margin: 15px 0 0 0;
`;
