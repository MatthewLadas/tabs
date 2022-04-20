const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
	// Hide all tab panels
	tabPanels.forEach(panel => {
		panel.hidden = true;
	});

	// Mark all tabs as unselected
	tabButtons.forEach(tab => {
		tab.setAttribute('aria-selected', false); // tab.ariaSelected = false; DOESN'T WORK
	});

	// Mark the clicked tab as selected
	e.currentTarget.setAttribute('aria-selected', true);

	// Find the associated tabPanel and show it
	const id = e.currentTarget.id;
	const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
	tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
