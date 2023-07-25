import { useContextSelector } from 'use-context-selector';
import { JobsContext } from '../../providers/Jobs';
import Home from './Home';

function HomeContainer() {
  const jobs = useContextSelector(JobsContext, (state) => state.jobs);

  return <Home jobs={jobs} />;
}

export default HomeContainer;
