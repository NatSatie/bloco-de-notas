import styled from 'styled-components'
import { InputBase } from '@material-ui/core';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 25%;
  width: 100%;
`;

export const NoteContainer = styled.div`
  background: #FFF0A1;
  box-shadow: 2px 3px #F5F5F5;
  padding: 16px;
  margin: 12px;
  height: 200px;
  width: 200px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  vertical-align: center;
`;

export const Title = styled(InputBase)`
  font-family: 'Noto Serif';
  font-size: 20px;
  font-weight: 700;
`;