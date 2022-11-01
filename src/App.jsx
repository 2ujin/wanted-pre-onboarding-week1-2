import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueListDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<IssueList />} />
          <Route exact path="/detail/:id" element={<IssueDetail />} />
          {/* <Route path="/error" element={<IssueList />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
