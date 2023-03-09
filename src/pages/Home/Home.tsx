import Card from '../../components/Card/Card';
import { Content } from './Styles';

function HomePage() {
  return (
    <Content>
      <Card
        title="SUV"
        description="XC60 Recharge plug-in hybrid"
        imageSrc="/assets/xc90_recharge.jpeg"
        imageAlt="car"
      />
    </Content>
  );
}

export default HomePage;
