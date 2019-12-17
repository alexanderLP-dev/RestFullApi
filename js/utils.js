export function appendStudent(data, targetElement) {
	let listItem = document.createElement('a');
	listItem.href = '';
	listItem.classList.add('list-group-item');
	listItem.innerText = `${data.lastname} ${data.firstname}`;
	listItem.setAttribute('data-id', data.id);

	targetElement.appendChild(listItem);
}