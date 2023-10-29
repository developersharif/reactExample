import 'animate.css';
import { memo , useState, useEffect} from "react";
function ViewWithmemo({value}) {
    const [animate, setAnimate] = useState('');
  useEffect(() => {
    setAnimate('animate__animated animate__bounce');
    const animationTimeout = setTimeout(() => {
      setAnimate('');
    }, 600);
    return () => clearTimeout(animationTimeout);
  }, [value]);

    return (
        <div className={animate}>
        {value}
        </div>
    );
}
export default memo(ViewWithmemo);