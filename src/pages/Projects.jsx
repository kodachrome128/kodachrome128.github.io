import {React} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';

const Projects = () => {
  const smallScreen = useMediaQuery('(max-width: 650px)');
  const largeScreen = useMediaQuery('(min-width: 651px)');

  return (
    <>
      <header style={{ margin: '0', width: '100%', top: '0', left: '0', position: 'relative' }}>
        <Navbar />
      </header>
      {smallScreen && (
        <>
          <CategoryFilter />
        </>
      )}
      {largeScreen && (
        <>
          <CategoryFilter />
        </>
      )}
    </>
  );
};

export default Projects;
