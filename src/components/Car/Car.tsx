import { CarInfoHeader, CarInfoModel, CarInfoImage } from './Styles';

function Car() {
  return (
    <div>
      <CarInfoHeader>
        <h6>SUV</h6>
        <CarInfoModel>XC60 Recharge plug-in hybrid</CarInfoModel>
      </CarInfoHeader>
      <CarInfoImage src="/assets/xc90_recharge.jpeg" alt="car" />
    </div>
  );
}

export default Car;
