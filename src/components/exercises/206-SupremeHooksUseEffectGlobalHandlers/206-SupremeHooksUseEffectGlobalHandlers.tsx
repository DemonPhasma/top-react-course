import { useEffect, useState } from 'react';

function SupremeHooksUseEffectGlobalHandlers() {
  useEffect(() => {
    const handleClick = () => {
      document.body.style.backgroundColor =
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div>
      206. SupremeHooksUseEffectGlobalHandlers
      <br />
      <a href="">Ссылка</a>
    </div>
  );
}

export default SupremeHooksUseEffectGlobalHandlers;
