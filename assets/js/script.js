function refactorElements() {
    const disableElements = document.querySelectorAll('.disable');

    for (const element of disableElements) {
        element.classList.add('disabled');
    }

    const enableElements = document.querySelectorAll('.enable');

    for (const element of enableElements) {
        element.classList.remove('enable');
    }
}

function encrypt() {
    const value = document.querySelector('.text').value;
    const separatedChar = value.split('');

    const encryptedText = [];

    for (const char of separatedChar) {
        switch (char) {
            case 'a':
                encryptedText.push('ai');
                break;
            case 'e':
                encryptedText.push('enter');
                break;
            case 'i':
                encryptedText.push('imes');
                break;
            case 'o':
                encryptedText.push('ober');
                break;
            case 'u':
                encryptedText.push('ufat');
                break;
            default:
                encryptedText.push(char);
        }
    }

    refactorElements();

    document.querySelector('.messagemEscondida').innerHTML = encryptedText.join('');

    if (!value) {
        document.querySelector('.messagemEscondida').innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('.text').value = '';
}

function decrypt() {
    const value = document.querySelector('.text').value;
    const decryptedText = value
        .replaceAll('ai', 'a')
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

    refactorElements();

    document.querySelector('.messagemEscondida').innerHTML = decryptedText;

    if (!value) {
        document.querySelector('.messagemEscondida').innerHTML = 'Nenhuma mensagem';
    }

    document.querySelector('.text').value = '';
}

function copy() {
    const value = document.querySelector('.messagemEscondida').innerHTML;
    navigator.clipboard.writeText(value);
    document.querySelector('.copy').innerHTML = 'Copiado!';
    setTimeout(() => {
        document.querySelector('.copy').innerHTML = 'Copiar';
    }, 1000);
}