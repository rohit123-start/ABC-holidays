import React, { useState , useEffect }from 'react'

const Timer = () => {
    const [count, setCount] = useState(() => {
        // Step 7: Initialize count from local storage or 0 if not found
        const storedCount = localStorage.getItem('count');
        return storedCount ? parseInt(storedCount, 10) : 0;
      });

    // Step 5: Update the counter when the button is clicked
    const handleIncrement = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);

    // Step 8: Store the updated count in local storage
        localStorage.setItem('count', updatedCount.toString());
    };

    useEffect(() => {
        // Step 9: Update local storage when count changes
        localStorage.setItem('count', count.toString());
    }, [count]);
  return (
    <div>
      {/* Step 6: Display the current counter value */}
      <p>Counter: {count}</p>
      {/* Step 4: Create a button to trigger the increment */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Timer