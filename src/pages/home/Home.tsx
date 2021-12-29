interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="container">
      <img
        src="/assets/homepage.jpg"
        alt="Under construction"
        style={{ marginTop: '10%', height: '300px', width: '400px' }}
      />
    </div>
  );
};
