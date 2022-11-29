# Mean, Median, & Mode API
## A simple Express JS project to calculate the mean, median, and mode.

### Mean
> The mean (aka the arithmetic mean, different from the geometric mean) of a dataset is the sum of all values divided by the total number of values. It's the most commonly used measure of central tendency and is often referred to as the “average.”

To get "mean", use axios or fetch and put "arr" as a key with a value of an array of numbers.

https://pink-kind-dugong.cyclic.app/api/mean

```
 const getMean = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/mean`, {
        arr: arrOfNum,
      });

      const output = await response?.data?.result!;
      setResult(`The mean is ${output}.`);
    } catch (error: any) {
      setResult(error?.response?.data?.message! || error.message);
    }
  };
```

### Median
> The median is the value that's exactly in the middle of a dataset when it is ordered. It's a measure of central tendency that separates the lowest 50% from the highest 50% of values. The steps for finding the median differ depending on whether you have an odd or an even number of data points.

To get "median", use axios or fetch and put "arr" as a key with a value of an array of numbers.

https://pink-kind-dugong.cyclic.app/api/median

```
 const getMedian = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/median`, {
        arr: arrOfNum,
      });

      const output = await response?.data?.result!;
      setResult(`The median is ${output}.`);
    } catch (error: any) {
      setResult(error?.response?.data?.message! || error.message);
    }
  };
```

### Mean
> Mode is the most frequent number—that is, the number that occurs the most frequently. Example: The mode of nt, 2, 4, 3, 2, 2 is 2 because it occurs three times, which is more than any other number.

To get "mode", use axios or fetch and put "arr" as a key with a value of an array of numbers.

https://pink-kind-dugong.cyclic.app/api/mode

```
 const getMode = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/mode`, {
        arr: arrOfNum,
      });

      const output = await response?.data?.result!;
      setResult(output.length ? `The mode is ${output}.` : "There is no mode.");
    } catch (error: any) {
      setResult(error?.response?.data?.message! || error.message);
    }
  };
```
