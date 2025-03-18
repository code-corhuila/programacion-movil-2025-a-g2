import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <strong>Ready to create an app?</strong>
      <div className="card">
      <h2>New Shopping Cart App</h2>
      <p>Discover the new way to shop with our mobile app. Enjoy a seamless and intuitive shopping experience right at your fingertips.</p>
      </div>  
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
