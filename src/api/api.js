import { api } from '../utils/axios';

export const gitAPI = {
  async getIssueList() {
    const result = await api.get('/repos/angular/angular-cli/issues');
    return {
      result,
      errorMsg: {
        default: '이슈 목록을 불러오는데 실패하였습니다!',
      },
    };
  },

  async getIssueDetail(issueNumber) {
    const result = await api.get(`/repos/angular/angular-cli/issues/${issueNumber}`);
    return {
      result,
      errorMsg: {
        default: '이슈 상세 목록을 불러오는데 실패하였습니다!',
      },
    };
  },
};
