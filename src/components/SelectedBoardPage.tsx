// components/SelectedBoardPage.tsx
import React from 'react';

interface SelectedBoardPageProps {
    boardName: string;
}

const SelectedBoardPage: React.FC<SelectedBoardPageProps> = ({ boardName }) => {
    return (
        <div className="selected-board-page">
            <h2>{boardName}</h2>
            {/* Display columns and tasks for the selected board */}
        </div>
    );
};

export default SelectedBoardPage;
