import os
class Filemanger():
    
    def __init__(self,config):
        self.config = int(config)-1
    
    def checkFileExist(self)-> None:
        if not os.path.exists("data.txt"):
            file = open("data.txt","w")
            file.writelines(["\n" for _ in range(9)])
            file.close()

    def save(self,upward,downward,forward,backward,right,left)-> bool:
        try:
            self.checkFileExist()
            file = open("data.txt","r")
            data = file.readlines()
            file.close()
            file = open("data.txt","w+")
            data[self.config] = f"{upward},{downward},{forward},{backward},{right},{left}\n"
            file.writelines(data)
            return True
        except Exception as e:
            print(e)
            return False
    
    def load(self):
        try:
            self.checkFileExist()
            file = open("data.txt","r")
            data = file.readlines()[self.config].split(",")
            if len(data)<3:
                return False
            data = {"up":data[0],"down":data[1],"forward":data[2],"backward":data[3],"right":data[4],"left":data[5][0]}
            return data
        except Exception as e:
            print(e)
            return False

