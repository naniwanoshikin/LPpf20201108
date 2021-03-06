'use strict'; // 自己紹介
{
  // プロフィール モーダル ＝＝＝＝＝＝＝＝＝＝＝
  const open = document.getElementById('open');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  // const close = document.getElementById('close');

  // モーダル表示
  open.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
  // モーダル解除
  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('hidden');
  });

  // アイコン ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  const face = document.getElementById('face');
  const img = document.createElement('img');
  face.appendChild(img);
  newface();
  function newface() {
    let num = Math.floor(Math.random() * 3) + 1;
    img.src = `src/img/face${num}.jpeg`;
  }
  face.addEventListener('click', () => {
    newface();
  });

}
