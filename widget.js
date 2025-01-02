(function() {
  // 위치 설정 가져오기
  const positionData = document.getElementById('logos-ai-widget')?.dataset.position;
  const position = positionData ? JSON.parse(positionData) : { bottom: '20px', right: '20px' };
  
  // 모드 설정 가져오기
  const mode = document.getElementById('logos-ai-widget')?.dataset.mode || 'dark';

  // 스타일 생성
  const style = document.createElement('style');
  style.textContent = `
    .logos-chat-widget {
      position: fixed;
      ${position.bottom ? `bottom: ${position.bottom};` : ''}
      ${position.right ? `right: ${position.right};` : ''}
      ${position.top ? `top: ${position.top};` : ''}
      ${position.left ? `left: ${position.left};` : ''}
      z-index: 9999;
    }

    .logos-chat-iframe {
      width: 400px;
      height: 600px;
      border: none;
      border-radius: 16px;
      box-shadow: ${mode === 'light' 
        ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
        : '0 8px 32px rgba(0, 0, 0, 0.3)'};
      margin-bottom: 70px;
      opacity: 0;
      visibility: hidden;
      transform-origin: bottom right;
      transform: translateY(20px) scale(0.9);
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      background-color: ${mode === 'light' ? '#ffffff' : '#1f2937'};
      border: ${mode === 'light' 
        ? '1px solid rgba(0, 0, 0, 0.1)' 
        : '1px solid rgba(255, 255, 255, 0.1)'};
    }

    .logos-chat-iframe.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }

    .logos-chat-button {
      position: fixed;
      ${position.bottom ? `bottom: ${position.bottom};` : ''}
      ${position.right ? `right: ${position.right};` : ''}
      ${position.top ? `top: ${position.top};` : ''}
      ${position.left ? `left: ${position.left};` : ''}
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: ${mode === 'light' 
        ? '0 4px 24px rgba(59, 130, 246, 0.2)' 
        : '0 4px 24px rgba(59, 130, 246, 0.3)'};
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      overflow: hidden;
    }

    .logos-chat-button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .logos-chat-button:hover {
      transform: scale(1.1) rotate(-10deg);
      box-shadow: ${mode === 'light' 
        ? '0 8px 32px rgba(59, 130, 246, 0.3)' 
        : '0 8px 32px rgba(59, 130, 246, 0.4)'};
    }

    .logos-chat-button:hover::before {
      opacity: 1;
    }

    .logos-chat-button.open {
      transform: scale(1) rotate(180deg);
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: ${mode === 'light' 
        ? '0 4px 24px rgba(239, 68, 68, 0.2)' 
        : '0 4px 24px rgba(239, 68, 68, 0.3)'};
    }

    .logos-chat-button svg {
      width: 28px;
      height: 28px;
      stroke: white;
      stroke-width: 2;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes float {
      0% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-5px) scale(1.05); }
      100% { transform: translateY(0px) scale(1); }
    }

    @keyframes ripple {
      0% { transform: scale(1); opacity: 0.4; }
      100% { transform: scale(2); opacity: 0; }
    }

    .logos-chat-button:not(.open) {
      animation: float 3s ease-in-out infinite;
    }

    .logos-chat-button:not(.open)::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: #3b82f6;
      z-index: -1;
      animation: ripple 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
    }

    @media (max-width: 480px) {
      .logos-chat-iframe {
        width: calc(100vw - 40px);
        height: calc(100vh - 100px);
        max-height: 600px;
      }
    }
  `;
  document.head.appendChild(style);

  const widget = document.createElement('div');
  widget.className = 'logos-chat-widget';
  
  const iframe = document.createElement('iframe');
  iframe.className = 'logos-chat-iframe';
  const chatId = document.getElementById('logos-ai-widget')?.dataset.chatId;
  const chatUrl = document.getElementById('logos-ai-widget')?.dataset.url;
  iframe.src = chatUrl || `http://logosai.info:8000/public-chat/${chatId}?mode=${mode}`;
  
  const button = document.createElement('button');
  button.className = 'logos-chat-button';
  button.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2"/>
    </svg>
  `;

  widget.appendChild(iframe);
  document.body.appendChild(widget);
  document.body.appendChild(button);

  let isOpen = false;
  button.addEventListener('click', () => {
    isOpen = !isOpen;
    iframe.classList.toggle('open', isOpen);
    button.classList.toggle('open', isOpen);
  });
})();