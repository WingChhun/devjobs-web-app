import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  height: 160px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 45px auto;
  max-width: ${(props) => props.theme.container.desktop};
`;

function NavBar() {
  return (
    <Container>
      <Content>
        <div>DevJobs</div>

        <div>Light/Dark</div>
      </Content>
    </Container>
  );
}

export default NavBar;
