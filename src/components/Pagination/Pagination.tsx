import { useState } from 'react';
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
  return (
    <div className="flex justify-center items-center mt-6 gap-4">
      <button
        onClick={onClickPrevPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-gray-300 text-gray-800 rounded ${
          currentPage === 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-400'
        }`}
      >
        Previous
      </button>

      <span className="text-gray-700 font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <div className="flex items-center gap-2">
        <input
          type="number"
          value={inputPage}
          onChange={(e) => {
            const value = Number(e.target.value);

            if (value <= totalPages) {
              setInputPage(value);
            } else {
              handleOpenNotification({
                message: `The page number you entered exceeds the maximum allowed value. Please enter a number between 1 and ${totalPages}.`,
                variant: NotificationComponentVariant.ERROR,
              });
            }
          }}
          onKeyDown={(e) => e.key === 'Enter' && handlePageJump(inputPage)}
          placeholder="Jump to..."
          className="w-20 px-2 py-1 border border-gray-300 rounded text-center"
          min={1}
          max={totalPages}
        />
        <button
          onClick={() => handlePageJump(inputPage)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Go
        </button>
      </div>

      <button
        onClick={onClickNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-gray-300 text-gray-800 rounded ${
          currentPage === totalPages
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-400'
        }`}
      >
        Next
      </button>
    </div>
  );
};
