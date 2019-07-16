// Кредитная карта

// ввод только цифр
$(document).ready(function() {
	$('[name=quantity]').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
		this.value = this.value.replace(/[^0-9]/g, '');
		}
	});
});
// ввод только цифр конец

// переход к следующему input после заполнения
function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}
// переход к следующему input после заполнения конец

// Ввод только латинских букв
$(document).ready(function() {
	$('[name=en]').bind("change keyup input click", function() {
		if (this.value.match(/[^a-zA-Z ]/g)) {
		this.value = this.value.replace(/[^a-zA-Z ]/g, '');
		}
	});
});
// Ввод только латинских букв конец

// Кредитная карта конец
