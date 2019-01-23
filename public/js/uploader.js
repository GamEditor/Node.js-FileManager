function uploadToServer(form, uploadProgressDisplayerId)
{
    let formData = new FormData(form);

    let xhr = new XMLHttpRequest();
    
    xhr.open(form.method, form.action, true);
    
    xhr.upload.addEventListener('progress', function(ev)
    {
        let progress = ev.loaded / ev.total * 100;

        if (ev.lengthComputable)
        {
            uploadProgressDisplayerId.style.width = `${progress}%`;

            if(progress == 100)
            {
                alert('Your file is uploaded successfuly');
            }
        }
        else
        {
            uploadProgressDisplayerId.style.width = 0;
            console.log('the length is not calcutable!');
        }
    });

    xhr.send(formData);
}