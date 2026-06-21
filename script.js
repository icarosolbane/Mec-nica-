
let inventory = JSON.parse(localStorage.getItem('t20_inventory')||'[]');

function saveInventory(){
 localStorage.setItem('t20_inventory',JSON.stringify(inventory));
}

function renderInventory(){
 let el=document.getElementById('inventory');
 el.innerHTML='';
 inventory.forEach((it,i)=>{
   el.innerHTML += `<div class="item"><b>${it.nome}</b><br>${it.info}<br><button class="remove" onclick="removeItem(${i})">❌ Remover</button></div>`;
 });
}

function removeItem(i){
 inventory.splice(i,1);
 saveInventory();
 renderInventory();
}

function clearInventory(){
 if(confirm('Apagar todo o inventário?')){
   inventory=[];
   saveInventory();
   renderInventory();
 }
}

function saveCharacter(){
 const c={name:charName.value,level:charLevel.value};
 localStorage.setItem('t20_character',JSON.stringify(c));
 charMsg.innerText='Personagem salvo.';
}

(function(){
 const c=JSON.parse(localStorage.getItem('t20_character')||'null');
 if(c){
   charName.value=c.name||'';
   charLevel.value=c.level||'';
 }
 renderInventory();
})();

function addEng(){
 let base=Number(engBase.value||0);
 let apr=Number(engApr.value||0);

 let info=`PM Base: ${base} | PM Aprimoramentos: ${apr} | Custo Fabricação: T$ ${base*100} | CD Fabricação: ${20+base} | CD Ativação: ${15+apr}`;

 inventory.push({nome:'Engenhoca: '+(engName.value||'Sem Nome'),info});
 saveInventory();
 renderInventory();
 engOut.innerText=info;
}

function addPotion(){
 let pm=Number(potPM.value||0);
 let preco=30*(pm*pm);

 let info=`PM Total: ${pm} | Preço Compra: T$ ${preco} | Custo Fabricação: T$ ${preco/3} | CD Fabricação: ${20+pm}`;

 inventory.push({nome:'Poção: '+(potName.value||'Sem Nome'),info});
 saveInventory();
 renderInventory();
 potOut.innerText=info;
}

function addScroll(){
 let base=Number(scrBase.value||0);
 let apr=Number(scrApr.value||0);

 let preco=30*(base*base);

 let info=`PM Base: ${base} | Preço Compra: T$ ${preco} | Custo Fabricação: T$ ${preco/3} | CD Fabricação: ${20+base} | Aprimoramentos ao Usar: ${apr} | CD Ativação: ${20+apr}`;

 inventory.push({nome:'Pergaminho: '+(scrName.value||'Sem Nome'),info});
 saveInventory();
 renderInventory();
 scrOut.innerText=info;
}
