cd src
for i in $(find . -iname "*.ts"); do tslint $i; done
for i in $(find . -iname "*.tsx"); do tslint $i; done
cd ..