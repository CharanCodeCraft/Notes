# Bash Notes
## Shell basics
* Bash is a Unix shell(it is program which executes binary that takes cmd that you type to kernal understandable form)
* Hardware(CPU,Mouse)<-Kernal(linux)<-OS(Ubuntu)<-User
* Bash inerprets to kernal directly to run specific cmd
* Terminal is different from bash it is just a interface for user to type cmd's
* To check for shells in system `cat /etc/sh`

## Filesystem and permission
**Flowchart of filesystem**
![Flowchart](/Bash%20for%20beginner/images/linux-filesystem.png)
* `bin` - executable binaries are present here
* `boot` - booting files for os
* `dev` - external device connected
* `etc` - configuration files are present here
* `home` - user files created for os
* `lib` - libraries related programs
* `root` - root user directory
* `usr` - it containes binary file and lib of user

**Permissions**
* File permission `drwxrwxrwx`
* first character represents 'd' if directory or '-' if not
* nxt 3 represents permissions for file owner who created it
* nxt 3 is for groups
* nxt 3 is for other user
* to change per use `chmod o-r filename` o is for others and -r to delete read permission
* to change using numbers remember `rwx as 421` then add the  numbers for permission required add for all, example `chmod 760` meaning 7 for owner,6 for group and 0 for others
* to change owner and group of file  `chown username filename` and `chgrp username filename`, for dir use -r flag 

## User cmd's and pipeing
**User cmd's**
* `who` cmd gives all users
* `id` cmd used to find userid and grpid of current user(for root uid=0)
* `passwd` to change password of current user
* `adduser username` to add user(the added user will not be in sudoers file means u can't use sudo cmd so to add it sudo use sudo with above cmd)
* `userdel username` to delete user

**Pipeing and I/O redirection**
* to redirect output of one cmd to another file use `>` Ex: `echo "Hello" > red.txt` but to append use `>>` and redirect error also use `2>`
* pipeing means inputing output of one cmd to another cmd using `|`
