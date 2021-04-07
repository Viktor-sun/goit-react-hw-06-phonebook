import Loader from 'react-loader-spinner';

const Spinner = () => (
  <Loader
    type="Audio"
    color="#fbd62a"
    height={100}
    width={100}
    style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
);

export default Spinner;
