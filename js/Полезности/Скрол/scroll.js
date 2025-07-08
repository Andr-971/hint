
const { popapSearch, changePopapSearch } = usePopapSearchActive();
useEffect(() => {
    window.scroll(0, 0); // Первый параметр по оси x, второй по оси y
}, [popapSearch]);