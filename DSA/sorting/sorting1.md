## Sorting part 1
1. selection sort
    * in selection sort we find the smallest element and swap it with the first element which will be decreased for every outer loop
    * time complexity O(n^2) which is O(n) for outer loop + O(n+1/2) for inner loop
    ```cpp
    for(int i=0;i<n;i++){
        int min=i;
        for(int j=i;j<=n-1;j++){
            if(a[j]<a[min]){
                min=j;
            }
        }
        temp=a[min];
        a[min]=a[i];
        a[i]=temp;
    }
    ```
2. Bubble sort 
* we will be  keep pushing the largest element to the end of the array and we will leave the largest element for next loop by making n-i-1
* time complexity O(n^2) similar to selection sort
* but we can optimize it by using flag for best case where it involves no swapping in first loop so not required to go to next loop
```cpp
for(int i=0;i<n;i++){
        int didswap=0;
        for(int j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
                didswap=1;
            }
        }
        if(didswap==0){
            break;
        }
    }
```
3. Insertion sort
* we will consider a small array and we will keep increasing its size by one element at a time
* when i increase it again i will compare all the elements to the left of it and will insert it in the correct position
* time complexity O(n^2) for worst case and O(n) for best case
```cpp
for(int i=0;i<n;i++){
        int j=i;
        while(j>0 && a[j-1]>a[j]){
            temp=a[j];
            a[j]=a[j-1];
            a[j-1]=temp;
            j--;
        }
    }
```