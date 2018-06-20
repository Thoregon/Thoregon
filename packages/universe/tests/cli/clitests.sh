#!/bin/bash
#####################################
# test command line and
# env variables for setup
#####################################

FAILS=0

echo -e "** Now required functions tested. No error messages should be shown!\n"

#####################################
# test working examples
#####################################
./test_setup1.js
if [ $? -gt 0 ]
then
  ((FAILS++))
fi

./test_setup2.js --stage PLAYGROUND --basedir conf/
if [ $? -gt 0 ]
then
  ((FAILS++))
fi

./test_setup3.js --cfg universe-mydev.js
if [ $? -gt 0 ]
then
  ((FAILS++))
fi

./test_setup6.js --let a=x b=y
if [ $? -gt 0 ]
then
  ((FAILS++))
fi

export STAGE="PRODUCTION"
./test_setup4.js
if [ $? -gt 0 ]
then
  ((FAILS++))
fi

echo -e "\n** Now intentional errors are tested. Error messages should be shown!\n"

#####################################
# now test (defined) errors
#####################################
./test_setup5.js --basedir ../xyz
if [ $? -eq 0 ]
then
  echo "** Err: Missing basedir accepted!"
  ((FAILS++))
fi

./test_setup5.js --cfg noconfig.js
if [ $? -eq 0 ]
then
  echo "** Err: Missing config accepted!"
  ((FAILS++))
fi

./test_setup5.js --stage XYZ
if [ $? -eq 0 ]
then
  echo "** Err: Stage XYZ accepted!"
  ((FAILS++))
fi

export STAGE="ABC"
./test_setup5.js
if [ $? -eq 0 ]
then
  echo "** Err: Stage ABC accepted!"
  ((FAILS++))
fi

#####################################
# if there were errors, report it
#####################################
if [ $FAILS -gt 0 ]
then
  echo -e "\n!! Errors: $FAILS"
  exit 1
else
  echo -e "\n** All Tests passed!"
fi