document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percent = (event.loaded / event.total) * 100;
                progress.value = percent;
            }
        });

        xhr.onload = () => {
            if (xhr.status === 200) {
                alert('Файл успешно загружен!');
                progress.value = 0;
            } else {
                alert('Ошибка при загрузке файла.');
            }
        };

        xhr.send(formData);
    });
});





