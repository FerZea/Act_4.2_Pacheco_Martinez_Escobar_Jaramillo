import DashboardLayout from '../components/DashboardLayout';
import GroupSection from '../components/GroupSection';
import PageHeader from '../components/PageHeader';
import { groupSections, pageHeader } from '../data/dashboardData';

function Dashboard() {
  return (
    <DashboardLayout>
      <PageHeader {...pageHeader} />

      {groupSections.map((section) => (
        <GroupSection key={section.id} {...section} />
      ))}
    </DashboardLayout>
  );
}

export default Dashboard;
