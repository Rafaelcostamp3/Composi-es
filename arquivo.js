(function() {
  const ua = navigator.userAgent || '';
  if (/Instagram|FBAN|FBAV|Messenger/i.test(ua)) {
    const aviso = document.createElement('div');
    aviso.innerHTML = `
      ⚠️ <b>Para ouvir corretamente:</b><br>
      Toque nos três pontinhos (⋮) e escolha <b>"Abrir no navegador"</b>.
    `;
    Object.assign(aviso.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255,245,200,0.97)',
      color: '#222',
      textAlign: 'center',
      padding: '16px',
      fontSize: '15px',
      zIndex: 999999
    });
    document.body.appendChild(aviso);
  }
})();
