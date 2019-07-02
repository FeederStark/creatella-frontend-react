import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  width: 50%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 20px;
  border: 0;
  background: ${props => (props.highlighted ? '#bbb' : '#ddd')};
  &:hover {
    background: ${props => (props.highlighted ? '#bbb' : '#ccc')};
  }
  &:active {
    background: #bbb;
  }
`;
