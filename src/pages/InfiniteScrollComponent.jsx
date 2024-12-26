import React, { useState, useEffect, useRef } from 'react';

const InfiniteScrollComponent = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const loaderRef = useRef(null);

    // Function to generate more items
    const fetchMoreItems = () => {
        if (!hasMore) return;

        setTimeout(() => {
            const newItems = Array.from({ length: 10 }, (_, index) => `Item ${items.length + index + 1}`);
            setItems((prevItems) => [...prevItems, ...newItems]);

            // Stop loading if there are more than 100 items (example condition)
            if (items.length + newItems.length >= 100) {
                setHasMore(false);
            }
        }, 1000); // Simulate a network delay
    };

    // Intersection Observer to detect when the loader is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && hasMore) {
                    fetchMoreItems();
                }
            },
            { rootMargin: '50px', threshold: 1.0 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [loaderRef, hasMore]);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>

            {hasMore && (
                <div ref={loaderRef} style={{ textAlign: 'center', padding: '20px', fontSize: '16px' }}>
                    Loading more...
                </div>
            )}

            {!hasMore && (
                <div style={{ textAlign: 'center', padding: '20px', fontSize: '16px', color: 'gray' }}>
                    No more items to load
                </div>
            )}
        </div>
    );
};

export default InfiniteScrollComponent;
