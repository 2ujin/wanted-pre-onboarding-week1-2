import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.mainColor};
  padding: 15px;
  color: white;
`;

const Title = styled.div`
  color: ${props => props.theme.mainColor};
  font-weight: 600;
  font-size: 30px;
  margin-top: 25px;
  margin-left: 15px;
`;

function IssueHeader() {
  return (
    <>
      <HeaderWrapper>angular / angular-cli</HeaderWrapper>
      <Title>Issue</Title>
    </>
  );
}

export default IssueHeader;
