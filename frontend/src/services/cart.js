const KEY = 'bb_cart_v1';

function load(){
  try{ return JSON.parse(localStorage.getItem(KEY) || '[]'); }catch(e){ return [] }
}

function save(items){ localStorage.setItem(KEY, JSON.stringify(items)); }

export function addToCart(item){
  const items = load();
  const existing = items.find(i=>i.book===item.book);
  if (existing) existing.qty = (existing.qty||1) + (item.qty||1);
  else items.push(item);
  save(items);
}

export function getCart(){ return load(); }

export function clearCart(){ localStorage.removeItem(KEY); }

export function removeItem(bookId){ const items=load().filter(i=>i.book!==bookId); save(items); }

export default { addToCart, getCart, clearCart, removeItem };
