## Very basic things to remember
* In if-else if conditions, ones the if condition becomes true then all else-if condition will be ignored but in only if statements they won't be ignored
* While inputing string we can use cin for string without space and getline for with space 
* Array always starts with 0 index and it's last value can be accessed by len-1(i.e array.size()), even 2d array starts with 0 index
* All the primary data types are passed by value and other data types are passed by reference(which is like links to the same data type)

## C++ STL(standard template libray)
* stl is used to create containers and algorithms
* Containers are used to store data and algorithms are used to do operations on data
* stl provides following containers vector, list, set, map, multimap, multiset,stack,queue,priority_queue
* these different containers are used to store data in different ways
* stack is used to store data in LIFO order and queue is used to store data in FIFO order
* they have different functions like push,pop,insert,erase,find,sort,reverse,merge,swap,lower_bound,upper_bound,find_first_of,find_last_of,find_end
#### Different containers and iterators
* pairs are used to store data in a pair of values
```cpp
 pair<int,pair<int,int>> a[]={{1,{2,3}},{2,{4,3}}};
    cout<<a[0].second.first<<endl;
```
* vector is used to store data in contiguous memory locations
    * it contains different function like push_back, pop_back, insert, erase, clear, size, capacity, resize, empty, begin, end, rbegin, rend, at, front, back
```cpp
vector<int> b;
    b.push_back(10);
    cout<<b[0]<<endl;
    b.emplace_back(20);
    cout<<b[1]<<endl;
    vector<pair<int,int>> c;
    c.push_back({1,2});
    cout<<c[0].first<<endl;
    vector<int>::iterator it=b.begin();
    it++;
    cout<<*(it)<<endl;
    for(vector<int>::iterator  i=b.begin();i!=b.end();i++){
        cout<<*(i)<<endl;
    }
    for(auto i=b.begin();i!=b.end();i++){
        cout<<*(i)<<endl;
    }
    for(auto i:b){
        cout<<i<<endl;
    }
    b.insert(b.begin(),0);
    b.insert(b.begin()+1,2,15);
    for(auto i:b){
        cout<<i<<endl;
    }
    cout<<b.size()<<endl;
    b.pop_back();
```
* list is very similar to vector but it has extra function to push front and pop front
```cpp
 list<int> d;
    d.push_back(10);
    d.push_front(0);
    cout<<d.back()<<endl;
    for(auto j:d){
        cout<<j<<endl;
    }   
```
* stack is used to store data in LIFO order
    * it contains different function like push, pop, top, size, empty
```cpp
stack<int> s;
    s.push(10);     
    cout<<s.top()<<endl;
    s.pop();
    cout<<s.top()<<endl;
    cout<<s.size()<<endl;
    cout<<s.empty()<<endl;
```
* queue is used to store data in FIFO order
    * it contains different function like push, pop, front, back, size, empty
```cpp
queue<int> q;
    q.push(10);     
    cout<<q.front()<<endl;
    q.pop();
    cout<<q.front()<<endl;
    cout<<q.size()<<endl;
    cout<<q.empty()<<endl;
```
* priority_queue is used to store data in a priority order
    * it contains different function like push, pop, top, size, empty
```cpp
priority_queue<int> q;
    q.push(10);     
    cout<<q.top()<<endl;
    q.pop();
    cout<<q.top()<<endl;
    cout<<q.size()<<endl;
    cout<<q.empty()<<endl;
```
* set is used to store data in a sorted order and to store contain only unique values
    * it contains different function like insert, erase, find, size, empty
    * set is a non-contiguous data structure
    * if u use find function it will return an iterator to the element if it is present in the set else it will return an iterator to the position next to last element
```cpp
set<int> s;
    set<int>s;
    s.insert(10);
    s.insert(1);
    s.insert(2);
    auto f=s.find(10);
    int ct=s.count(1);//returns 1 or 0
```
* multiset is used to store data in a sorted order and to store contain duplicate values    
    * it contains different function like insert, erase, find, size, empty
    * it takes log(n) time for all operation
```cpp
 multiset<int>ms;
    ms.insert(10);
    ms.insert(20);
    ms.insert(30);
    ms.insert(20);
    ms.erase(ms.find(20));//ersases the first 20
    ms.count(20);
```
* unordered_set is used to store data in a unsorted order and to store contain only unique keys
    * it takes O(1) time for all operation
    * in worst case it takes O(n) time 
* map is used to store data in a key-value pair and only unique keys
    * and also it stores key in sorted order
    * it contains different function like insert, erase, find, size, empty
```cpp
 map<int,int>mp;
    map<int,pair<int,int>>mp1;
    map<pair<int,int>,int>mp2;
    mp[1]=2;
    mp.insert({2,3});
    mp.emplace(3,4);
    mp2[{1,2}]=20;
    for(auto i:mp){
        cout<<i.first<<" "<<i.second<<endl;
    }
```
* multimap is used to store data in a key-value pair and to store contain duplicate keys    
    * it contains different function like insert, erase, find, size, empty
    * it takes log(n) time for all operation
```cpp
 multimap<int,int>mm;
    mm.insert({1,2});
    mm.insert({2,3});
    mm.insert({2,4});
    mm.erase(mm.find(2));
    mm.count(2);
```
* unordered_map is used to store data in a key-value pair and to store contain only unique keys 
    * it takes O(1) time for all operation
    * in worst case it takes O(n) time

#### Different algorithms
* mainly we are using pre-built sorting
```cpp
vector<int> so;
    so.push_back(10);
    so.push_back(5);
    so.push_back(2);
    so.push_back(20);
    sort(so.begin(),so.end());//in asending
    for(auto i:so){
        cout<<i<<endl;
    }
    sort(so.begin(),so.end(),greater<int>());// in descending
    for(auto i:so){
        cout<<i<<endl;
    }
    vector<pair<int,int>> p={{1,2},{3,2},{1,1}};
    //sort with any condition 
    sort(p.begin(),p.end(),cmp);
    for(auto i:p){
        cout<<i.first<<" "<<i.second<<endl;
    }
```

## Basic maths 
1. Based on extracting digits   
    1. counting digits
        * To count the number of digits in a number one way is to divide the number by 10 and count the number of times it is divisible by 10 by running loop
        * another way is to use log10 function
        * and the time complexity is O(log10(n)) bcuz the loop is running for number of digits in the number
        * whenever we get division in a loop the time complexity is log(n) with it's base has the number that is dividing
    2. reversing the number
        * just multiply the number by 10 and add the digit
    3. check palindrome
        * just compare the number with its reverse
```cpp
int n,d,c,c1,rev=0,sum=0;
    cout<<"enter the number: ";
    cin>>n;
    int dup=n;
    c1=(int)(log10(n)+1);
    while(n>0){
        d=n%10; 
        n=n/10;
        c++;
        rev=(rev*10)+d;
        sum=sum+d*d*d;
    }
    cout<<"the number of digits in number: "<<c<<endl;
    cout<<"the number of digits in number: "<<c1<<endl;  
    cout<<"the reversal of the number is: "<<rev<<endl<<sum<<endl; 
    if(rev==dup) cout<<"palindrome:true"<<endl;
    else cout<<"palindrome:false"<<endl;
    if(sum==dup) cout<<"armstrong:true"<<endl;
    else cout<<"armstrong:false"<<endl;
```
2. Based on factors
    1. find the factors of a number
        * just loop from 1 to the number and check if the number is divisible by i
        * but the time complexity is O(n) so to optimize it we can use sqrt(n)
    2. find the prime factors of a number
        * just loop from 2 to the square root of the number and check if the number is divisible by i and increase the count
```cpp
int n,d,c=0;
    vector<int> div;
    cout<<"enter the number: ";
    cin>>n;
    cout<<"divisible by: ";
    for(int i=1;i<=sqrt(n);i++){
        if(n%i==0){
            div.push_back(i);
            c++;
            if((n/i)!=1){
                div.push_back((n/i));
                c++;
            }
        }
    }
    sort(div.begin(),div.end());
    for(auto i:div){
        cout<<i<<" ";
    }
    if(c==2) cout<<"prime:true"<<endl;
    else cout<<"prime:false";
```
3. GCD of two numbers
    * just loop from 1 to the smallest number and check if the number is divisible by i but this is not better just loop from smallest number to 1 to get the gcd faster 
    * but still it takes O(n) time so to optimize it we can use Euclidean algorithm
    * which has a time complexity of O(logphi(min(a,b)))
```cpp
int a=4,b=5;
    while(a>0 and b>0){
        if(a>b) a=a%b;
        else b=b%a;
    }
    if(a==0) cout<<b<<" is the gcd";
    else cout<<a<<" is the gcd";
```