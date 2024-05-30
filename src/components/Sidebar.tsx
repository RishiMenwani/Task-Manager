// components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
    // Fetch board list from Redux store or API
    const boardList = ['Board 1', 'Board 2', 'Board 3']; // Example board list

    return (
        <div className="sidebar">
            <h2>Board List</h2>
            <ul>
                {boardList.map((board) => (
                    <li key={board}>
                        <Link href={`/board/${encodeURIComponent(board)}`}>
                            {board}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
