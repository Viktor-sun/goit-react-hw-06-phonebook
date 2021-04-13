import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="Grid"
    color="#2641da"
    height={100}
    width={100}
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
    }}
  />
);

export default Spinner;
