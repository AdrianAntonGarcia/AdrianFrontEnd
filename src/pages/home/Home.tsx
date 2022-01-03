import { AagModal } from '../../components';

interface Props {}

export const Home = (props: Props) => {
  const onSuccess = (value: string) => {
    console.log('success');
  };
  return (
    // <div className="container">
    //   <button type="button" className="btn btn-primary">
    //     Primary
    //   </button>
    //   <img
    //     src="/assets/homepage.jpg"
    //     alt="Under construction"
    //     style={{ marginTop: '10%', height: '300px', width: '400px' }}
    //   />
    // </div>´
    <AagModal onSuccess={() => onSuccess('adsa')} />
  );
};
