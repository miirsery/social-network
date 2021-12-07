
const mobileLogo = document.querySelector('.header__mobile-logo')
const asideMobile = document.querySelector('.aside-mobile')

mobileLogo.addEventListener('click', (e) => {
    e.stopPropagation()
    togglemenu()
})

const togglemenu = () => {
    asideMobile.classList.toggle('aside-mobile--active')
}
document.addEventListener('click', e => {
    let target = e.target
    let its_menu = target == asideMobile || asideMobile.contains(target)
    let its_button = target == mobileLogo
    let menuIsActive = asideMobile.classList.contains('aside-mobile--active')

    if (!its_menu && !its_button && menuIsActive) togglemenu()
})