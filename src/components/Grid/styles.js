import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  width: 50%;
  height: 400px;
  background: #aaa;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 10px;
  &:nth-child(2n-1) {
    background: #ddd;
  }
`;

export const Element = styled.div`
  font-size: 35px;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Info = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;
