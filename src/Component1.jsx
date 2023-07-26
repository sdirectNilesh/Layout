/* providing the context*/
import Component2 from './Component2';
import Component3 from './Component3';
import { AdminContext, UserContext } from './Context';



function Component1() {
    const name = 'Nilesh';
    const yname = "Giri";
    return (
        <>
            <UserContext.Provider value={name}>
                <Component3 />
            </UserContext.Provider>
            <br></br>
            <AdminContext.Provider value = {yname}>
                <Component2 />
            </AdminContext.Provider>
        </>
    );
}
export default Component1;