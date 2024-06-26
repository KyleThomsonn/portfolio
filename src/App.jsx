import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import AnimatedCursor from 'react-animated-cursor'
import { Snowfall } from 'react-snowfall'
import { useState, useEffect } from 'react'

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <div>
      {!isMobile && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#554EEF",
            zIndex: 10000
          }}
          outerStyle={{
            border: "3px solid #FA4B4C",
            zIndex: 10000
          }}
        />
      )}
        <Snowfall
            snowflakeCount={4}
            radius={[100,120]}
            wind={[-0.5, 2]}
            speed={[0.5, 1]}
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            zIndex: '-100',
            filter: 'blur(30px)'
          }}
        />
      <AppRouter />
    </div>
  )
}

export default App
