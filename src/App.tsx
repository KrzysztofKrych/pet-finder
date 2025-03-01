import './App.css';
import { NotificationComponent } from './components/NotificationComponent/NotificationComponent';
import { useAnimalsStore } from './store/useAnimalsStore/useAnimalsStore';
import { useEffect } from 'react';
import { AnimalsCardContainer } from './components/AnimalsCardContainer/AnimalsCardContainer';
import { Pagination } from './components/Pagination/Pagination';

function App() {
  const {
    handleGetAnimals,
    animals,
    currentPage,
    handleSetCurrentPage,
    totalPages,
    isFetching,
  } = useAnimalsStore();

  useEffect(() => {
    handleGetAnimals();
  }, [handleGetAnimals]);
  return (
    <>
      <AnimalsCardContainer animals={animals} isFetching={isFetching} />
      {!isFetching && (
        <Pagination
          handlePageJump={(newPage) => handleSetCurrentPage(newPage)}
          currentPage={currentPage}
          totalPages={totalPages}
          onClickPrevPage={() => handleSetCurrentPage(currentPage - 1)}
          onClickNextPage={() => handleSetCurrentPage(currentPage + 1)}
        />
      )}
      <NotificationComponent />
    </>
  );
}

export default App;
