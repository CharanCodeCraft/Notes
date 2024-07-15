## Basics of Network
* network - It is a number of nodes connected to share data or to communicate
* nodes - computer or other systems.
* Types of network
  - LAN(localareanet)
   -small area like room,campus by ethernet.
  - WAN(wideareanet)
   -wider area like countries,cities.
  - MAN(Metropolia area network
## Networking devices
* Router is a device which transfer data from one LAN to another LAN and to WAN.To go to another network it uses a routing table.
* Gateway when the data which need to be transferred to a computer outside the LAN then it uses gateway as a gate.
* In home network router will be the gateway.In corporate company firewall will be the gateway.
* Proxy server is a computer which acts as a intermidater between two computer.to bypass few restriction to access the destination computer we use proxy server.
  The proxy server will have the info of who accessed the server.
* Private network is a network which is not in internet and use the system under that network we should be physically present there.
* VPN(virtual private network)-extends the private network across a public network(usually Internet) and enables users to send and recieve data across shared or public network as if their computing devices were directly connected to the private network.
## DNS,MAC and IP
* DNS(Domain name system)-The name given to server ip address like..
www.google.com  - 74.125.29.101
www.facebook.com - 157.240.13.35
* DNS working--
    * There are different levels of DNS servers like root,top level domain server
    * The browser asks for the domain resolution then the ip address of the server is obtained from DNS servers and then connected to the obtained server
* MAC Address - physical address.It is a permanent address, In hexadecimal.48 bit.
* ARP - address resolution protocol-protocol is used to find the mac address of other system using its ip.
* IP(Interner protocal)- address is unique address given to s system connected to internet
* IPV4-32bit-IPv4 is in decimal form
* IPv6-128bit-IPv6 is in hexadecimal with alaphbets.
* IPV4 as four groups 0 to 255.
```
class  subnet mask    no.of host    no.of nodes           start and end 
                                     per net                address   
  A     255.0.0.0        16million     127            1.0.0.0 - 126.225.225.225
  B     255.255.0.0       65000        16000        128.0.0.0 - 191.225.225.225
  C     255.255.255.0     254          2million     192.0.0.0 - 223.225.225.225
  D     reserved                                    224.0.0.0 - 239.225.225.225
  E     reserved for                                240.0.0.0 - 254.225.225.225
        future                                       
```

* privte iP address - to communicate within the local network
* Public ip address - to communicate with outer internet

```
class  private ip address range
  A     10.0.0.0 - 10.255.255.255
  B      172.16.0.0 - 172.31.0.0
  C      192.168.0.0 - 192.168.255.255          
```
* NAT - network address translation-is a process in which one or more local private Ip address is translated into one or more global public IP address and vice versa in order to provide access to internet to the local host. 
```
      NAT translation table
Privte IP,port         public IP,port
192.168.100.3,3855     145.12.131.7,6282
            Static NAT
1private IP is specifically translated into 1public IP
public IP address      private IP adress
172.12.18.101         -      192.168.0.101
172.12.18.102         -      192.168.0.102
172.12.18.103         -      192.168.0.103
            Dynamic NAT
Group of privateIP is specifically translated into 1group of publicIP
public IP address    Private IP address
172.12.18.101              192.168.0.101
172.12.18.102              192.168.0.102
172.12.18.103              192.168.0.103
```
## OSI and TCP model
* OSI - open system interconnect
* TCP - transmission control protocal
* 7 layers of OSI
```
  *sender	          *TCP/IP                                      *reiceiever
7.application                                                   1.physical
6.presentation     4.application                                2.data link
5.session   	                                                  3.network
4.transort         3.transport                                  4.transort        
3.network          2.internet                                   5.session
2.data link        1.network interface                          6.presentation
1.physical                                                      7.application
```
* sender msg
     * application - transfer to nxt layer by the browser used.
     * presentation layer - converts into standerize form.
     * session - creats session in recevier system.
     * transport - takes the above 3 layer info,helps in no loss of data.it will be in segment in a small peace.
     * network - adds sender and recevier ip address to the up info.it converts into packet.
     * datalink - adds sender and recevier mac address(physical address).it adds error list to know the error to reciever.in frames.
     * physical - converts data into 0 and 1. thn travells the media like wirless,wire.
* reciver - vica-versa
* networking devices of layer 1,2,3.
  1. physical layer - modem - converts one technology into another techonology.converts data into 0,1.
  2. data link layer - switch - works with mac address.
  3. network - router - sends data from one network to another with IP.
## Ports
* ports are like human communiction done by mouth by saying and ear listner.
* ports are used get information and send information.
* Ports - to enter or exit potrs are used.
* total65,535 ports 
   * 1 to 1024 recerved ports bcuz it has seprate function.
   * 1025 to 65535 -dynamic ports
- Protocol
   - TCP - transmission control protocol - it report the result to sender
   - UDP - user datagram protocol - it won't 
- TCP protocal
      - TCP flags
           * syn-synchronize,ack-acknowledgement,rst-reset,fin-finish,urg-urgent,psh-push.
      - connection establishment
           * sender send syn packet,reciever send syn and ack to tell syn packet reached.
      - Three way handshake to establishment connection and to end connection.
      - end connection-sender send fin packet to finish,recever send fin and ack to tell fin packet reached.
      - urgent-to send packet faster.
* Commonly used port numbers
     - HTTP-TCP 80
     - HTTPS-TCP 443
     - FTP-TCP20,21-file transfer protocal
     - SSH-TCP22-secure shell terminal
```
source IP : source port    Destination iP: port
192.168.1.5 : 1234             192.168.1.9 : 5678
combination of IP and port are called sockets.
```












