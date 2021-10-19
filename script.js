const card = document.querySelectorAll('.cards');
card.forEach((tab)=>{
tab.addEventListener('click',()=>{
	removeExpand();
tab.classList.add("expand");
});
});
function removeExpand(){
	card.forEach((cards)=>
		cards.classList.remove('expand'));
}