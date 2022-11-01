import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { gitAPI } from '../../api/api';
import IssueHeader from '../../components/IssueHeader';
import IssueListItem from '../../components/IssueListItem';
import useAxios from '../../hooks/useAxios';

const MarkDownWrapper = styled.div`
  padding: 10px;
`;

const ListItemWrapper = styled.div`
  padding: 10px;
`;

function IssueDetail() {
  const [issue, setIssue] = useState([]);
  const getIssueDetail = useAxios(gitAPI.getIssueDetail);

  useEffect(() => {
    getIssueDetail([], {
      onSuccess: data => setIssue(data),
    });
  }, []);

  return (
    <>
      <IssueHeader />
      <ListItemWrapper>{issue.length !== 0 ? <IssueListItem {...issue} /> : ''}</ListItemWrapper>

      <MarkDownWrapper>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </MarkDownWrapper>
    </>
  );
}

export default IssueDetail;
