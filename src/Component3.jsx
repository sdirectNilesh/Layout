import { useContext } from 'react';
import { UserContext } from './Context';

function Component3() {
  const value = useContext(UserContext);  

  return <span>My Name is {value}</span>;
}
export default Component3;