import { useState } from 'react';
import ClientFrame from './components/ClientFrame/ClientFrame';
import TopNav from './components/TopNav/TopNav';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import AboutPanel from './components/AboutPanel/AboutPanel';
import RightRail from './components/RightRail/RightRail';
import Dashboard from './components/Dashboard/Dashboard';
import TFTProjectRoster from './components/TFTProjectRoster/TFTProjectRoster';
import ResumePanel from './components/ResumePanel/ResumePanel';
import { projects } from './data/projects';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <ClientFrame
      topNav={
        <TopNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      }
      profileHeader={
        <ProfileHeader
          name="Jhon Milo Nunez"
          role="Software Engineer"
          levelLabel="About Me"
          onOpenAbout={() => setIsAboutOpen(true)}
        />
      }
      rightRail={<RightRail />}
      aboutPanel={
        <AboutPanel
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
        />
      }
    >
      {activeTab === 'home' && <Dashboard />}
      {activeTab === 'projects' && <TFTProjectRoster projects={projects} />}
      {activeTab === 'resume' && <ResumePanel />}
    </ClientFrame>
  );
}

export default App;
