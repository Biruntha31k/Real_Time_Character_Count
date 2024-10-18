const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const warning = document.getElementById('warning');
const maxChars = 200;

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength}/${maxChars} characters`;

    if (currentLength >= maxChars) {
        warning.textContent = 'You have reached the maximum character limit!';
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});
