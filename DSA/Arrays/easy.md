## Array
* It is a data structure with homogenous elements meaning same data type
* when we define array by default it contains 0 in global declaration but if we declare it in main then it contains garbage value
* max size is 10^6 in main and 10^7 in global
```
Note: 
* whenever we are being interviewed for DSA then if u know most optimal solution for the problem then u should not directly tell, first u need to solve using bruteforce then u should explain the most optimal solution
* and also u need to get a clear idea of the problem by asking the interviewer before attempting to answer
```
### Largest element in an array
* if we try to solve with bruteforce we can think of sorting then getting the last element gives largest element
* so if we think of optimal then we can take first element to be greater and compare it with rest of the elements that's all it geives largest element with O(n) time complexity 
```cpp
int max=a[0];
    for(int i=0;i<8;i++){
        if(max<a[i]){
            max=a[i];
        }
    }
```
### Second largest element in an array
* if we try to solve with bruteforce we can think of sorting then getting the second last element gives second largest element but we need to be careful if it is equal to largest element so we need to check for that by another loop coming from back if it is equal to largest element then it is not second largest element
* so if we think of optimal then we need to take the second max has largest when we change it to another element but again we need to be careful in some case we get lesser then largest but greater then second largest so we need to add else if condition too..
```cpp
int max=a[0];
    int secmax=-1;
    for(int i=0;i<8;i++){
        if(max<a[i]){
            secmax=max;
            max=a[i];
        }
        else if(a[i]<max && a[i]>secmax){
            secmax=a[i];
        }
    }
```
### check if the array is sorted
* we can just need to compare adjacent element by incrementing if it seems to be not ordered then it is not sorted
* time complexity is O(n)
```cpp
for(int i=0;i<8;i++){
        if(a[i]<=a[i+1]){
            
        }
        else{
            cout<<"not sorted";
            break;
        }
    }
```
### remove duplicates from an sorted array
* if we think of bruteforce then we can directly push overall elements of array one by one to set which only take unique elements and then copy the elements of set to array, time complexity is O(n) + O(nlogn)
* in optimal way we can take two pointers one from start and one from second and compare them if they are not equal then move the first pointer and add that second index element to first if not equal then move the second pointer
```cpp
int j=0;
    for(int i=1;i<=8;i++){
        if(a[i]!=a[j]){
            a[j+1]=a[i];
            j++;
        }
        i++;
    }
```
### Left rotate an array by one place
* just move elements from ith place i-1 place and initially store the first element to temp and push it to last place at last
* it has time complexity O(n) and space complexity O(1) 
```cpp
int temp=a[0];
    for(int i=1;i<8;i++){
        a[i-1]=a[i];
    }
    a[7]=temp;
```
### Left rotate an array by d places