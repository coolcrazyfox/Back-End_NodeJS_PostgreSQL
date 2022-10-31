import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";

const config= {}

const useScroll = (root,hasScroll)=>{
    useEffect(() => {
        let scrollbars;

        if (root.current && hasScroll) {
            scrollbars = OverlayScrollbars(root.current, config);
        }

        return () => {
            if (scrollbars) {
                scrollbars.destroy();
            }
        }
    }, [root, hasScroll]);
}
export {useScroll}
