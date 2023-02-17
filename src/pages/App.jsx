import { Container } from '@mui/material';

import HeroSection from '@/components/HeroSection';
import WhyChoose from '@/components/WhyChoose';
import LatestArticles from '@/components/LatestArticles';

function App() {
  return (
    <Container maxWidth="">
      <HeroSection />
      <WhyChoose />
      <LatestArticles />
    </Container>
  );
}

export default App;
