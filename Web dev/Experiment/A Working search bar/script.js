document.addEventListener('DOMContentLoaded', () => {
    const textareaEle = document.getElementById('textarea');
    const originalHeight = textareaEle.style.height;
    const originalScrollHeight = textareaEle.scrollHeight;

    textareaEle.addEventListener('input', () => {
        if (textareaEle.value === '') {
            textareaEle.style.paddingBottom = `0px`;
            textareaEle.style.height = `${originalHeight}px`;
        }
        textareaEle.style.height = originalHeight;
        textareaEle.scrollHeight + originalHeight;

        console.log(textareaEle.scrollHeight);
        if (textareaEle.scrollHeight > originalScrollHeight && textareaEle.clientHeight > originalHeight){
            textareaEle.style.height = `${(textareaEle.scrollHeight)}px`;
            textareaEle.style.paddingBottom = `14px`;
        } else {
            textareaEle.style.paddingBottom = `0px`;
        }
    });
});