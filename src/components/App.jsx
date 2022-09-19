import Main from './Main';
import Sidebar from './Sidebar';
import { menuConfig } from '../data/menu';
import Paper from './Paper';
import Card from './Card';
import data from '../data/data.json';
import TutorsList from './TutorsList';

export const App = () => {
  return (
    <>
      <Sidebar menu={menuConfig} logo="logo"></Sidebar>
      <Main>
        <Paper>
          <Card imgURL="" />
        </Paper>
        <Paper>
          <TutorsList tutors={data.tutors} />
        </Paper>
      </Main>
    </>
  );
};
