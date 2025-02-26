import React, { useEffect, useState } from 'react'
export default function Naves() {
    const json_naves = [
        { "id": 1, "emoji": "🛸" },
        { "id": 2, "emoji": "🚀" },
        { "id": 3, "emoji": "🛰️" },
        { "id": 4, "emoji": "👾" },
        { "id": 5, "emoji": "✈️" },
        { "id": 6, "emoji": "🚁" },
        { "id": 7, "emoji": "🛫" },
        { "id": 8, "emoji": "🛸" },
        { "id": 9, "emoji": "🛩️" },
        { "id": 10, "emoji": "🛸" },
        { "id": 11, "emoji": "🚀" },
        { "id": 12, "emoji": "🛰️" },
    ]
    return (
        <>
            {json_naves.map((flyship) => (
                <div key={flyship.id} className={`rocket${flyship.id}`}>
                    {flyship.emoji}
                </div>
            ))}
        </>
    )
}