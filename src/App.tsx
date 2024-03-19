import './App.css';
import wheelAndWrenches from './images/wheel-and-wrenches2.svg';
import wheel from './images/wheel2.svg';
import title from './images/title2.svg';
import yellewBlue from './images/yellow-blue.svg';
import wheelFadeInOut from './images/wheel-fadeInOut2.svg';
import darkCircle from './images/dark-circle.svg';

const App = () => {
  const handleGroupClick = () => {
    const group = document.getElementById('group');
    if (group) {
      group.classList.add('active');

      setTimeout(() => {
        group.classList.remove('active');
      }, 1500);
    }
  };
  return (
    <div id='container'>
      <div>
        <svg
          id='mainCanvas'
          width='450'
          height='450'
          onClick={handleGroupClick}
        >
          <g id='group'>
            <image
              id='yellowBlue'
              href={yellewBlue}
              height='350'
              width='350'
              x='50'
              y='50'
            />
            <image
              id='wheelAndWrenches'
              href={wheelAndWrenches}
              height='350'
              width='350'
              x='50'
              y='50'
            />
            <image
              id='darkCircle'
              href={darkCircle}
              height='350'
              width='350'
              x='50'
              y='50'
            />
            <image
              id='wheel'
              href={wheel}
              height='350'
              width='350'
              x='50'
              y='50'
            />
            <image
              id='wheelFadeInOut'
              href={wheelFadeInOut}
              height='350'
              width='350'
              x='50'
              y='50'
            />
            <image
              id='title'
              href={title}
              height='350'
              width='350'
              x='50'
              y='50'
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default App;
