export interface ScrollWatcherProps {
    callback: (isOffScreen: boolean)=> void;
    margin?: string;
}

export function scrollWatcher(node: HTMLElement, {callback, margin='0px 0px 0px 0px'}: ScrollWatcherProps) { 
    const scrollWatcher = document.createElement('div');
    scrollWatcher.setAttribute('data-scroll-watcher', '');
    node.before(scrollWatcher);

    const navObserver = new IntersectionObserver(([watch])=> {callback(watch.isIntersecting)}, {rootMargin: margin});
    navObserver.observe(scrollWatcher);

    return {
        destroy() {
            navObserver.disconnect();
        }
    }
}
