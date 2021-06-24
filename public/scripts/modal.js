export default function Modal(){
    const modal = document.querySelector('.modal-wrapper')
    const cancel = document.querySelector('.cancel')

    // fechar modal com cancel 
    cancel.addEventListener('click', closeModal)

    // atribuir e retirar classe active do modal
    function openModal(){
        modal.classList.add('active')
    }
    function closeModal(){
        modal.classList.remove('active')
    }
    return {
        openModal
    }
}