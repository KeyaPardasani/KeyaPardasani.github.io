
function toggleTheme(){
    bodyId = document.getElementById('body');
    if(bodyId.classList.contains('dark-mode')){
        bodyId.classList.remove('dark-mode');
    }
    else
        bodyId.classList.add('dark-mode');
}
document.getElementById('toggleButton').onclick = toggleTheme;