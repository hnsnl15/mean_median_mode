# Mean, Median, & Mode API
## A simple Express JS project to calculate the mean, median, and mode.
> Frontend application: https://mean-median-mode-frontend.vercel.app/

### Mean
> The mean (aka the arithmetic mean, different from the geometric mean) of a dataset is the sum of all values divided by the total number of values. It's the most commonly used measure of central tendency and is often referred to as the “average.”

To get "mean", use axios or fetch and put "arr" as a key with a value of an array of numbers.

+ API: https://pink-kind-dugong.cyclic.app/api/mean

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

+ API: https://pink-kind-dugong.cyclic.app/api/median

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

### Mode
> Mode is the most frequent number—that is, the number that occurs the most frequently. Example: The mode of nt, 2, 4, 3, 2, 2 is 2 because it occurs three times, which is more than any other number.

To get "mode", use axios or fetch and put "arr" as a key with a value of an array of numbers.

+ API: https://pink-kind-dugong.cyclic.app/api/mode

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
## Solution

### To get the Mean:

> For the mean or the average, I used the javascript method "reduce" to accumulate all of the numbers, add all of those numbers to get the total, and divide it by the array.length, or the count of numbers in the dataset and rounds it using "Math.round()".

```
export const mean = (array) => {
  /* This function can receive an array of numbers and can return the average of all numbers listed in that array. */
  
  const total = array.reduce((acc, num) => acc + num, 0);
  return Math.round(total / array.length);
};
```
### To get the Median:

> To get the median, I have used the sort method to arrange the array from least to greatest. And then after that, I get the index of two numbers in the middle if the length or count of the dataset is "even," and then I add those numbers and get their average by dividing it. If the length of the dataset is "odd," you can just access the index of the middle number in the dataset by using brackets and putting in the index that you want to access.

> Note: The index should be a whole number that's why I used a "Math.floor()" to make it.

```
export const median = (array) => {
  /* This function can receive an array of numbers and can return the median of all numbers listed in that array. */
  const sortedArr = array.sort();
  const roundedIndex = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    const md1 = sortedArr[sortedArr.length / 2 - 1];
    const md2 = sortedArr[sortedArr.length / 2];

    const nums = md1 + md2;

    return ((nums / 2) * 100) / 100;
  }

  return sortedArr[roundedIndex];
};
```
### To get the Mode:

> Getting the mode is one of the trickiest parts of this because you have to find the most frequent number in the dataset, and if all of the numbers tie for the most frequent count within the dataset, you have to also add it to the list of output you want to return.

> I used the same Javascript method I used previously: I sorted it first, iterated on all numbers in the array, added those numbers to an object, put the number in a key, and the value would be the count of its appearance in the array.

> The output would be like this:

> Example array: [1, 1, 1, 2, 2, 2, 3, 3]

```
{
"1": 3, 
"2": 3, 
"3": 1
} // output 
```

> Then I take the values of the object it created, put them in an array, sort them from least to greatest, and if the number is the last count, it is the most frequently occurring number in the array.

> And then from there, you can now access the object using that value and find all of the keys that have the value using the filter method.

> It will produce an array, and you can return it. Example: [1, 2] // output

```
export const mode = (array) => {
  /* This function can receive an array of numbers and will return an array of numbers with the most frequency. */
  array.sort();
  let count = {};

  array.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });

  const arrOfObjectValuesSorted = Object.values(count).sort();

  const result = Object.keys(count).filter(
    (n) => count[n] === arrOfObjectValuesSorted[arrOfObjectValuesSorted.length - 1] && count[n] > 1
  );

  return result;
};
```
### Feel free to suggest some change.
> Contact me at laohenson@outlook.com.

### Reference Links
+ [MDN](https://developer.mozilla.org/en-US/)
+ [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
+ [reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?qs=reduce)
+ [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length?qs=leng)
+ [filter method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?qs=filter)
+ [forEach method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?qs=forEA)
+ [Object keys](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?qs=object%20keys)
+ [Object values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values?qs=object%20val)
