import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const IssueListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  margin-top: 5px;
  border-bottom: 1px solid #c5c5c5;
`;

const IssueTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 80%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Desc = styled.div`
  margin-top: 15px;
  font-size: 12px;
  color: ${props => props.theme.fontGray};
`;

const Tag = styled.div`
  text-decoration: underline;
  margin-bottom: 5px;
`;

function IssueListItem(item, idx) {
  const navigate = useNavigate();
  return (
    <>
      {item && JSON.stringify(item) !== '{}' ? (
        <IssueListItemWrapper onClick={() => navigate(`/detail/${item.number}`)}>
          <IssueTitle>
            <Title>
              <Tag>#{item.number}</Tag> {item.title}
            </Title>
            <Desc>
              @{item.user.login}, 작성일: {item.updated_at}
            </Desc>
          </IssueTitle>
          <div>coment: {item.comments} </div>
        </IssueListItemWrapper>
      ) : (
        ''
      )}
    </>
  );
}

export default IssueListItem;
