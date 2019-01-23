if [[ ! -d "userfiles" ]]
then
	if [ -L "userfiles" ]
	then
    	echo "./userfiles exists"
	else
		mkdir "./userfiles"
		echo "./userfiles created"
    fi
fi

if [[ ! -d "userfiles/file" ]]
then
	if [ -L "userfiles/file" ]
	then
    	echo "./userfiles/file exists"
	else
		mkdir "./userfiles/file"
		echo "./userfiles/file created"
	fi
fi

if [[ ! -d "userfiles/font" ]]
then
	if [ -L "userfiles/font" ]
	then
    	echo "./userfiles/font exists"
	else
		mkdir "./userfiles/font"
		echo "./userfiles/font created"
	fi
fi

if [[ ! -d "userfiles/html" ]]
then
	if [ -L "userfiles/html" ]
	then
    	echo "./userfiles/html exists"
	else
		mkdir "./userfiles/html"
		echo "./userfiles/html created"
	fi
fi

if [[ ! -d "userfiles/image" ]]
then
	if [ -L "userfiles/image" ]
	then
    	echo "./userfiles/image exists"
	else
		mkdir "./userfiles/image"
		echo "./userfiles/image created"
	fi
fi

if [[ ! -d "userfiles/pdf" ]]
then
	if [ -L "userfiles/pdf" ]
	then
    	echo "./userfiles/pdf exists"
	else
		mkdir "./userfiles/pdf"
		echo "./userfiles/pdf created"
	fi
fi

if [[ ! -d "userfiles/video" ]]
then
	if [ -L "userfiles/video" ]
	then
    	echo "./userfiles/video exists"
	else
		mkdir "./userfiles/video"
		echo "./userfiles/video created"
	fi
fi
