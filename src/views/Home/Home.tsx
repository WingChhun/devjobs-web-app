import React from 'react';
import { JobState } from '../../providers/Jobs';

interface HomePageProps {
  jobs: JobState;
}

function Home({ jobs }: HomePageProps) {
  console.log('jobs:', jobs);
  return <div>hello</div>;
}

export default React.memo(Home);
