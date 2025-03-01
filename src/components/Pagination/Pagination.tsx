import { useEffect, useState } from 'react';
import { NotificationComponentVariant } from '../NotificationComponent/enums';
import { useNotificationStore } from '../../store/useNotificationStore/useNotificationStore';

interface IProps {
  currentPage: number;
  totalPages: number;
  handlePageJump: (inputPage: number) => void;
  onClickPrevPage: () => void;
  onClickNextPage: () => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onClickPrevPage,
  onClickNextPage,
  handlePageJump,
}: IProps) => {
  const { handleOpenNotification } = useNotificationStore();
  const [inputPage, setInputPage] = useState<number>(currentPage);

  useEffect(() => {
    setInputPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 mt-4 sm:mt-6 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={onClickPrevPage}
          disabled={currentPage === 1}
          className={`px-3 sm:px-4 py-2 text-sm sm:text-base bg-gray-300 text-gray-800 rounded ${
            currentPage === 1
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-400'
          }`}
        >
          Previous
        </button>

        <span className="text-gray-700 font-semibold text-sm sm:text-base">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={onClickNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 sm:px-4 py-2 text-sm sm:text-base bg-gray-300 text-gray-800 rounded ${
            currentPage === totalPages
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-400'
          }`}
        >
          Next
        </button>
      </div>

      <div className="flex items-center gap-2 sm:gap-2 sm:ml-4">
        <input
          type="number"
          value={inputPage}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (value <= totalPages && value >= 1) {
              setInputPage(value);
            } else {
              handleOpenNotification({
                message: `Please enter a number between 1 and ${totalPages}.`,
                variant: NotificationComponentVariant.INFO,
              });
            }
          }}
          onKeyDown={(e) => e.key === 'Enter' && handlePageJump(inputPage)}
          placeholder="Jump"
          className="w-16 sm:w-20 px-2 py-1 border border-gray-300 rounded text-center text-sm sm:text-base"
          min={1}
          max={totalPages}
        />
        <button
          onClick={() => handlePageJump(inputPage)}
          className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go
        </button>
      </div>
    </div>
  );
};
