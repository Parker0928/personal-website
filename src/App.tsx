/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <div id="home"><Home /></div>
        <div id="projects"><Projects /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </Layout>
    </Router>
  );
}
