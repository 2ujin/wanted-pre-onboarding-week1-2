import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gitAPI } from '../../api/api';
import IssueHeader from '../../components/IssueHeader';
import IssueListItem from '../../components/IssueListItem';
import useAxios from '../../hooks/useAxios';
import { AppContext } from '../../context/context';

const Wrapper = styled.div``;

const ListItemWrapper = styled.div`
  padding: 10px;
`;

function IssueList() {
  // const { getTodoState } = useContext(IssueListDispatchContext);

  const [issueList, setIssueList] = useState([]);
  const getIssueList = useAxios(gitAPI.getIssueList);

  useEffect(() => {
    getIssueList([], {
      onSuccess: data => setIssueList(data),
    });
  }, []);

  return (
    <Wrapper>
      <IssueHeader />
      <ListItemWrapper>
        {issueList.map((item, idx) => (
          <IssueListItem key={idx} {...item} />
        ))}
      </ListItemWrapper>
    </Wrapper>
  );
}

export default IssueList;
