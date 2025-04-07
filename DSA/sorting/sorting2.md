## Sorting part 2
1. Merge sort
    * It is a better beacuse of time complexity and  it basically means divide and merge
    * at first we divide the array into two parts hypothetically with recursion
    * when the array remains with only one element where low == high then we return and then we merge the two parts
    * merge is different function where we merge the two parts from back tracking recursion
    * so we will take two pointers to each array and compare the left and right element and push the smaller one to the temp array and increment the pointer of that array until the left or 
    * at last we copy the temp array to the original array
    * mainly in recursion when we first divide the array into two parts the left part is handled by first recusion call that is low, mid and right part is handled by second recursion call that is mid+1, high
    * the time complexity is O(nlog base2 n) where n is for merge and log base2 n is for recursion
    * space complexity is O(n) where n is for temp array 
```cpp
void merge(int a[8],int low,int mid,int high){
    vector<int> temp;
    int left=low;
    int right=mid+1;
    while(left<=mid&&right<=high){
        if(a[left]<=a[right]){
            temp.push_back(a[left]);
            left++;
        }
        else{
            temp.push_back(a[right]);
            right++;
        }
    }
    while(left<=mid){
        temp.push_back(a[left]);
        left++;
    }
    while(right<=high){
        temp.push_back(a[right]);
        right++;
    }
    for(int i=low;i<=high;i++){
        a[i]=temp[i-low];
    }
}
void mergesort(int a[8],int low,int high){
    if(low>=high) return;
    int mid=(low+high)/2;
    mergesort(a,low,mid);
    mergesort(a,mid+1,high);
    merge(a,low,mid,high);
}
```
2. Quick sort
    * it is better then merge sort because it is better in space complexity 
    * First we need to pick a pivot element which can be any element then we need to place it in correct position meaning to its correct index in sorted order
    * to do it, we need to place all the elements smaller than pivot on left side of pivot and all the elements greater than pivot on right side of pivot and swap the pivot with correct index
    * so we select first element has pivot and then we take two pointer which one points to first element and other points to last element and first one searches for element greater than pivot and second one searches for element smaller than pivot if they both find them then we swap them if not then we move the pointer
    * time complexity is O(nlog base2 n) where n is for merge and log base2 n is for recursion
    ```cpp
    int quick(int a[8],int low,int high){
    int pivot=a[low];
    int i=low;
    int j=high;
    while(i<j){
        while(a[i]<=pivot&&i<=high-1){
            i++;
        }
        while(a[j]>pivot&&j>=low+1){
            j--;
        }
        if(i<j){
            int temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
    int temp=a[low];
    a[low]=a[j];
    a[j]=temp;
    return j;
    }
    void quicksort(int a[8],int low,int high){
    if(low<high){
        int p=quick(a,low,high);
        quicksort(a,low,p-1);
        quicksort(a,p+1,high);
    }
    }
```