import { Container, Logo } from './styles';
import { Highlight } from '@components/Highlight';

// import logoImg from '@assets/logo.png';
// import logoImg from '@assets/logo.svg';
// import logoImg from '@assets/logo.png';
// import logoPex from '@assets/logo_pex_b.svg';
import logoPex from '@assets/logo-pex.png';

export function OnBoarding() {

  return (
    <Container>
      {/* <Highlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      /> */}
      {/* <Logo source={logoImg}/> */}
      <Logo source={logoPex}/>

    </Container>
  );
}