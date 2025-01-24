import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/Layout';
import LeadListing from './pages/LeadListing';
import LeadDetails from './pages/LeadDetails';
import LeadManagement from './pages/LeadManagement';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LeadListing />} />
            <Route path="/leads/:id" element={<LeadDetails />} />
            <Route path="/manage" element={<LeadManagement />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
