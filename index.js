// defining current_tab_title() func which will get the tab title and add it to the DOM.

const current_tab_title = () => {

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        // this query checks Whether the tabs are active in their windows and also in the current window.
        // then it requires a callback func. in which tabs parameter is to be passed.
        // console.log(tabs);
        var activeTab = tabs[0];
        // getTitle();
        const title = document.querySelector("#get-title");
        title.innerHTML = `<h2>Title of current Tab is :</h2> <h3>${activeTab.title}</h3>` ;
     });
}

button.addEventListener('click', current_tab_title); // when button is clicked, current_tab_title() func. is called