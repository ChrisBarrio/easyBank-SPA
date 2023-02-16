import { Container } from '@mui/material';

import Header from '@/components/Header';
import  HeroSection  from '@/components/HeroSection';
import  WhyChoose  from '@/components/WhyChoose';
import  LatestArticles  from '@/components/LatestArticles';
import Footer from '@/components/Footer';

function App() {
  return (
    <Container maxWidth="">
      <Header />
      <HeroSection />
      <WhyChoose/>
      <LatestArticles/>
      <Footer   />
    </Container>
  );
}

export default App;
