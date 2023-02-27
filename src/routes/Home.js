import MatrixLogo from '../components/MatrixLogo/MatrixLogo';
import Clock from '../components/Clock/Clock';

const Home = () => {
  return (
    <div>
    	<MatrixLogo />
      <Clock />
      <h2 className="baskerville mt5 mb3 f4 ttu tracked">It's the question that drives us, It's the question that brought you here...</h2>
    </div>
  );
}

export default Home;