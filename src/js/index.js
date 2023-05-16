document.addEventListener('DOMContentLoaded', () => {

    function setupDropdownMenus(buttonSelector, listSelector, tabObject, masivMarket) {
        const categories = document.querySelectorAll(tabObject);
        
        let currentCategory = null;
    
        categories.forEach((category) => {
            const button = category.querySelector(buttonSelector);
            const list = category.querySelector(listSelector);
    
            button.addEventListener('click', () => {

                categories.forEach((c) => {
                    if (c !== category) {
                        c.querySelector(listSelector).classList.remove('show');
                    }
                });
                list.classList.toggle('show');
                currentCategory = list.classList.contains('show') ? category : null;
                categories.forEach((c) => {
                    if (c !== category) {
                        c.style.display = currentCategory ? 'none' : 'block';
                    }
                });
                if (list.classList.contains('show')) {
                    const listItems = list.querySelectorAll('li');
                    let delay = 0.1;
                    listItems.forEach((item) => {
                        item.style.animationDelay = delay + 's';
                        delay += 0.1;
                    });
                }
            });
        }),
        document.addEventListener('click', (event) => {
        const tabsMarket = document.querySelector(masivMarket);
            if (!event.target.closest(masivMarket) && currentCategory) {
                currentCategory.querySelector(listSelector).classList.remove('show');
                currentCategory = null;
                tabsMarket.querySelectorAll(tabObject).forEach(category => {
                    category.style.display = 'block';
                });
            }
        });
    }
  
    setupDropdownMenus('.category-button', '.category-list', '.category', '.tabs-market');
    setupDropdownMenus('.list-button', '.list-unstyled', '.row-element', '.row');
    setupDropdownMenus('.list-buttonleft', '.list-unstyledleft', '.row-elementleft', '.row-left');

    function hideOllButNotSerch(serchButton, searchWrapperBlock, leftNavContainer, rightNavContainer, closeWraper) {
        var searchButton = document.querySelector(serchButton);
        var searchWrapper = document.querySelector(searchWrapperBlock);
        var buttonClose = document.querySelector(closeWraper);
        var rightNavObjects = document.querySelectorAll(rightNavContainer + ' > *');
        var leftNavObjects = document.querySelectorAll(leftNavContainer + ' > *');
        var serchInput = document.getElementById('serch-input');

        var screenWidth = window.innerWidth;

        searchButton.addEventListener('click', function() {
            rightNavObjects.forEach(function(element) {
                if (element !== searchWrapper) {
                element.style.display = 'none';
                }
            });
        
            leftNavObjects.forEach(function(element) {
                if (element !== searchWrapper) {
                element.style.display = 'none';
                }
            });

            serchInput.style.width = '90' + 'vi';
            serchInput.style.borderRadius = '50' + 'px';

            buttonClose.style.display = 'block';
            
            buttonClose.addEventListener('click', function() {

                rightNavObjects.forEach(function(element) {
                    if (element !== buttonClose) {
                        element.style.display = 'block';
                    }else{
                        element.style.display = 'none';
                    }
                    
                });
            
                leftNavObjects.forEach(function(element) {
                    if (element !== buttonClose) {
                        element.style.display = 'block';
                    }else{
                        element.style.display = 'none';
                    }
                });

                if(screenWidth < 958){
                    serchInput.style.width = '5' + 'vi';
                    serchInput.style.borderRadius = '10' + 'px';
                }else if(screenWidth >= 958){
                    serchInput.style.width = '2.5' + 'vi';
                    serchInput.style.borderRadius = '10' + 'px';
                }
            });
        });
    }

    hideOllButNotSerch('.search-button', '.search-wrapper', '.left-nav-continer', '.right-nav-continer', '.close-wraper');
});
