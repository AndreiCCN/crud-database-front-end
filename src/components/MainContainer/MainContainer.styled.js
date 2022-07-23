import styled from "styled-components";

export const MainPanel = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 2.5rem;
  margin-bottom: 25px;
`;

export const Line = styled.hr`
  margin: 10px 0;
`;

export const DownloadButton = styled.button`
  padding: 10px;
  color: white;
  background-color: royalblue;
  border-style: none;
  border-radius: 5px;
  margin: 20px 5px 0 0;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

export const AddItemButton = styled.button`
  padding: 10px;
  color: white;
  background-color: #11823b;
  border-style: none;
  border-radius: 5px;
  margin: 20px 0 0 5px;
  transition-duration: 0.4s;

  :hover {
    cursor: pointer;
    background-color: #48bf53;
  }
  :focus {
    outline: none;
  }
`;
