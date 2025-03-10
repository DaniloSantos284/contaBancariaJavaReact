import {useState, useEffect} from React;


export const useOutsideClick = (e, initialState) => {
    const [isActive, setActive] = useState(initialState);

    useEffect(() =>{
        const onClick = e => {
            isActive(e.current !== null && e.current.contains(e.target))
            setActive(!isActive);
        }

        if(isActive){
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        }
    }, [isActive, e])

    return [isActive, setIsActive]
}
