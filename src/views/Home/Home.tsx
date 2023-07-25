import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import { JobState } from '../../providers/Jobs';
interface HomePageProps {
  jobs: JobState;
}

const Container = styled.div`
  border: 1px solid red;
`;

function Home({ jobs }: HomePageProps) {
  console.log('jobs:', jobs);
  return (
    <Container>
      <NavBar></NavBar>
    </Container>
  );
}

export default React.memo(Home);
