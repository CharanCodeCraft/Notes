from pwn import *
import sys
if len(sys.argv)!=2:
    print("invalid arguments")
    exit()
wanted_hashes=sys.argv[1]
attempts=0
with log.progress("Attempting: ") as pro:
    with open('rockyou.txt','r') as p:
        for passwords in p:
            password=passwords.strip().encode(encoding='utf-8')
            passwords_hash=sha256sumhex(password)
            pro.status("[{}] {}={}".format(attempts,passwords_hash,wanted_hashes))
            if passwords_hash==wanted_hashes:
                pro.success("password found:{}".format(passwords))
                break
            attempts+=1